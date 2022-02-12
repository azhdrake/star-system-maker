/****************\
 * Data Storage *
\****************/

const SYSTEM = 0;
const GROUP  = 1;
const STAR   = 2;
const PLANET = 3;
const MOON   = 4;

let system_id = group_id = star_id = planet_id = 0;

/***********************\
 * Tabs and Navigation *
\***********************/

const stars_button = document.querySelector("#stars");
const planets_button = document.querySelector("#planets");
const moons_button = document.querySelector("#moons");

const physical_button = document.querySelector("#physical");
const orbit_button = document.querySelector("#orbit");
const time_button = document.querySelector("#time");

const individual_button = document.querySelector("#individual");
const group_button = document.querySelector("#group");
const shared_button = document.querySelector("#shared");

const star_selector = document.querySelectorAll(".star-selector");
const planet_selector = document.querySelectorAll(".planet-selector");
const group_selector = document.querySelectorAll(".group-selector");

const save_button = document.querySelector("#save-button");
const load_button = document.querySelector("#load-button");

const system_name_field = document.querySelectorAll(".system-name");
const group_name_field = document.querySelectorAll(".group-name");
const star_name_field = document.querySelectorAll(".star-name");
const planet_name_field = document.querySelectorAll(".planet-name");
const moon_name_field = document.querySelectorAll(".moon-name");

stars_button.addEventListener("click", function(){ open_tab("stars-content", "tab")} );
planets_button.addEventListener("click", function(){ open_tab("planets-content", "tab")});
moons_button.addEventListener("click", function(){ open_tab("moons-content", "tab")});

stars_button.addEventListener("click", function(){ select_button(stars_button, "top-btn")} );
planets_button.addEventListener("click", function(){ select_button(planets_button, "top-btn")});
moons_button.addEventListener("click", function(){ select_button(moons_button, "top-btn")});

physical_button.addEventListener("click", function(){ open_tab("physical-content", "planet-tab")} );
orbit_button.addEventListener("click", function(){ open_tab("orbit-content", "planet-tab")} );
time_button.addEventListener("click", function(){ open_tab("time-content", "planet-tab")} );

physical_button.addEventListener("click", function(){ select_button(physical_button, "planet-btn")} );
orbit_button.addEventListener("click", function(){ select_button(orbit_button, "planet-btn")} );
time_button.addEventListener("click", function(){ select_button(time_button, "planet-btn")} );

individual_button.addEventListener("click", function(){ open_tab("individual-content", "star-tab")} );
group_button.addEventListener("click", function(){ open_tab("group-content", "star-tab")} );
shared_button.addEventListener("click", function(){ open_tab("shared-content", "star-tab")} );

individual_button.addEventListener("click", function(){ select_button(individual_button, "star-btn")} );
group_button.addEventListener("click", function(){ select_button(group_button, "star-btn")} );
shared_button.addEventListener("click", function(){ select_button(shared_button, "star-btn")} );

save_button.addEventListener("click", function(){ download(JSON.stringify(system_list), "Star System Save Data.txt")} )
load_button.addEventListener("input", function(){ upload(load_button.files[0])} )

const page_dimmer = document.querySelector("#dim-page");
const help_window = document.querySelector("#help-info");
const help_tooltip = document.querySelector("#help-tooltip");

page_dimmer.addEventListener("click", function(){ page_dimmer.classList.add("hidden"); });

help_btns = document.querySelectorAll(".help-btn");
for(let i = 0; i < help_btns.length; i++){
  help_btns[i].addEventListener("click", function(){ get_help(help_btns[i].id)} );
  help_btns[i].addEventListener("mouseenter", function(){ help_hover(event, help_btns[i].id)} );
  help_btns[i].addEventListener("mouseleave", function(){ help_tooltip.classList.add("hidden");} );
}

function open_tab(tab_name, tab_group) {
  var tab = document.getElementsByClassName(tab_group);
  for (var i = 0; i < tab.length; i++) {
    tab[i].classList.add("hidden");  
  }
  document.getElementById(tab_name).classList.remove("hidden");
  
  table_header = document.querySelector("#group-choose-table");
  if(tab_name == "group-content" || tab_name == "shared-content"){
    table_header.classList.remove("hidden");
  } else {
    table_header.classList.add("hidden");
  }
}

function select_button(btn, btn_group){
  var btns = document.getElementsByClassName(btn_group);
  for (var i = 0; i < btns.length; i++) {
    btns[i].classList.remove("selected-button");  
  }
  btn.classList.add("selected-button")
}

function fill_selectors(type){
  let parent_div;
  if(type == SYSTEM){
    parent_div = document.getElementById("systems");
    parent_div.innerHTML = "";
    section = system_list;
  } else if(type == GROUP){
    section = system_list[system_id]["Star Groups"];
    parent_div = document.getElementById("div2-" + type);
  } else if(type == STAR){ 
    section = system_list[system_id]["Star Groups"][group_id]["Stars"];
    parent_div = document.getElementById("div2-" + type);
  } else if(type == PLANET){
    section = system_list[system_id]["Star Groups"][group_id]["Planets"];
    parent_div = document.getElementById("div2-" + type);
  } else if(type == MOON){ 
    section = system_list[system_id]["Star Groups"][group_id]["Planets"][planet_id]["Moons"];
    parent_div = document.getElementById("div2-" + type);
  } else {
    return
  }
  
  for (let i = 0; i < section.length; i++){
    let child_div = document.createElement("div");
    child_div.classList.add("full-length-flex");
    child_div.id = type + "-div-" + section[i]["ID"];

    let btn = document.createElement("button");
    btn.innerHTML = section[i]["Name"];
    btn.classList.add("sidebar-item");

    btn.addEventListener( "click", function(){ sidebar_select(i, type);} );
    parent_div.appendChild(child_div);
    child_div.appendChild(btn);
  }
}

function sidebar_select(selected_id, type){
  if(type == SYSTEM){ 
    system_id = selected_id; 
    section = system_list[system_id];
    for (let i = 0; i < system_name_field.length; i++) {
      system_name_field[i].innerHTML = section["Name"];
      clear_body_names(type)
    }
  } else if(type == GROUP){ 
    group_id = selected_id;
    section = system_list[system_id]["Star Groups"][group_id];
    for (let i = 0; i < group_name_field.length; i++) {
      group_name_field[i].innerHTML = section["Name"];
      clear_body_names(type)
    } 
  } else if(type == STAR){ 
    star_id = selected_id; 
    section = system_list[system_id]["Star Groups"][group_id]["Stars"][star_id];
    for (let i = 0; i < star_name_field.length; i++) {
      star_name_field[i].innerHTML = section["Name"];
      clear_body_names(type)
    } 
  } else if(type == PLANET){
    planet_id = selected_id; 
    section = system_list[system_id]["Star Groups"][group_id]["Planets"][planet_id];
    for (let i = 0; i < planet_name_field.length; i++) {
      planet_name_field[i].innerHTML = section["Name"];
      clear_body_names(type)
    } 
  } else if(type == MOON){ 
    moon_id = selected_id; 
    section = system_list[system_id]["Star Groups"][group_id]["Planets"][planet_id]["Moons"][moon_id];
    for (let i = 0; i < moon_name_field.length; i++) {
      moon_name_field[i].innerHTML = section["Name"];
    } 
  }

  let parent_div = document.getElementById(type + "-div-" + selected_id);


  for(const grouping in section){
    if(Array.isArray(section[grouping])){
      for(let i=0;i<section[grouping].length;i++){
        
        let additive = 1;
        if(grouping == "Planets"){ additive = 2; }

        let child_div = document.getElementById("div2-" + (type + additive));

        if(child_div){
          child_div.parentNode.removeChild(child_div);
        }

        let new_child_div = document.createElement("div");
        new_child_div.id  = "div2-" + (type + additive);
        new_child_div.classList.add("indent");
        new_child_div.classList.add("full-length-flex");
        new_child_div.classList.add("sidebar-header")

        parent_div.appendChild(new_child_div);
      }
    }
  }
  if(type == GROUP){fill_selectors(type+2);}
  if(type != STAR){ fill_selectors(type+1);}

  load_time();
}

function get_help(btn_id){
  for(btn_name in help){
    if(btn_name == btn_id){
      page_dimmer.classList.remove("hidden");
      help_window.innerHTML = help[btn_name];
    }
  }
}

function help_hover(event, btn_id){
  for(btn_name in help){
    if(btn_name == btn_id){
      help_tooltip.classList.remove("hidden");
      help_tooltip.innerHTML = help[btn_name];

      help_tooltip.style.left = event.pageX + 'px';
      help_tooltip.style.top = event.pageY + 'px';

    }
  }
}

/***************\
 * Caculations *
\***************/
const star_mass_field = document.querySelector("#star-mass");
const star_mass_metric_field = document.querySelector("#star-mass-metric");
const star_luminosity_field = document.querySelector("#star-luminosity");
const star_diamter_field = document.querySelector("#star-diamter");
const star_diamter_metric_field = document.querySelector("#star-diamter-metric");
const star_temp_field = document.querySelector("#star-temp");
const star_temp_metric_field = document.querySelector("#star-temp-metric");
const star_lifetime_field = document.querySelector("#star-lifetime");
const star_lifetime_year_field = document.querySelector("#star-lifetime-year");
const star_planet_inner_field = document.querySelector("#star-planet-inner");
const star_planet_outer_field = document.querySelector("#star-planet-outer");
const star_habitable_inner_field = document.querySelector("#star-habitable-inner");
const star_habitable_outer_field = document.querySelector("#star-habitable-outer");
const star_frost_field = document.querySelector("#star-frost");

const star_a_eccentrisity_field = document.querySelector("#star-a-eccentrisity");
const star_b_eccentrisity_field = document.querySelector("#star-b-eccentrisity");
const star_a_semimajor_field = document.querySelector("#star-a-semimajor");
const star_b_semimajor_field = document.querySelector("#star-b-semimajor");
const star_a_barycenter_field = document.querySelector("#star-a-barycenter");
const star_b_barycenter_field = document.querySelector("#star-b-barycenter");
const star_a_barycenter_max_field = document.querySelector("#star-a-barycenter-max");
const star_b_barycenter_max_field = document.querySelector("#star-b-barycenter-max");
const star_a_barycenter_min_field = document.querySelector("#star-a-barycenter-min");
const star_b_barycenter_min_field = document.querySelector("#star-b-barycenter-min");

const shared_separation_avg_field = document.querySelector("#shared-separation-avg");
const shared_separation_min_field = document.querySelector("#shared-separation-min");
const shared_separation_max_field = document.querySelector("#shared-separation-max");
const shared_period_field = document.querySelector("#shared-orbital-period");
const shared_planet_inner_field = document.querySelector("#shared-planet-inner");
const shared_planet_outer_field = document.querySelector("#shared-planet-outer");
const shared_habitable_inner_field = document.querySelector("#shared-habitable-inner");
const shared_habitable_outer_field = document.querySelector("#shared-habitable-outer");
const shared_frost_field = document.querySelector("#shared-frost-line");
const shared_death_inner_field = document.querySelector("#shared-death-inner");
const shared_death_outer_field = document.querySelector("#shared-death-outer");

const planet_mass_field = document.querySelector("#planet-mass");
const planet_mass_metric_field = document.querySelector("#planet-mass-metric");
const planet_radius_field = document.querySelector("#planet-radius");
const planet_radius_metric_field = document.querySelector("#planet-radius-metric");
const planet_gravity_field = document.querySelector("#planet-gravity");
const planet_massgravity_metric_field = document.querySelector("#planet-gravity-metric");
const planet_density_field = document.querySelector("#planet-density");
const planet_density_metric_field = document.querySelector("#planet-density-metric");
const planet_velocity_field = document.querySelector("#planet-velocity");
const planet_velocity_metric_field = document.querySelector("#planet-velocity-metric");
const planet_circumference_field = document.querySelector("#planet-circumference");
const planet_circumference_metric_field = document.querySelector("#planet-circumference-metric");
const planet_area_field = document.querySelector("#planet-area");
const planet_area_metric_field = document.querySelector("#planet-area-metric");
const planet_volume_field = document.querySelector("#planet-volume");
const planet_volume_metric_field = document.querySelector("#planet-volume-metric");
const planet_temp_field = document.querySelector("#planet-temp");
const planet_temp_metric_field = document.querySelector("#planet-temp-metric");

const planet_eccentricity_field = document.querySelector("#planet-eccentricity");
const planet_semimajor_field = document.querySelector("#planet-semimajor");
const planet_semiminor_field = document.querySelector("#planet-semiminor");
const planet_periapsis_field = document.querySelector("#planet-periapsis");
const planet_apoapsis_field = document.querySelector("#planet-apoapsis");
const planet_period_field = document.querySelector("#planet-period");
const planet_year_earth_field = document.querySelector("#planet-year-earth");
const planet_orbital_velocity_field = document.querySelector("#planet-orbital-velocity");
const planet_inner_hill_field = document.querySelector("#planet-inner-hill");
const planet_outer_hill_field = document.querySelector("#planet-outer-hill");

const planet_day_hours_field = document.querySelector("#planet-year-hours");
const planet_year_local_field = document.querySelector("#planet-year-local");
const planet_months_year_field = document.querySelector("#planet-months-year");
const planet_days_month_field = document.querySelector("#planet-days-month");
const planet_hour_local_field = document.querySelector("#planet-hour-local");
const planet_hour_earth_field = document.querySelector("#planet-hour-earth");
const planet_min_local_field = document.querySelector("#planet-min-local");
const planet_min_earth_field = document.querySelector("#planet-min-earth");
const planet_sec_local_field = document.querySelector("#planet-sec-local");
const planet_sec_earth_field = document.querySelector("#planet-sec-earth");

star_mass_field.addEventListener('input', function(){ save_time()} );

star_a_eccentrisity_field.addEventListener('input', function(){ save_time()} );
star_b_eccentrisity_field.addEventListener('input', function(){ save_time()} );

shared_separation_avg_field.addEventListener('input', function(){ save_time()} );

planet_eccentricity_field.addEventListener('input', function(){ save_time()} );
planet_semimajor_field.addEventListener('input', function(){ save_time()} );
planet_mass_field.addEventListener('input', function(){ save_time()} );
planet_radius_field.addEventListener('input', function(){ save_time()} );
planet_day_hours_field.addEventListener('input', function(){ save_time()} );
planet_months_year_field.addEventListener('input', function(){ save_time()} );
planet_hour_local_field.addEventListener('input', function(){ save_time()} );
planet_min_local_field.addEventListener('input', function(){ save_time()} );
planet_sec_local_field.addEventListener('input', function(){ save_time()} );

function calc_time(){
  star_mass = star_mass_field.value;
  star_mass_metric_field.innerHTML = star_mass * 1.98847E+30;
  star_lum = star_luminosity_field.innerHTML = Math.pow(star_mass, 3);
  star_diamter_field.innerHTML = Math.pow(star_mass, 0.74);
  star_diamter_metric_field.innerHTML = Math.pow(star_mass, 0.74)*1392700;
  star_temp_field.innerHTML = Math.pow(star_mass, 0.505);
  star_temp_metric_field.innerHTML = Math.pow(star_mass, 0.505)*5778;
  star_lifetime_field.innerHTML = Math.pow(star_mass, -2.5);
  star_lifetime_year_field.innerHTML = Math.pow(star_mass, -2.5)*8000000000;
  star_planet_inner_field.innerHTML = star_mass*0.1;
  star_planet_outer_field.innerHTML = star_mass*40;
  star_habitable_inner_field.innerHTML = Math.sqrt(star_mass)*0.95;
  star_habitable_outer_field.innerHTML = Math.sqrt(star_mass)*1.37;
  star_frost_field.innerHTML = Math.sqrt(star_mass)*4.85;
  
  star_a_mass = star_b_mass = star_a_eccentrisity = star_b_eccentrisity = shared_separation_avg = star_a_lum = star_b_lum = 0;

  if(group_id == 0 || group_id == 1){
    star_a_mass = Number(system_list[system_id]["Star Groups"][group_id]["Stars"][0]["Mass"]);
    star_b_mass = Number(system_list[system_id]["Star Groups"][group_id]["Stars"][1]["Mass"]);
    star_a_eccentrisity = Number(system_list[system_id]["Star Groups"][group_id]["Stars"][0]["Eccentrisity"]);
    star_b_eccentrisity = Number(system_list[system_id]["Star Groups"][group_id]["Stars"][1]["Eccentrisity"]);
    shared_separation_avg = Number(system_list[system_id]["Star Groups"][group_id]["Average Separation"]);
  } else {
    for(let star in system_list[system_id]["Star Groups"][0]["Stars"]){
      star_a_mass += star["Mass"];
      star_a_lum =  Math.pow(star_a_mass, 3);
    }
    for(let star in system_list[system_id]["Star Groups"][1]["Stars"]){
      star_b_mass += star["Mass"];
      star_b_lum =  Math.pow(star_b_mass, 3);
    }
    star_a_eccentrisity = system_list[system_id]["Star Groups"][0]["Eccentrisity"]
    star_b_eccentrisity = system_list[system_id]["Star Groups"][1]["Eccentrisity"]
    shared_separation_avg = system_list[system_id]["Average Separation"];
  }

  barycenter_a = star_a_barycenter_field.innerHTML = shared_separation_avg* (star_b_mass / (Number(star_a_mass) + Number(star_b_mass)));
  barycenter_b = star_b_barycenter_field.innerHTML = shared_separation_avg - barycenter_a;
  bary_max_a = star_a_barycenter_max_field.innerHTML = (1 + star_a_eccentrisity) * barycenter_a;
  bary_max_b = star_b_barycenter_max_field.innerHTML = (1 + star_b_eccentrisity) * barycenter_b;
  bary_min_a = star_a_barycenter_min_field.innerHTML = (1 - star_a_eccentrisity) * barycenter_a;
  bary_min_b = star_b_barycenter_min_field.innerHTML = (1 - star_b_eccentrisity) * barycenter_b;
  star_a_semimajor = star_a_semimajor_field.innerHTML = (bary_max_a + bary_min_a) / 2;
  star_b_semimajor = star_b_semimajor_field.innerHTML = (bary_max_b + bary_min_b) / 2;

  shared_min_sep = shared_separation_min_field.innerHTML = bary_min_a + bary_min_b;
  shared_max_sep = shared_separation_max_field.innerHTML = bary_max_a + bary_max_b;
  shared_period_field.innerHTML = ((2*Math.PI)*Math.sqrt((((star_a_semimajor+star_b_semimajor)*149600000000)^3)/(6.674E-11*(star_a_mass+star_b_mass))))/31540000;

  if(group_id == 0 || group_id == 1){
  shared_planet_inner_field.innerHTML = (star_a_mass+star_b_mass) * 0.1;
  shared_planet_outer_field.innerHTML = (star_a_mass+star_b_mass) * 40;
  shared_habitable_inner_field.innerHTML = Math.sqrt(star_a_lum + star_b_lum) * 0.95;
  shared_habitable_outer_field.innerHTML =  Math.sqrt(star_a_lum + star_b_lum) * 1.37;
  shared_frost_field.innerHTML =  Math.sqrt(star_a_lum + star_b_lum) * 4.85;
  shared_death_inner_field.innerHTML = shared_min_sep / 3;
  shared_death_outer_field.innerHTML = shared_max_sep * 3
  } else {
    shared_planet_inner_field.innerHTML = shared_planet_outer_field.innerHTML = shared_habitable_inner_field.innerHTML = shared_habitable_outer_field.innerHTML = shared_frost_field.innerHTML = shared_death_inner_field.innerHTML = shared_death_outer_field.innerHTML = "N/A"
  }

  planet_eccentricity = planet_eccentricity_field.value;
  planet_semimajor = planet_semimajor_field.value;
  planet_mass = planet_mass_field.value;
  planet_rad = planet_radius_field.value;

  planet_mass_metric_field.innerHTML = planet_mass*5.972E+24;
  planet_radius_metric_field.innerHTML = planet_rad*6371;
  planet_gravity_field.innerHTML = planet_mass/Math.pow(planet_rad, 2);
  planet_massgravity_metric_field.innerHTML = (planet_mass/Math.pow(planet_rad, 2))*9.807;
  planet_density_field.innerHTML = planet_rad/planet_mass;
  planet_density_metric_field.innerHTML = (planet_rad/planet_mass)*5.15;
  planet_velocity_field.innerHTML = Math.sqrt(planet_mass/planet_rad);
  planet_velocity_metric_field.innerHTML = Math.sqrt(planet_mass/planet_rad)*11.2;
  planet_circumference_field.innerHTML = 2*Math.PI*planet_rad;
  planet_circumference_metric_field.innerHTML = 2*Math.PI*planet_rad*6371;
  planet_area_field.innerHTML = 4*Math.PI*Math.pow(planet_rad, 2);
  planet_area_metric_field.innerHTML = 4*Math.PI*Math.pow(planet_rad*6371, 2); 
  planet_volume_field.innerHTML = (4/3)*Math.PI*(Math.pow(planet_rad, 3));
  planet_volume_metric_field.innerHTML = (4/3)*Math.PI*(Math.pow(planet_rad*6371, 3));
  planet_temp_field.innerHTML = (Math.pow(star_lum, 1/4))/(Math.pow(planet_semimajor, 1/2));
  planet_temp_metric_field.innerHTML = (Math.pow(star_lum, 1/4)/Math.pow(planet_semimajor, 1/2))*288;

  planet_semiminor_field.innerHTML = planet_semimajor*Math.sqrt(1-Math.pow(planet_eccentricity, 2));
  planet_periapsis_field.innerHTML = planet_semimajor*(1-planet_eccentricity);
  planet_apoapsis_field.innerHTML = planet_semimajor*(1+planet_eccentricity);
  planet_period_field.innerHTML = Math.sqrt(Math.pow(planet_semimajor, 3)/star_mass);
  planet_year_earth = planet_year_earth_field.innerHTML = Math.sqrt(Math.pow(planet_semimajor, 3)/star_mass) * 365;
  planet_orbital_velocity_field.innerHTML = Math.sqrt(star_mass/planet_semimajor);
  planet_inner_hill_field.innerHTML = 2.44 * planet_rad * Math.pow((planet_rad/planet_mass)/star_mass, 1/3);
  planet_outer_hill_field.innerHTML = planet_semimajor * Math.pow(planet_mass/star_mass, 1/3) * 235;

  planet_day_hours = planet_day_hours_field.value;
  planet_year_local = planet_year_local_field.innerHTML = (planet_year_earth*24) / planet_day_hours
  planet_months_year = planet_months_year_field.value;
  planet_days_month_field.innerHTML = planet_year_local / planet_months_year;
  planet_hour_local = planet_hour_local_field.value;
  planet_hour_earth = planet_hour_earth_field.innerHTML = planet_day_hours / planet_hour_local;
  planet_min_local = planet_min_local_field.value;
  planet_min_earth = planet_min_earth_field.innerHTML = (planet_hour_earth / planet_min_local) * 60;
  planet_sec_local = planet_sec_local_field.value;
  planet_sec_earth_field.innerHTML = (planet_min_earth / planet_sec_local) * 60;
}

/***************\
 * Saving Data *
\***************/
function save_time(){
  if(group_id == 2){
    system_list[system_id]["Average Separation"] = shared_separation_avg_field.value;
    system_list[system_id]["Star Groups"][0]["Eccentrisity"] = star_a_eccentrisity_field.value;
    system_list[system_id]["Star Groups"][1]["Eccentrisity"] = star_b_eccentrisity_field.value;
  } else {
    for(let i = 0; i < system_list[system_id]["Star Groups"].length; i++){
      if(system_list[system_id]["Star Groups"][i]["ID"] == group_id){
        system_list[system_id]["Star Groups"][i]["Average Separation"] = shared_separation_avg_field.value;
        for(let k = 0; k < system_list[system_id]["Star Groups"][i]["Stars"].length; k++){
          if(system_list[system_id]["Star Groups"][i]["Stars"][k]["ID"] == 0){
            system_list[system_id]["Star Groups"][i]["Stars"][k]["Eccentrisity"] = star_a_eccentrisity_field.value;
          }
          else if(system_list[system_id]["Star Groups"][i]["Stars"][k]["ID"] == 1){
            system_list[system_id]["Star Groups"][i]["Stars"][k]["Eccentrisity"] = star_b_eccentrisity_field.value;
          }
          if(system_list[system_id]["Star Groups"][i]["Stars"][k]["ID"] == star_id){
            system_list[system_id]["Star Groups"][i]["Stars"][k]["Mass"] = star_mass_field.value;
            for(let j = 0; j < system_list[system_id]["Star Groups"][i]["Planets"].length; j++){
              if(system_list[system_id]["Star Groups"][i]["Planets"][j]["ID"] == planet_id){
                system_list[system_id]["Star Groups"][i]["Planets"][j]["Mass"] = planet_mass_field.value;
                system_list[system_id]["Star Groups"][i]["Planets"][j]["Radius"] = planet_radius_field.value;
                system_list[system_id]["Star Groups"][i]["Planets"][j]["Eccentricity"] = planet_eccentricity_field.value;
                system_list[system_id]["Star Groups"][i]["Planets"][j]["Semi-Major Axis"] = planet_semimajor_field.value;
                system_list[system_id]["Star Groups"][i]["Planets"][j]["Axial Tilt"] = "";
                system_list[system_id]["Star Groups"][i]["Planets"][j]["Day Length"] = planet_day_hours_field.value;
                system_list[system_id]["Star Groups"][i]["Planets"][j]["Months/Year"] = planet_months_year_field.value;
                system_list[system_id]["Star Groups"][i]["Planets"][j]["Hour/Day"] = planet_hour_local_field.value;
                system_list[system_id]["Star Groups"][i]["Planets"][j]["Min/Hr"] = planet_min_local_field.value;
                system_list[system_id]["Star Groups"][i]["Planets"][j]["Sec/Min"] = planet_sec_local_field.value;
              }
            }
          }
        }
      }
    }
  }
  calc_time();
}

function download(data, filename) {
  var file = new Blob([data], {type: 'text/plain'});
  if (window.navigator.msSaveOrOpenBlob) // IE10+
      window.navigator.msSaveOrOpenBlob(file, filename);
  else { // Others
      var a = document.createElement("a"),
              url = URL.createObjectURL(file);
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      setTimeout(function() {
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);  
      }, 0); 
  }
}

/****************\
 * Loading Data *
\****************/ 

function upload(file){
  let reader = new FileReader();
  reader.readAsText(file);
  reader.onload = function(e) {
    system_list = JSON.parse(reader.result);
    calc_time();
    load_time();
    fill_selectors(SYSTEM);
    // fill_system_select();
    // fill_group_selector();
    // fill_star_selector();
    // fill_planet_selector();
    for (let i = 0; i < system_name_field.length; i++) {
      system_name_field[i].innerHTML = system_list[0]["Name"]
    }
  }
}

function load_time(body_type, e){
  if(body_type == STAR){
    star_id = e;
  } else if(body_type == PLANET){
    planet_id = e;
  } else if(body_type == GROUP){
    group_id = e;
  }
  
  if(group_id == 2){
    star_a_eccentrisity_field.value = system_list[system_id]["Star Groups"][0]["Eccentrisity"];
    star_b_eccentrisity_field.value = system_list[system_id]["Star Groups"][1]["Eccentrisity"];
    shared_separation_avg_field.value = system_list[system_id]["Average Separation"];
  } else {
    for (let i = 0; i < system_list[system_id]["Star Groups"].length; i++){
      if(system_list[system_id]["Star Groups"][i]["ID"] == group_id){
        shared_separation_avg_field.value = system_list[system_id]["Star Groups"][i]["Average Separation"];
        star_a_eccentrisity_field.value = system_list[system_id]["Star Groups"][i]["Stars"][0]["Eccentrisity"];
        star_b_eccentrisity_field.value = system_list[system_id]["Star Groups"][i]["Stars"][1]["Eccentrisity"];
        for(let k = 0; k < system_list[system_id]["Star Groups"][i]["Stars"].length; k++){
          if(system_list[system_id]["Star Groups"][i]["Stars"][k]["ID"] == star_id){
            star_mass_field.value = system_list[system_id]["Star Groups"][i]["Stars"][k]["Mass"];
            for(let j =0; j < system_list[system_id]["Star Groups"][i]["Planets"].length; j++){
              if(system_list[system_id]["Star Groups"][i]["Planets"][j]["ID"] == planet_id){
                planet_mass_field.value = system_list[system_id]["Star Groups"][i]["Planets"][j]["Mass"];
                planet_radius_field.value = system_list[system_id]["Star Groups"][i]["Planets"][j]["Radius"];
                planet_eccentricity_field.value = system_list[system_id]["Star Groups"][i]["Planets"][j]["Eccentricity"];
                planet_semimajor_field.value = system_list[system_id]["Star Groups"][i]["Planets"][j]["Semi-Major Axis"];
                planet_day_hours_field.value = system_list[system_id]["Star Groups"][i]["Planets"][j]["Day Length"];
                planet_months_year_field.value = system_list[system_id]["Star Groups"][i]["Planets"][j]["Months/Year"]; 
                planet_hour_local_field.value = system_list[system_id]["Star Groups"][i]["Planets"][j]["Hour/Day"];
                planet_min_local_field.value = system_list[system_id]["Star Groups"][i]["Planets"][j]["Min/Hr"];
                planet_sec_local_field.value = system_list[system_id]["Star Groups"][i]["Planets"][j]["Sec/Min"];
              }
            }
          }
        }
      }
    }
  }
  calc_time();
 }

 
function clear_body_names(type){
  if(type == STAR){ return; }
  name_field_list = [moon_name_field, planet_name_field, star_name_field, group_name_field]
  for (let i = 0; i < (4-type); i++) {
    for (let j = 0; j < name_field_list[i].length; j++)
      name_field_list[i][j].innerHTML = "";
  }
}

/********\
 * MISC *
\********/ 

for (let i = 0; i < system_name_field.length; i++) {
  system_name_field[i].innerHTML = system_list[0]["Name"]
}
fill_selectors(SYSTEM);
//fill_group_selector();
//fill_star_selector();
//fill_planet_selector();
calc_time()
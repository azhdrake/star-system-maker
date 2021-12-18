/****************
 * Data Storage *
 ****************/

 let system_list = [
  {
   "ID": 0,
   "Name": "System 1",
   "Star Groups": [{
       "Stars" : [{
         "ID": 0,
         "Name": "Test Star 1",
         "Mass": 1 
       }], 
       "Planets": [{
         "ID": 0,
         "Name": "Test Star 1 Alpha",
         "Mass": 1,
         "Radius": 1,
         "Eccentricity": 0.25,
         "Semi-Major Axis": 1,
         "Axial Tilt": 30,
         "Day Length": 24,
         "Months/Year": 12,
         "Hour/Day": 24,
         "Min/Hr": 60,
         "Sec/Min": 60
       },{
         "ID": 1,
         "Name": "Test Star 1 Beta",
         "Mass": 2,
         "Radius": 1.25,
         "Eccentricity": 0.2,
         "Semi-Major Axis": 2,
         "Axial Tilt": 60,
         "Day Length": 24,
         "Months/Year": 12,
         "Hour/Day": 24,
         "Min/Hr": 60,
         "Sec/Min": 60
       }]
     },{
       "Stars" : [{
         "ID": 1,
         "Name": "Test Star 2",
         "Mass": 2
       }],
       "Planets": [{
           "ID": 0,
           "Name": "Test Star 2 Alpha",
           "Mass": 0.8,
           "Radius": 1.2,
           "Eccentricity": 0.3,
           "Semi-Major Axis": 1.1,
           "Axial Tilt": 30,
           "Day Length": 24,
           "Months/Year": 12,
           "Hour/Day": 24,
           "Min/Hr": 60,
           "Sec/Min": 60
         },{
           "ID": 1,
           "Name": "Test Star 2 Beta",
           "Mass": 0.9,
           "Radius": 0.9,
           "Eccentricity": 0.4,
           "Semi-Major Axis": .75,
           "Axial Tilt": 25,
           "Day Length":20,
           "Months/Year": 6,
           "Hour/Day": 10,
           "Min/Hr": 50,
           "Sec/Min": 50
         },{
           "ID": 2,
           "Name": "Test Star 2 Gamma",
           "Mass": 1.2,
           "Radius": 1.4,
           "Eccentricity": 0.1,
           "Semi-Major Axis": 1.3,
           "Axial Tilt": 20,
           "Day Length": 24.13,
           "Months/Year": 8,
           "Hour/Day": 15,
           "Min/Hr": 100,
           "Sec/Min": 100
         }]
     }],
   "Group Stats":[{
     "Group Name": "A+B",
     "In Use": false,
     "Eccentrisity": 0
   },{
     "Group Name": "C+D",
     "In Use": false,
     "Eccentrisity": 0,
   },{
     "Group Name": "AB+CD",
     "In Use": false,
     "Eccentrisity": 0,
   }],
   "Shared Stats": [
     {
       "Group Name": "A+B",
       "In Use": false,
       "Average Separation": 0
     },{
       "Group Name": "C+D",
       "In Use": false,
       "Average Separation": 0
     },{
       "Group Name": "AB+CD",
       "In Use": false,
       "Average Separation": 0
     }
   ]
 },{
   "ID": 1,
   "Name": "System 2",
   "Star Groups": [{
       "Stars" : [{
         "ID": 0,
         "Name": "Test Star 3",
         "Mass": 3 
       },{
         "ID": 1,
         "Name": "Test Star 4",
         "Mass": 4
       }], 
       "Planets": [{
         "ID": 0,
         "Name": "Test Star 3-4 Alpha",
         "Mass": 2,
         "Radius": .9,
         "Eccentricity": 0.25,
         "Semi-Major Axis": 2,
         "Axial Tilt": 40,
         "Day Length": 24,
         "Months/Year": 12,
         "Hour/Day": 24,
         "Min/Hr": 60,
         "Sec/Min": 60
       }]
     },{
       "Stars" : [{
         "ID": 2,
         "Name": "Test Star 5",
         "Mass": 5
       },{
         "ID": 3,
         "Name": "Test Star 6",
         "Mass": 6
       }],
       "Planets": [{
           "ID": 0,
           "Name": "Test Star 5-6 Alpha",
           "Mass": 1.2,
           "Radius": 1.5,
           "Eccentricity": 0.03,
           "Semi-Major Axis": 1.15,
           "Axial Tilt": 35,
           "Day Length": 24,
           "Months/Year": 12,
           "Hour/Day": 24,
           "Min/Hr": 60,
           "Sec/Min": 60
         },{
           "ID": 1,
           "Name": "Test Star 5-6 Beta",
           "Mass": 0.75,
           "Radius": 0.75,
           "Eccentricity": 0.075,
           "Semi-Major Axis": 1.75,
           "Axial Tilt": 75,
           "Day Length":20,
           "Months/Year": 6,
           "Hour/Day": 10,
           "Min/Hr": 50,
           "Sec/Min": 50
         }]
     }],
   "Group Stats":[{
     "Group Name": "A+B",
     "In Use": true,
     "Stats": [{
       "Eccentrisity": 0.5,
     },{
       "Eccentrisity": 0.05,
     }]
   },{
     "Group Name": "C+D",
     "In Use": true,
     "Stats": [{
       "Eccentrisity": 0.1,
     },{
       "Eccentrisity": 0.25,
     }]
   },{
     "Group Name": "AB+CD",
     "In Use": true,
     "Stats": [{
       "Eccentrisity": 0.2,
     },{
       "Eccentrisity": 0.4,
     }]
   }],
   "Shared Stats": [
     {
       "Group Name": "A+B",
       "In Use": true,
       "Average Separation": 0.2
     },{
       "Group Name": "C+D",
       "In Use": true,
       "Average Separation": 0.3
     },{
       "Group Name": "AB+CD",
       "In Use": true,
       "Average Separation": 413
     }
   ]
 },
];

const STAR = 0;
const PLANET = 1;
const MOON = 2;

let system_id = group_id = star_id = planet_id = 0;

/***********************
 * Tabs and Navigation *
 ***********************/

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

const save_button = document.querySelector("#save-button");
const load_button = document.querySelector("#load-button");

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

function open_tab(tab_name, tab_group) {
  var tab = document.getElementsByClassName(tab_group);
  for (var i = 0; i < tab.length; i++) {
    tab[i].classList.add("hidden");  
  }
  document.getElementById(tab_name).classList.remove("hidden"); 
}

function select_button(btn, btn_group){
  var btns = document.getElementsByClassName(btn_group);
  for (var i = 0; i < btns.length; i++) {
    btns[i].classList.remove("selected-button");  
  }
  btn.classList.add("selected-button")
}

function fill_system_select(){
  let sidebar = document.getElementById("systems");
  
  sidebar.innerHTML = "";
  
  for (let i = 0; i < system_list.length; i++){
    let el = document.createElement("button");
    el.innerHTML = system_list[i]["Name"];
    el.id = "system-" + system_list[i]["ID"];
    el.classList.add("sidebar-item")
    el.addEventListener("click", function(){ system_select(system_list[i]["ID"])} )
    sidebar.appendChild(el);
  }
}

function fill_star_selector(){
  for(let l = 0; l < star_selector.length; l++){
    star_selector[l].innerHTML = "";
  }
  for(let i = 0; i < star_selector.length; i++){
    star_selector[i].addEventListener("change", function(){load_time(STAR, this.value)} );
    star_selector[i].addEventListener("change", fill_planet_selector);

    for(let j = 0; j < system_list[system_id]["Star Groups"].length; j++) {
      for(let k = 0; k < system_list[system_id]["Star Groups"][j]["Stars"].length; k++){
        let el = document.createElement("option");
        el.textContent = system_list[system_id]["Star Groups"][j]["Stars"][k]["Name"];
        el.value = system_list[system_id]["Star Groups"][j]["Stars"][k]["ID"];
        star_selector[i].appendChild(el);
      }
    }
  }
}

function fill_planet_selector(){
  for(let l = 0; l < planet_selector.length; l++){
    planet_selector[l].innerHTML = "";
  }

  for(let i = 0; i < planet_selector.length; i++){
    for(let j = 0; j < system_list[system_id]["Star Groups"].length; j++) {
      for(let k = 0; k < system_list[system_id]["Star Groups"][j]["Stars"].length; k++){
        if(system_list[system_id]["Star Groups"][j]["Stars"][k]["ID"] == star_id){

          for(let k = 0; k < system_list[system_id]["Star Groups"][j]["Planets"].length; k++){
            let el = document.createElement("option");
            el.textContent = system_list[system_id]["Star Groups"][j]["Planets"][k]["Name"];
            el.value = system_list[system_id]["Star Groups"][j]["Planets"][k]["ID"];
            planet_selector[i].appendChild(el);
            planet_selector[i].addEventListener("change", function(){load_time(PLANET, this.value)} );
          }
        }
      }
    }
  }
}

function system_select(selected_system_id){
  system_id = selected_system_id;
  fill_star_selector();
  fill_planet_selector();
}

/***************
 * Caculations *
 ***************/
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

star_mass_field.addEventListener('input', calc_time);
star_mass_field.addEventListener('input', function(){ save_time(star_id, planet_id)} );

planet_eccentricity_field.addEventListener('input', calc_time);
planet_semimajor_field.addEventListener('input', calc_time);
planet_mass_field.addEventListener('input', calc_time);
planet_radius_field.addEventListener('input', calc_time);
planet_day_hours_field.addEventListener('input', calc_time);
planet_months_year_field.addEventListener('input', calc_time);
planet_hour_local_field.addEventListener('input', calc_time);
planet_min_local_field.addEventListener('input', calc_time);
planet_sec_local_field.addEventListener('input', calc_time);

planet_eccentricity_field.addEventListener('input', function(){ save_time(star_id, planet_id)} );
planet_semimajor_field.addEventListener('input', function(){ save_time(star_id, planet_id)} );
planet_mass_field.addEventListener('input', function(){ save_time(star_id, planet_id)} );
planet_radius_field.addEventListener('input', function(){ save_time(star_id, planet_id)} );
planet_day_hours_field.addEventListener('input', function(){ save_time(star_id, planet_id)} );
planet_months_year_field.addEventListener('input', function(){ save_time(star_id, planet_id)} );
planet_hour_local_field.addEventListener('input', function(){ save_time(star_id, planet_id)} );
planet_min_local_field.addEventListener('input', function(){ save_time(star_id, planet_id)} );
planet_sec_local_field.addEventListener('input', function(){ save_time(star_id, planet_id)} );

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

/***************
 * Saving Data *
 ***************/
function save_time(star_id, planet_id){
  for(let i = 0; i < system_list[system_id]["Star Groups"].length; i++){
    for(let k = 0; k < system_list[system_id]["Star Groups"][i]["Stars"].length; k++){
      if(system_list[system_id]["Star Groups"][i]["Stars"][k]["ID"] == star_id){
        system_list[system_id]["Star Groups"][i]["Stars"][k]["Mass"] = star_mass;
        for(let j = 0; j < system_list[system_id]["Star Groups"][i]["Planets"].length; j++){
          if(system_list[system_id]["Star Groups"][i]["Planets"][j]["ID"] == planet_id){
            system_list[system_id]["Star Groups"][i]["Planets"][j]["Mass"] = planet_mass;
            system_list[system_id]["Star Groups"][i]["Planets"][j]["Radius"] = planet_rad;
            system_list[system_id]["Star Groups"][i]["Planets"][j]["Eccentricity"] = planet_eccentricity;
            system_list[system_id]["Star Groups"][i]["Planets"][j]["Semi-Major Axis"] = planet_semimajor;
            system_list[system_id]["Star Groups"][i]["Planets"][j]["Axial Tilt"] = "";
            system_list[system_id]["Star Groups"][i]["Planets"][j]["Day Length"] = planet_day_hours;
            system_list[system_id]["Star Groups"][i]["Planets"][j]["Months/Year"] = planet_months_year;
            system_list[system_id]["Star Groups"][i]["Planets"][j]["Hour/Day"] = planet_hour_local;
            system_list[system_id]["Star Groups"][i]["Planets"][j]["Min/Hr"] = planet_min_local;
            system_list[system_id]["Star Groups"][i]["Planets"][j]["Sec/Min"] = planet_sec_local;
          }
        }
      }
    }
  }
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

/****************
 * Loading Data *
 ****************/ 

function upload(file){
  let reader = new FileReader();
  reader.readAsText(file);
  reader.onload = function(e) {
    system_list = JSON.parse(reader.result);
    calc_time();
    load_time();
    fill_system_select();
    fill_star_selector();
    fill_planet_selector();
  }
}

function load_time(body_type, e){
  if(body_type == STAR){
    star_id = e;
  } else if(body_type == PLANET){
    planet_id = e;
  }
  
  for(let i = 0; i < system_list[system_id]["Star Groups"].length; i++){
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
      calc_time();
    }
  }
 }

fill_system_select();
fill_star_selector();
fill_planet_selector();
calc_time()
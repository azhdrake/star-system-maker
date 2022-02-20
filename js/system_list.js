// let system_list = [
// {
//   "ID": 0,
//   "Name": "System 1",
//   "Average Separation": 400,
//   "Star Groups": [
//     {
//     "ID": 0,
//     "Name": "Group 1",
//     "Average Separation": .2,
//     "Eccentrisity": 0.4,
//     "Stars" : [{
//       "ID": 0,
//       "Name": "Test Star 1",
//       "Mass": 1,
//       "Eccentrisity": 0.45
//     },{
//       "ID": 1,
//       "Name": "Test Star 2",
//       "Mass": 1.1,
//       "Eccentrisity": 0.5
//     }], 
//     "Planets": [{
//       "ID": 0,
//       "Name": "Test Star 1 Alpha",
//       "Mass": 1,
//       "Radius": 1,
//       "Eccentricity": 0.25,
//       "Semi-Major Axis": 1,
//       "Axial Tilt": 30,
//       "Day Length": 24,
//       "Months/Year": 12,
//       "Hour/Day": 24,
//       "Min/Hr": 60,
//       "Sec/Min": 60,
//       "Moons" :[{
//         "ID": 0,
//         "Name": "Moon 1"
//       }]
//     },{
//       "ID": 1,
//       "Name": "Test Star 1 Beta",
//       "Mass": 2,
//       "Radius": 1.25,
//       "Eccentricity": 0.2,
//       "Semi-Major Axis": 2,
//       "Axial Tilt": 60,
//       "Day Length": 24,
//       "Months/Year": 12,
//       "Hour/Day": 24,
//       "Min/Hr": 60,
//       "Sec/Min": 60,
//       "Moons" :[{
//         "ID": 0,
//         "Name": "Moon 2"
//       }]
//     }]
//   },{
//     "ID": 1,
//     "Name": "Group 2",
//     "Average Separation": 0.25,
//     "Eccentrisity": 0.,
//     "Stars" : [{
//       "ID": 0,
//       "Name": "Test Star 3",
//       "Mass": 2,
//       "Eccentrisity": 0.42
//     },{
//       "ID": 1,
//       "Name": "Test Star 4",
//       "Mass": 4,
//       "Eccentrisity": 0.44
//     }],
//     "Planets": [{
//       "ID": 0,
//       "Name": "Test Star 2 Alpha",
//       "Mass": 0.8,
//       "Radius": 1.2,
//       "Eccentricity": 0.3,
//       "Semi-Major Axis": 1.1,
//       "Axial Tilt": 30,
//       "Day Length": 24,
//       "Months/Year": 12,
//       "Hour/Day": 24,
//       "Min/Hr": 60,
//       "Sec/Min": 60,
//       "Moons" :[{
//         "ID": 0,
//         "Name": "Moon 3"
//       }]
//     },{
//       "ID": 1,
//       "Name": "Test Star 2 Beta",
//       "Mass": 0.9,
//       "Radius": 0.9,
//       "Eccentricity": 0.4,
//       "Semi-Major Axis": .75,
//       "Axial Tilt": 25,
//       "Day Length":20,
//       "Months/Year": 6,
//       "Hour/Day": 10,
//       "Min/Hr": 50,
//       "Sec/Min": 50,
//       "Moons" :[{
//         "ID": 0,
//         "Name": "Moon 4"
//       }]
//     },{
//       "ID": 2,
//       "Name": "Test Star 2 Gamma",
//       "Mass": 1.2,
//       "Radius": 1.4,
//       "Eccentricity": 0.1,
//       "Semi-Major Axis": 1.3,
//       "Axial Tilt": 20,
//       "Day Length": 24.13,
//       "Months/Year": 8,
//       "Hour/Day": 15,
//       "Min/Hr": 100,
//       "Sec/Min": 100,
//       "Moons" :[{
//         "ID": 0,
//         "Name": "Moon 5"
//       },{
//         "ID": 1,
//         "Name": "Moon 6"
//       }]
//     }]
//   }],
//  },{
//   "ID": 1,
//   "Name": "System 2",
//   "Average Separation": 0,
//   "Star Groups": [{
//     "ID": 0,
//     "Name": "Group 3",
//     "Average Separation": 0,
//     "Eccentrisity": 0,
//     "Stars" : [{
//       "ID": 0,
//       "Name": "Test Star 3",
//       "Mass": 3,
//       "Eccentrisity": 0,
//     },{
//       "ID": 1,
//       "Name": "Test Star 4",
//       "Mass": 4,
//       "Eccentrisity": 0,
//     }], 
//     "Planets": [{
//       "ID": 0,
//       "Name": "Test Star 3-4 Alpha",
//       "Mass": 2,
//       "Radius": .9,
//       "Eccentricity": 0.25,
//       "Semi-Major Axis": 2,
//       "Axial Tilt": 40,
//       "Day Length": 24,
//       "Months/Year": 12,
//       "Hour/Day": 24,
//       "Min/Hr": 60,
//       "Sec/Min": 60,
//       "Moons" :[{
//         "ID": 0,
//         "Name": "Moon 1"
//       }]
//     }]
//   },{
//     "ID": 1,
//     "Name": "Group 4",
//     "Average Separation": 0,
//     "Eccentrisity": 0,
//     "Stars" : [{
//       "ID": 0,
//       "Name": "Test Star 5",
//       "Mass": 5,
//       "Eccentrisity": 0,
//     },{
//       "ID": 1,
//       "Name": "Test Star 6",
//       "Mass": 6,
//       "Eccentrisity": 0,
//     }],
//     "Planets": [{
//         "ID": 0,
//         "Name": "Test Star 5-6 Alpha",
//         "Mass": 1.2,
//         "Radius": 1.5,
//         "Eccentricity": 0.03,
//         "Semi-Major Axis": 1.15,
//         "Axial Tilt": 35,
//         "Day Length": 24,
//         "Months/Year": 12,
//         "Hour/Day": 24,
//         "Min/Hr": 60,
//         "Sec/Min": 60,
//         "Moons" :[{
//           "ID": 0,
//           "Name": "Moon 2"
//         }]
//       },{
//         "ID": 1,
//         "Name": "Test Star 5-6 Beta",
//         "Mass": 0.75,
//         "Radius": 0.75,
//         "Eccentricity": 0.075,
//         "Semi-Major Axis": 1.75,
//         "Axial Tilt": 75,
//         "Day Length":20,
//         "Months/Year": 6,
//         "Hour/Day": 10,
//         "Min/Hr": 50,
//         "Sec/Min": 50,
//         "Moons" :[{
//           "ID": 0,
//           "Name": "Moon 3"
//         }]
//       }]
//   }],
//  },
// ];
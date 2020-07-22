var members = [  // Members details
    { 
    "level": 120,
    "location": [-31.2969541, 20.2479026],
    "name": "Lexari",
    "rank": 0,
    "role": "DPS"
  },
  {
    "level": 120,
    "location": [28.844829, 29.3840401],
    "name": "Mapen",
    "rank": 2,
    "role": "Tank"
  },
  {
    "level": 120,
    "location": [-34.2969541, 19.2479026],
    "name": "Aysira",
    "rank": 2,
    "role": "Healer"
  },
  {
    "level": 120,
    "location": [51.0968582, 8.9690268],
    "name": "Bentlee",
    "rank": 2,
    "role": "DPS"
  },
  {
    "level": 120,
    "location": [50.4974444, 4.345157],
    "name": "Deriki",
    "rank": 2,
    "role": "Tank"
  },
  {
    "level": 120,
    "location": [39.0100679, 35.6885503],
    "name": "Refaralon",
    "rank": 2,
    "role": "DPS"
  },
  {
    "level": 120,
    "location": [40.1458903, -8.3168015],
    "name": "Berzak",
    "rank": 2,
    "role": "Healer"
  },
  {
    "level": 39,
    "location": [40.1458903, -3.8196207],
    "name": "Locketo",
    "rank": 2,
    "role": "DPS"
  },
  {
    "level": 120,
    "location": [46.139033, 1.4351197],
    "name": "Yirinae",
    "rank": 3,
    "role": "Tank"
  },
  {
    "level": 120,
    "location": [51.7602507, 0],
    "name": "Theomis",
    "rank": 6,
    "role": "Healer"
  }
];
   var membersTank = "";   //define empty variables
    var membersHealer = "";
    var membersDps = "";


for (i = 0; i < members.length; i++) {      //create a loop throught the members list
    var membersRole = members[i].role;
    var membersName = members[i].name;

    
    if (membersRole === "Tank") {           // Checks if the member role is a tank
        membersTank += membersName += "<br>";

    } else if (membersRole === "Healer") {   // Checks if the member role is a Healer
        membersHealer += membersName += "<br>";

    } else {                                 // the member role is a DPS
        membersDps += membersName += "<br>";
    }

    document.getElementById("tank").innerHTML = membersTank;     //writes the list of tanks
    document.getElementById("heal").innerHTML = membersHealer;   //writes the list of healers
    document.getElementById("dmg").innerHTML = membersDps;       //writes the list of dps
}


function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 2,
        center: { 
            lat: 16.619261,
            lng: -13.134766
             }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

 document.getElementById(tankLocations).onclick= function() {myFunction()}
 var locations = [];
function myFunction() {
 for (i = 0; i < members.length; i++) {
            var coords = members[i].location;
            let coordsArray = {"lat":coords[0], "lng": coords[1]};
            locations.push(coordsArray);
        };         
};

    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}
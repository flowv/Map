var mapboxkey = "pk.eyJ1IjoidmluY2VudG4iLCJhIjoiY2pmbno1dTE4MXpkOTJ5bzBiczhrdG9zcyJ9.u63fT4mJOxGUy2GQ_ZNUBg";
var table;
var points = [];


var options = {lat:
51.535323, lng: 
-0.040133, zoom:
15, studio: 
true, style:
'mapbox://styles/vincentn/cjfpl6mlq0iht2sqj5bx4x1x9'};

var mappa = new Mappa('Mapbox', mapboxkey);
var myMap;
var canvas;

function preload () {
  table = loadTable('data/openpaths_vincent76.csv', 'csv', 'header');
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
  strokeWeight(1);
  stroke(17, 38, 245);
  noFill();
  myMap.onChange(drawDots);
}

function draw() {
}


function drawDots() {
  clear();
  for ( var i = 0; i < table.getRowCount(); i++) {
    var row = table.getRow(i);
    var latitude = Number(table.getString(i, 'lat'));
    var longitude = Number(table.getString(i, 'lon'));
    if (myMap.map.getBounds().contains([latitude, longitude])) {
      var pos = myMap.latLngToPixel(latitude, longitude);
      ellipse(pos.x, pos.y, 5, 5);
    }
  }
}

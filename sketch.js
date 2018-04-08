const mapboxkey = "pk.eyJ1IjoidmluY2VudG4iLCJhIjoiY2pmbno1dTE4MXpkOTJ5bzBiczhrdG9zcyJ9.u63fT4mJOxGUy2GQ_ZNUBg"
const accesskey= "7EIBQINL4B5MBZ7P7PT2G2OFEZTKNEUBTJEUBRMSPPRJN3TLSQHA"
const secretkey= "1AST67SOSHLVY647U6LSCJFG8VCIS9TOVCV5VBW16F16C0Y2MFBJJA0YOLQO3XSI"


const options = {
  lat: 51.535323,
  lng: -0.040133,
  zoom: 15,
  studio: true,
  style: 'mapbox://styles/vincentn/cjfpl6mlq0iht2sqj5bx4x1x9'
  // pitch: 30,
};

const mappa = new Mappa('Mapbox', mapboxkey)
let myMap;
let canvas;
let table;



function preload() {
table = loadTable("openpaths_vincent76.csv","csv","header");
}

function setup(){
  canvas = createCanvas(600,600);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
  // print(table.getRowCount() + ' total rows in table');
  // print(table.getColumnCount() + ' total columns in table');
  // print(table.getColumn('name'));
}

function draw(){

}

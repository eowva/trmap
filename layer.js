require([
  "esri/Map",
  "esri/views/MapView",
  "esri/Graphic",
  "esri/layers/GraphicsLayer",
  "esri/geometry/Polygon"
], function(Map, MapView, Graphic, GraphicsLayer, Polygon) {

  const map = new Map({
    basemap: "streets"
  });

  const view = new MapView({
    container: "viewDiv",
    map: map,
    center: [-76.949682, 38.986166],
    zoom: 17
  });


  //split into a new file from here
  const graphicsLayer = new GraphicsLayer();
  map.add(graphicsLayer);

  function createSquare(center, halfSize) {
    return [
      [center.x - halfSize, center.y - halfSize], 
      [center.x + halfSize, center.y - halfSize],
      [center.x + halfSize, center.y + halfSize], 
      [center.x - halfSize, center.y + halfSize], 
      [center.x - halfSize, center.y - halfSize]  
    ];
  }

  const center = { x: -76.949682, y: 38.986166 };
  const halfSize = 0.000000005; 

  const squarePolygon = new Polygon({
    rings: [createSquare(center, halfSize)],
    spatialReference: { wkid: 4326 }
  });

  const squareGraphic = new Graphic({
    geometry: squarePolygon,
    symbol: {
      type: "simple-fill",
      color: [255, 165, 0, 0.4],
      outline: {
        color: "white",
        width: 2
      }
    }
  });

  
  function createSquare(center, halfSize) {
  return [
    [center.x - halfSize, center.y - halfSize],
    [center.x + halfSize, center.y - halfSize],
    [center.x + halfSize, center.y + halfSize],
    [center.x - halfSize, center.y + halfSize],
    [center.x - halfSize, center.y - halfSize]
  ];
}

// Traffic cone as a marker (visible even at tiny real-world size)
const conePoint = {
  type: "point",
  x: -76.9497,
  y: 38.9862,
  spatialReference: { wkid: 4326 }
};

const coneMarker = new Graphic({
  geometry: conePoint,
  symbol: {
    type: "simple-marker",
    style: "circle",       // round shape for the top-down view
    color: [255, 165, 0, 1], // bright orange
    size: "14px",          // screen size in pixels
    outline: {
      color: "white",
      width: 1
    }
  }
});

graphicsLayer.add(coneMarker);


  graphicsLayer.add(squareGraphic);

});

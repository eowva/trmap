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

  graphicsLayer.add(squareGraphic);

});

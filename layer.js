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

// 14.5" ~ 0.000003 degrees roughly at this latitude
const coneHalfSize = 0.0000015; 
const coneCenter = { x: -76.9497, y: 38.9862 }; // place anywhere

const conePolygon = new Polygon({
  rings: [createSquare(coneCenter, coneHalfSize)],
  spatialReference: { wkid: 4326 }
});

const coneGraphic = new Graphic({
  geometry: conePolygon,
  symbol: {
    type: "simple-fill",
    color: [255, 165, 0, 0.9], // orange
    outline: {
      color: "white",
      width: 1
    }
  }
});

graphicsLayer.add(coneGraphic);
  //end new file

  graphicsLayer.add(squareGraphic);

});

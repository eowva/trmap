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

//   function createSquare(center, halfSize) {
//     return [
//       [center.x - halfSize, center.y - halfSize], 
//       [center.x + halfSize, center.y - halfSize],
//       [center.x + halfSize, center.y + halfSize], 
//       [center.x - halfSize, center.y + halfSize], 
//       [center.x - halfSize, center.y - halfSize]  
//     ];
//   }

//   const center = { x: -76.949682, y: 38.986166 };
//   const halfSize = 0.000000005; 

//   const squarePolygon = new Polygon({
//     rings: [createSquare(center, halfSize)],
//     spatialReference: { wkid: 4326 }
//   });

//   const squareGraphic = new Graphic({
//     geometry: squarePolygon,
//     symbol: {
//       type: "simple-fill",
//       color: [255, 165, 0, 0.4],
//       outline: {
//         color: "white",
//         width: 2
//       }
//     }
//   });

  
//   function createSquare(center, halfSize) {
//   return [
//     [center.x - halfSize, center.y - halfSize],
//     [center.x + halfSize, center.y - halfSize],
//     [center.x + halfSize, center.y + halfSize],
//     [center.x - halfSize, center.y + halfSize],
//     [center.x - halfSize, center.y - halfSize]
//   ];
// }

// Traffic cone as a marker (visible even at tiny real-world size)
// Array of traffic cone positions
const conePositions = [
  { x: -76.9497, y: 38.9862 },
  { x: -76.9496, y: 38.9863 },
  { x: -76.9498, y: 38.9861 },
  { x: -76.94975, y: 38.98615 }
];

// Loop through the array and create a text-based marker for each cone
conePositions.forEach(pos => {
  const coneMarker = new Graphic({
    geometry: {
      type: "point",
      x: pos.x,
      y: pos.y,
      spatialReference: { wkid: 4326 }
    },
    symbol: {
      type: "text",    // ASCII method
      text: "●",        // solid circle character
      color: [255, 165, 0, 1], // orange
      font: {
        size: "14px",
        family: "Arial"
      }
    }
  });
  graphicsLayer.add(coneMarker);
});


  graphicsLayer.add(squareGraphic);

});

import Graphic from "@arcgis/core/Graphic";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";

// Create a new GraphicsLayer
const graphicsLayer = new GraphicsLayer();

// Example: Add a simple point graphic
// const point = {
//     type: "point",
//     longitude: -118.805,
//     latitude: 34.027
// };

c// Make a square polygon around a center
function createSquare(center, halfSize) {
  // halfSize = half the side length (in degrees if using wkid 4326)
  return [
    [center.x - halfSize, center.y - halfSize], // bottom-left
    [center.x + halfSize, center.y - halfSize], // bottom-right
    [center.x + halfSize, center.y + halfSize], // top-right
    [center.x - halfSize, center.y + halfSize], // top-left
    [center.x - halfSize, center.y - halfSize]  // close back
  ];
}

const center = { x: -76.949682, y: 38.986166 };
const halfSize = 0.005; // ~0.5 km in degrees

const squarePolygon = new Polygon({
  rings: [createSquare(center, halfSize)],
  spatialReference: { wkid: 4326 }
});

const squareGraphic = new Graphic({
  geometry: squarePolygon,
  symbol: {
    type: "simple-fill",
    color: [255, 165, 0, 0.4], // orange, semi-transparent
    outline: {
      color: "white",
      width: 2
    }
  }
});

// Add it to your graphics layer
graphicsLayer.add(squareGraphic);

graphicsLayer.add(graphic);

export default graphicsLayer;
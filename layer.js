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

const symbol = {
    type: "simple-marker",
    color: [226, 119, 40],
    outline: {
        color: [255, 255, 255],
        width: 2
    }
};

const cone = new Graphic({
    geometry: new Polygon({
        type: "point",
        x: -76.949682,
        y: 38.986166
    }),
    symbol: {
        type: "simple-marker",
        color: "orange",
        size: "25px",
        outline: {
            color: "white",
    }
}
});

graphicsLayer.add(graphic);

export default graphicsLayer;
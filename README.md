# Dot Density - U.S. Population by Race

This app visualizes U.S. population by Census Tract using Dot Density. Each dot represents 800 people at the initial scale of the map. As you zoom, the dot value dynamically updates to maintain the same visual density across scale. Color is used to map population of different races. Move the cursor over the legend to emphasize the population distribution of one race at a time.

[View live app](https://ekenes.github.io/conferences/ds-2019/plenary/dot-density-legend/index.html)

[![dot-density-race](https://ekenes.github.io/conferences/ds-2019/plenary/images/dot-density-race.gif)](https://ekenes.github.io/conferences/ds-2019/plenary/dot-density-legend/index.html)

Read the following blog to learn more about how this app was created: [Interactive dot density maps for the web](https://www.esri.com/arcgis-blog/products/js-api-arcgis/mapping/interactive-dot-density-maps-for-the-web/).

## Highlights

This app demonstrates the following capabilities.

### Dot density

`DotDensityRenderer` is used to visualize population density by assigning a population value to each dot. The dot value varies by scale. See [DotDensityRenderer](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-DotDensityRenderer.html) for more details.

### Fast visualization updates

The ArcGIS JS API renders all data using WebGL. This allows the API to update visualizations quickly for enhanced user experiences. See the [Animate opacity visual variable](https://developers.arcgis.com/javascript/latest/sample-code/visualization-vv-opacity-animate/index.html) sample for more details.

### Interactive Legend

The user can explore individual categories of data by interacting with Legend elements. See the [Legend](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Legend.html) API reference for more details.

### Popups

The data in this app is rendered using dynamic feature tiles. This means we can render the data quickly without cooking it. It can be queried, highlighted, and analyzed. This app loads thousands of features quickly, but also allows the user to interact with it via popups. See the documentation of the [PopupTemplate](https://developers.arcgis.com/javascript/latest/api-reference/esri-PopupTemplate.html) API reference for more details.
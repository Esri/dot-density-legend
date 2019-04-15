# Dot Density - U.S. Population by Race

This app visualizes U.S. population by Census Tract using Dot Density. Each dot represents 800 people at the initial scale of the map. As you zoom, the dot value dynamically updates to maintain the same visual density across scale. Color is used to map population of different races. Move the cursor over the legend to emphasize the population distribution of one race at a time.

![screenshot](./img/dot-density-race.gif)

[View it live](https://esri.github.io/dot-density-legend/)

Read the following blog to learn more about how this app was created: [Interactive dot density maps for the web](https://www.esri.com/arcgis-blog/products/js-api-arcgis/mapping/interactive-dot-density-maps-for-the-web/).

## Features

This app demonstrates the following capabilities.

### Dot density

`DotDensityRenderer` is used to visualize population density by assigning a population value to each dot. The dot value varies by scale. See [DotDensityRenderer](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-DotDensityRenderer.html) for more details.

### Fast visualization updates

The ArcGIS JS API renders all data using WebGL. This allows the API to update visualizations quickly for enhanced user experiences. See the [Animate opacity visual variable](https://developers.arcgis.com/javascript/latest/sample-code/visualization-vv-opacity-animate/index.html) sample for more details.

### Interactive Legend

The user can explore individual categories of data by interacting with Legend elements. See the [Legend](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Legend.html) API reference for more details.

### Popups

The data in this app is rendered using dynamic feature tiles. This means we can render the data quickly without cooking it. It can be queried, highlighted, and analyzed. This app loads thousands of features quickly, but also allows the user to interact with it via popups. See the documentation of the [PopupTemplate](https://developers.arcgis.com/javascript/latest/api-reference/esri-PopupTemplate.html) API reference for more details.

## Instructions

1. Fork and then clone the repo.
2. Run and try the sample.

## Requirements

* Notepad or your favorite HTML editor
* Web browser with access to the Internet

## Resources

* [ArcGIS for JavaScript API Resource Center](http://help.arcgis.com/en/webapi/javascript/arcgis/index.html)
* [ArcGIS Blog](http://blogs.esri.com/esri/arcgis/)
* [twitter@esri](http://twitter.com/esri)

## Issues

Find a bug or want to request a new feature?  Please let us know by submitting an issue.

## Disclaimer

This demo application is for illustrative purposes only and it is not maintained. There is no support available for deployment or development of the application.

## Contributing

Esri welcomes contributions from anyone and everyone. Please see our [guidelines for contributing](https://github.com/esri/contributing).

## Licensing

Copyright 2019 Esri

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

A copy of the license is available in the repository's [license.txt](./license.txt ) file.
// Copyright 2019 Esri

// Licensed under the Apache License, Version 2.0 (the "License");

// you may not use this file except in compliance with the License.

// You may obtain a copy of the License at

//     http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software

// distributed under the License is distributed on an "AS IS" BASIS,

// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.

// See the License for the specific language governing permissions and

// limitations under the License.​

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
define(["require", "exports", "esri/WebMap", "esri/views/MapView", "esri/layers/FeatureLayer", "esri/renderers/DotDensityRenderer", "esri/widgets/Legend", "esri/widgets/Bookmarks", "esri/widgets/Search", "esri/widgets/Expand"], function (require, exports, WebMap, MapView, FeatureLayer, DotDensityRenderer, Legend, Bookmarks, Search, Expand) {
    "use strict";
    var _this = this;
    Object.defineProperty(exports, "__esModule", { value: true });
    (function () { return __awaiter(_this, void 0, void 0, function () {
        function legendEventListener(event) {
            var selectedText = event.target.alt || event.target.innerText;
            var legendInfos = legend.activeLayerInfos.getItemAt(0).legendElements[0].infos;
            var matchFound = legendInfos.filter(function (info) { return info.label === selectedText; }).length > 0;
            if (matchFound) {
                showSelectedField(selectedText);
                if (event.type === "click") {
                    mousemoveEnabled = false;
                    legendContainer.removeEventListener("mousemove", legendEventListener);
                }
            }
            else {
                layer.renderer = dotDensityRenderer;
            }
        }
        function showSelectedField(label) {
            var oldRenderer = layer.renderer;
            var newRenderer = oldRenderer.clone();
            var attributes = newRenderer.attributes.map(function (attribute) {
                attribute.color.a = attribute.label === label ? 1 : 0.2;
                return attribute;
            });
            newRenderer.attributes = attributes;
            layer.renderer = newRenderer;
        }
        var map, view, dotDensityRenderer, url, layer, legendContainer, legend, mousemoveEnabled, resetButton, dotValueSlider, dotValueDisplay;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    map = new WebMap({
                        portalItem: {
                            id: "da83595b291349b79c7e56e5fabc5fde"
                        }
                    });
                    view = new MapView({
                        container: "viewDiv",
                        map: map,
                        highlightOptions: {
                            fillOpacity: 0,
                            color: "white"
                        },
                        popup: {
                            dockEnabled: true,
                            dockOptions: {
                                position: "top-right",
                                breakpoint: false
                            }
                        },
                        constraints: {
                            maxScale: 35000
                        }
                    });
                    return [4 /*yield*/, view.when()];
                case 1:
                    _a.sent();
                    dotDensityRenderer = new DotDensityRenderer({
                        referenceDotValue: 100,
                        outline: null,
                        referenceScale: 577790,
                        legendOptions: {
                            unit: "people"
                        },
                        attributes: [
                            {
                                field: "B03002_003E",
                                color: "#f23c3f",
                                label: "White (non-Hispanic)"
                            },
                            {
                                field: "B03002_012E",
                                color: "#e8ca0d",
                                label: "Hispanic"
                            },
                            {
                                field: "B03002_004E",
                                color: "#00b6f1",
                                label: "Black or African American"
                            },
                            {
                                field: "B03002_006E",
                                color: "#32ef94",
                                label: "Asian"
                            },
                            {
                                field: "B03002_005E",
                                color: "#ff7fe9",
                                label: "American Indian/Alaskan Native"
                            },
                            {
                                field: "B03002_007E",
                                color: "#e2c4a5",
                                label: "Pacific Islander/Hawaiian Native"
                            },
                            {
                                field: "B03002_008E",
                                color: "#ff6a00",
                                label: "Other race"
                            },
                            {
                                field: "B03002_009E",
                                color: "#96f7ef",
                                label: "Two or more races"
                            }
                        ]
                    });
                    url = "https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/ACS_Population_by_Race_and_Hispanic_Origin_Boundaries/FeatureServer/2";
                    layer = new FeatureLayer({
                        url: url,
                        minScale: 20000000,
                        maxScale: 35000,
                        title: "Current Population Estimates (ACS)",
                        popupTemplate: {
                            title: "{County}, {State}",
                            content: [
                                {
                                    type: "fields",
                                    fieldInfos: [
                                        {
                                            fieldName: "B03002_003E",
                                            label: "White (non-Hispanic)",
                                            format: {
                                                digitSeparator: true,
                                                places: 0
                                            }
                                        },
                                        {
                                            fieldName: "B03002_012E",
                                            label: "Hispanic",
                                            format: {
                                                digitSeparator: true,
                                                places: 0
                                            }
                                        },
                                        {
                                            fieldName: "B03002_004E",
                                            label: "Black or African American",
                                            format: {
                                                digitSeparator: true,
                                                places: 0
                                            }
                                        },
                                        {
                                            fieldName: "B03002_006E",
                                            label: "Asian",
                                            format: {
                                                digitSeparator: true,
                                                places: 0
                                            }
                                        },
                                        {
                                            fieldName: "B03002_005E",
                                            label: "American Indian/Alaskan Native",
                                            format: {
                                                digitSeparator: true,
                                                places: 0
                                            }
                                        },
                                        {
                                            fieldName: "B03002_007E",
                                            label: "Pacific Islander/Hawaiian Native",
                                            format: {
                                                digitSeparator: true,
                                                places: 0
                                            }
                                        },
                                        {
                                            fieldName: "B03002_008E",
                                            label: "Other race",
                                            format: {
                                                digitSeparator: true,
                                                places: 0
                                            }
                                        },
                                        {
                                            fieldName: "B03002_009E",
                                            label: "Two or more races",
                                            format: {
                                                digitSeparator: true,
                                                places: 0
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        renderer: dotDensityRenderer
                    });
                    map.add(layer);
                    legendContainer = document.getElementById("legendDiv");
                    legend = new Legend({
                        view: view,
                        container: legendContainer
                    });
                    view.ui.add([
                        new Expand({
                            view: view,
                            content: document.getElementById("controlDiv"),
                            group: "top-left",
                            expanded: true,
                            expandIconClass: "esri-icon-layer-list"
                        }),
                        new Expand({
                            view: view,
                            expandIconClass: "esri-icon-filter",
                            content: document.getElementById("sliderDiv"),
                            group: "top-left"
                        }),
                        new Expand({
                            view: view,
                            content: new Search({ view: view }),
                            group: "top-left"
                        })
                    ], "top-left");
                    view.ui.add(new Expand({
                        view: view,
                        content: new Bookmarks({ view: view }),
                        group: "bottom-right",
                        expanded: true
                    }), "bottom-right");
                    legendContainer.addEventListener("mousemove", legendEventListener);
                    legendContainer.addEventListener("click", legendEventListener);
                    mousemoveEnabled = true;
                    resetButton = document.getElementById("reset-button");
                    resetButton.addEventListener("click", function () {
                        mousemoveEnabled = true;
                        layer.renderer = dotDensityRenderer;
                        legendContainer.addEventListener("mousemove", legendEventListener);
                    });
                    dotValueSlider = document.getElementById("dotValueInput");
                    dotValueDisplay = document.getElementById("dotValueDisplay");
                    dotValueSlider.addEventListener("input", function () {
                        var oldRenderer = layer.renderer;
                        var newRenderer = oldRenderer.clone();
                        dotValueDisplay.innerText = dotValueSlider.value;
                        var dotValue = parseInt(dotValueSlider.value);
                        newRenderer.referenceDotValue = dotValue;
                        layer.renderer = newRenderer;
                    });
                    return [2 /*return*/];
            }
        });
    }); })();
});
//# sourceMappingURL=main.js.map
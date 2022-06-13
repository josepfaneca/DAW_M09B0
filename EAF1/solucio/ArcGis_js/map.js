require([
  "esri/config",
  "esri/Map",
  "esri/views/MapView",
  "esri/views/ui/DefaultUI",
  "esri/webdoc/applicationProperties/Search",
  "esri/widgets/BasemapToggle",
  "esri/widgets/Expand",
  "esri/widgets/BasemapGallery",
  "esri/widgets/BasemapGallery/support/PortalBasemapsSource",
  "esri/portal/Portal",
  "esri/widgets/LayerList"
], function (
  esriConfig,
  Map,
  MapView,
  BasemapGallery,
  PortalBasemapsSource,
  Portal,
  Search,
  BasemapToggle,
  DefaultUI,
  PortalBasemapsSource,
  Expand,
  LayerList
) {
  esriConfig.apiKey =
    "AAPKc7bfb0389510489ba1bbc6a9795986cci3EYFUSfSCPIoDfTCc0jfmmTGgU7q_mVu0Htm8uG0Go0WN-AoQtnDnm6071fKHUr";

  const portal = new Portal();

  // source for basemaps from a portal group
  // containing basemaps with different projections
  const source = new PortalBasemapsSource({
    portal,
    query: {
      id: "bdb9d65e0b5c480c8dcc6916e7f4e099",
    },
  });

  const map = new Map({
    basemap: {
      portalItem: {
        id: "8d91bd39e873417ea21673e0fee87604", // nova basemap
      },
    },
  });

  // center the view over 48 states
  const view = new MapView({
    container: "viewDiv",
    map: map,
    center: [-100, 35],
    zoom: 2,
    constraints: {
      snapToZoom: false,
    },
  });
  let layerList = new LayerList({
    container: document.createElement("div"),
    view: view,
  });
  layerListExpand = new Expand({
    expandIconClass: "esri-icon-layer-list", // see https://developers.arcgis.com/javascript/latest/guide/esri-icon-font/
    // expandTooltip: "Expand LayerList", // optional, defaults to "Expand" for English locale
    view: view,
    content: layerList,
  });
  view.ui.add(layerListExpand, "top-right");
});

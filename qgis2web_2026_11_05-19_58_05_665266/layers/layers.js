var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_vector_2 = new ol.format.GeoJSON();
var features_vector_2 = format_vector_2.readFeatures(json_vector_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vector_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vector_2.addFeatures(features_vector_2);
var lyr_vector_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vector_2, 
                style: style_vector_2,
                popuplayertitle: 'vector',
                interactive: true,
    title: 'vector<br />\
    <img src="styles/legend/vector_2_0.png" /> 0.02 - 0.21<br />\
    <img src="styles/legend/vector_2_1.png" /> 0.21 - 0.73<br />\
    <img src="styles/legend/vector_2_2.png" /> 0.73 - 0.91<br />\
    <img src="styles/legend/vector_2_3.png" /> 0.91 - 1.37<br />\
    <img src="styles/legend/vector_2_4.png" /> 1.37 - 2.5<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_vector_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_vector_2];
lyr_vector_2.set('fieldAliases', {'id': 'id', 'name': 'name', 'paddy': 'paddy', 'PaddyConcentration2021 — Sheet1_Paddy': 'PaddyConcentration2021 — Sheet1_Paddy', });
lyr_vector_2.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'paddy': 'TextEdit', 'PaddyConcentration2021 — Sheet1_Paddy': 'TextEdit', });
lyr_vector_2.set('fieldLabels', {'id': 'no label', 'name': 'inline label - visible with data', 'paddy': 'no label', 'PaddyConcentration2021 — Sheet1_Paddy': 'no label', });
lyr_vector_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
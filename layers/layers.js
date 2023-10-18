var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_jay7_1 = new ol.format.GeoJSON();
var features_jay7_1 = format_jay7_1.readFeatures(json_jay7_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jay7_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jay7_1.addFeatures(features_jay7_1);
var lyr_jay7_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jay7_1, 
                style: style_jay7_1,
                interactive: true,
                title: '<img src="styles/legend/jay7_1.png" /> jay -7'
            });
var format_jay6_2 = new ol.format.GeoJSON();
var features_jay6_2 = format_jay6_2.readFeatures(json_jay6_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jay6_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jay6_2.addFeatures(features_jay6_2);
var lyr_jay6_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jay6_2, 
                style: style_jay6_2,
                interactive: true,
                title: '<img src="styles/legend/jay6_2.png" /> jay -6'
            });
var format_jay5_3 = new ol.format.GeoJSON();
var features_jay5_3 = format_jay5_3.readFeatures(json_jay5_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jay5_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jay5_3.addFeatures(features_jay5_3);
var lyr_jay5_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jay5_3, 
                style: style_jay5_3,
                interactive: true,
                title: '<img src="styles/legend/jay5_3.png" /> jay -5'
            });
var format_jay4_4 = new ol.format.GeoJSON();
var features_jay4_4 = format_jay4_4.readFeatures(json_jay4_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jay4_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jay4_4.addFeatures(features_jay4_4);
var lyr_jay4_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jay4_4, 
                style: style_jay4_4,
                interactive: true,
                title: '<img src="styles/legend/jay4_4.png" /> jay -4'
            });
var format_jaya3_5 = new ol.format.GeoJSON();
var features_jaya3_5 = format_jaya3_5.readFeatures(json_jaya3_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jaya3_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jaya3_5.addFeatures(features_jaya3_5);
var lyr_jaya3_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jaya3_5, 
                style: style_jaya3_5,
                interactive: true,
                title: '<img src="styles/legend/jaya3_5.png" /> jaya -3'
            });
var format_jayaprakash2_6 = new ol.format.GeoJSON();
var features_jayaprakash2_6 = format_jayaprakash2_6.readFeatures(json_jayaprakash2_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jayaprakash2_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jayaprakash2_6.addFeatures(features_jayaprakash2_6);
var lyr_jayaprakash2_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jayaprakash2_6, 
                style: style_jayaprakash2_6,
                interactive: true,
                title: '<img src="styles/legend/jayaprakash2_6.png" /> jaya prakash(2)'
            });
var format_jayaprakash1_7 = new ol.format.GeoJSON();
var features_jayaprakash1_7 = format_jayaprakash1_7.readFeatures(json_jayaprakash1_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jayaprakash1_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jayaprakash1_7.addFeatures(features_jayaprakash1_7);
var lyr_jayaprakash1_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jayaprakash1_7, 
                style: style_jayaprakash1_7,
                interactive: true,
                title: '<img src="styles/legend/jayaprakash1_7.png" /> jaya prakash(1)'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_jay7_1.setVisible(true);lyr_jay6_2.setVisible(true);lyr_jay5_3.setVisible(true);lyr_jay4_4.setVisible(true);lyr_jaya3_5.setVisible(true);lyr_jayaprakash2_6.setVisible(true);lyr_jayaprakash1_7.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_jay7_1,lyr_jay6_2,lyr_jay5_3,lyr_jay4_4,lyr_jaya3_5,lyr_jayaprakash2_6,lyr_jayaprakash1_7];
lyr_jay7_1.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_jay6_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_jay5_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_jay4_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_jaya3_5.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_jayaprakash2_6.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_jayaprakash1_7.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_jay7_1.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_jay6_2.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_jay5_3.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_jay4_4.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_jaya3_5.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_jayaprakash2_6.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_jayaprakash1_7.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_jay7_1.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_jay6_2.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_jay5_3.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_jay4_4.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_jaya3_5.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_jayaprakash2_6.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_jayaprakash1_7.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_jayaprakash1_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
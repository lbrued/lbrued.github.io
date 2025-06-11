var wms_layers = [];

var lyr_Bodenbedeckungschwarzweiss_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geodienste.ch/db/av_0/deu",
                              attributions: ' ',
                              params: {
                                "LAYERS": "LCSF",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Bodenbedeckung schwarzweiss',
                            popuplayertitle: 'Bodenbedeckung schwarzweiss',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Bodenbedeckungschwarzweiss_0, 0]);
var format_Parkplatz_1 = new ol.format.GeoJSON();
var features_Parkplatz_1 = format_Parkplatz_1.readFeatures(json_Parkplatz_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parkplatz_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parkplatz_1.addFeatures(features_Parkplatz_1);
var lyr_Parkplatz_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parkplatz_1, 
                style: style_Parkplatz_1,
                popuplayertitle: 'Parkplatz',
                interactive: true,
                title: '<img src="styles/legend/Parkplatz_1.png" /> Parkplatz'
            });
var format_Verbund_EWS_2 = new ol.format.GeoJSON();
var features_Verbund_EWS_2 = format_Verbund_EWS_2.readFeatures(json_Verbund_EWS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Verbund_EWS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Verbund_EWS_2.addFeatures(features_Verbund_EWS_2);
var lyr_Verbund_EWS_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Verbund_EWS_2, 
                style: style_Verbund_EWS_2,
                popuplayertitle: 'Verbund_EWS',
                interactive: true,
                title: '<img src="styles/legend/Verbund_EWS_2.png" /> Verbund_EWS'
            });
var format_EWS_3 = new ol.format.GeoJSON();
var features_EWS_3 = format_EWS_3.readFeatures(json_EWS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EWS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EWS_3.addFeatures(features_EWS_3);
var lyr_EWS_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EWS_3, 
                style: style_EWS_3,
                popuplayertitle: 'EWS',
                interactive: true,
    title: 'EWS<br />\
    <img src="styles/legend/EWS_3_0.png" /> 200 - 1160<br />\
    <img src="styles/legend/EWS_3_1.png" /> 1160 - 2120<br />\
    <img src="styles/legend/EWS_3_2.png" /> 2120 - 3080<br />\
    <img src="styles/legend/EWS_3_3.png" /> 3080 - 4040<br />\
    <img src="styles/legend/EWS_3_4.png" /> 4040 - 5000<br />' });

lyr_Bodenbedeckungschwarzweiss_0.setVisible(true);lyr_Parkplatz_1.setVisible(true);lyr_Verbund_EWS_2.setVisible(true);lyr_EWS_3.setVisible(true);
var layersList = [lyr_Bodenbedeckungschwarzweiss_0,lyr_Parkplatz_1,lyr_Verbund_EWS_2,lyr_EWS_3];
lyr_Parkplatz_1.set('fieldAliases', {'id': 'id', });
lyr_Verbund_EWS_2.set('fieldAliases', {'id': 'id', });
lyr_EWS_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Test': 'Test', });
lyr_Parkplatz_1.set('fieldImages', {'id': 'TextEdit', });
lyr_Verbund_EWS_2.set('fieldImages', {'id': '', });
lyr_EWS_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'Test': 'Range', });
lyr_Parkplatz_1.set('fieldLabels', {'id': 'no label', });
lyr_Verbund_EWS_2.set('fieldLabels', {'id': 'no label', });
lyr_EWS_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Test': 'no label', });
lyr_EWS_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
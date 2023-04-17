
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "GoogleSatellite_0": {
            "type": "raster",
            "tiles": ["http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}"],
            "tileSize": 256
        },
        "_1": {
            "type": "geojson",
            "data": json__1
        }
                    ,
        "_2": {
            "type": "geojson",
            "data": json__2
        }
                    ,
        "_3": {
            "type": "geojson",
            "data": json__3
        }
                    ,
        "19451960_4": {
            "type": "geojson",
            "data": json_19451960_4
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#b46c6c"
            }
        },
        {
            "id": "lyr_GoogleSatellite_0_0",
            "type": "raster",
            "source": "GoogleSatellite_0"
        },
        {
            "id": "lyr__1_0",
            "type": "line",
            "source": "_1",
            "layout": {},
            "paint": {'line-width': 3.214285714285714, 'line-opacity': 1.0, 'line-color': '#cce529'}
        }
,
        {
            "id": "lyr__2_0",
            "type": "line",
            "source": "_2",
            "layout": {},
            "paint": {'line-width': 4.285714285714286, 'line-opacity': 1.0, 'line-color': '#d641c0'}
        }
,
        {
            "id": "lyr__3_0",
            "type": "line",
            "source": "_3",
            "layout": {},
            "paint": {'line-width': 4.999999999999999, 'line-opacity': 1.0, 'line-color': '#35d8db'}
        }
,
        {
            "id": "lyr_19451960_4_0",
            "type": "line",
            "source": "19451960_4",
            "layout": {},
            "paint": {'line-width': 3.214285714285714, 'line-opacity': 1.0, 'line-color': '#e6a117'}
        }
],
}
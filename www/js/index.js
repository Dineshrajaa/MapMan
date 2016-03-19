var map;
var mapMan = {

    initializeMap: function() {
        var mapDiv = $("#mapHolder");
        var userLocation = new plugin.google.maps.LatLng(11.0512626, 76.9461716);
        var mapOptions = {
            'backgroundColor': 'white',
            'mapType': plugin.google.maps.MapTypeId.HYBRID,
            'controls': {
                'compass': true,
                'myLocationButton': true,
                'indoorPicker': true,
                'zoom': true
            },
            'gestures': {
                'scroll': true,
                'tilt': true,
                'rotate': true,
                'zoom': true
            },
            'camera': {
                'latLng': userLocation,
                'tilt': 30,
                'zoom': 15,
                'bearing': 50
            }
        };
        map = plugin.google.maps.Map.getMap(mapDiv, mapOptions); // Initialize map with options
        map.addEventListener(plugin.google.maps.event.MAP_READY, function() {
            map.showDialog();
            // Add Marker
            map.addMarker({
                'position': userLocation,
                'title': "Hello GoogleMap for Cordova!"
            }, function(marker) {

                marker.showInfoWindow();

            });
        });


    }
}
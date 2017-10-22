var MAPS_LOADED = false;
var RESULTS = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "address": "5300 Mountain Home Ranch Rd, Calistoga, CA 94515"
            },
            "properties": {
                "need": "Blankets",
                "description": "Fleece is preferable.",
                "quantity": "3",
                "contactName": "Courtney Pattison",
                "contactEmail": "cool@gmail.com"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "address": "18000 Old Winery Rd, Sonoma, CA 95476"
            },
            "properties": {
                "need": "Shoes",
                "description": "Nike please. For eight year old boy and 6 year old girl.",
                "quantity": "2",
                "contactName": "Jane Smith",
                "contactEmail": "jsmith@gmail.com"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "address": "203 S Jefferson St, Napa, CA 94559"
            },
            "properties": {
                "need": "Food",
                "description": "Peanut butter urgently needed!",
                "quantity": "8",
                "contactName": "Amelia Lin",
                "contactEmail": "alin@gmail.com"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "address": "5350 Mountain Home Ranch Rd, Calistoga, CA 94515"
            },
            "properties": {
                "need": "Food",
                "description": "Pizza please",
                "quantity": "12",
                "contactName": "Courtney Pattison",
                "contactEmail": "cool@gmail.com"
            }
        }
    ]
}

window.RESULTS = RESULTS;

function initMap() {
    var central = { lat: 38.350676, lng: -122.384205 };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: central,
    });

    var geocoder = new google.maps.Geocoder();
    var infowindow = new google.maps.InfoWindow();

    for (var i = 0; i < RESULTS.features.length; i++) {
        (function () {


            var address = RESULTS.features[i].geometry.address;
            var need = RESULTS.features[i].properties.need;
            var description = RESULTS.features[i].properties.description;
            var quantity = RESULTS.features[i].properties.quantity;
            var contactName = RESULTS.features[i].properties.contactName;
            var contactEmail = RESULTS.features[i].properties.contactEmail;

            var contentString = '<div id="content">' +
                '<div id="siteNotice">' +
                '</div>' +
                '<h1 id="firstHeading" class="firstHeading">' + need + '</h1>' +
                '<div id="bodyContent">' +
                '<p><b>Quantity:</b> ' + quantity + '</p>' +
                '<p><b>Description:</b> ' + description + '</p>' +
                '<p><b>Address:</b> ' + address + '</p>' +
                '<p><b>Name:</b> ' + contactName + '</p>' +
                '<a href="mailto:' + contactEmail +'"><b>Contact</b></a>' +
                '</div>' +
                '</div>';

            geocoder.geocode({ 'address': address }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    var lat = results[0].geometry.location.lat();
                    var lng = results[0].geometry.location.lng();
                    var latLng = new google.maps.LatLng(lat, lng);

                    var marker = new google.maps.Marker({
                        position: latLng,
                        map: map,
                    });

                    marker.addListener('click', function () {
                        infowindow.close();
                        infowindow.setContent(contentString);
                        infowindow.open(map, marker);
                    });
                }
            });
        })();
    }
}

function setMapsLoaded () {
  MAPS_LOADED = true;
  initMap();
}


var interval = setInterval(function () {
  let el = document.getElementById('map');
  if (el && MAPS_LOADED) {
      clearInterval(interval);
      initMap();
  }
}, 200);

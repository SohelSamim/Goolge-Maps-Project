var map;


function initMap() {
    let oslo = {lat: 59.911491, lng: 10.757933};
    map = new google.maps.Map(document.getElementById('map'), {
        center: oslo,
        zoom: 8
    });

    createMarker();
}

const createMarker = () => {
    var marker = new google.maps.Marker( {
        position: {lat: 59.911491, lng: 10.757933},
        map: map
      

    });
}
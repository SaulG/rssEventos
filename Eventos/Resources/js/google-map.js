var map;
var pos;

function onload() {
    map = new google.maps.Map(document.getElementById("map"));
    map.setZoom(19);
    map.setMapTypeId(google.maps.MapTypeId.HYBRID);
    pos = new google.maps.LatLng(25.724977, -100.3133) // Poscion de la huella de fime
    map.setCenter(pos);
}


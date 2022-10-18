let map;
let marker;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -6.888379955771459, lng: -38.55583697689648 },
    zoom: 14,
    zoomControl: false,
    fullscreenControl: false,
    maxZoom: 16,
    mapTypeId: 'roadmap'
  });

  map.addListener('click', evt =>{
    console.log(evt.latLng);
  });

  map.addListener('dblclick', evt=>{
    marker = new google.maps.Marker({
        position: evt.latLng,
        map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        title: 'Hello World'
      });
    map.setCenter(evt.latLng);

    marker.addListener('click', evt=>{
        alert(marker.title);
    });

  });

}

window.initMap = initMap;
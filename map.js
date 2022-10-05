let map;
const center = { lat: 12.9692, lng: 79.1559 };
const styles = [
  { elementType: "geometry", stylers: [{ color: "#efe6be" }] },
  { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
  {
    elementType: "labels.text.fill",
    stylers: [{ color: "#f5f5f5" }, { weight: 1.5 }],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [{ color: "#9e9e9e" }, { weight: 1.5 }],
  },
  {
    featureType: "administrative.land_parcel",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "labels.text.fill",
    stylers: [{ color: "#bdbdbd" }],
  },
  {
    featureType: "administrative.neighborhood",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [{ color: "#c44135" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#328829" }],
  },
  {
    featureType: "poi.sports_complex",
    elementType: "geometry",
    stylers: [{ color: "#2ca37b" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#e4b083" }],
  },
  {
    featureType: "road",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#32cbb1" }],
  },
  {
    featureType: "water",
    elementType: "labels.text",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9e9e9e" }],
  },
];

function initMap() {
  const localContextMapView = new google.maps.localContext.LocalContextMapView({
    element: document.getElementById("map"),
    placeTypePreferences: [
      { type: "bakery", weight: 1 },
      { type: "park", weight: 2 },
      { type: "restaurant", weight: 3 },
      { type: "shopping_mall", weight: 1 },
      { type: "tourist_attraction", weight: 3 },
    ],
    maxPlaceCount: 18,
    directionsOptions: { origin: center },
  });

  map = localContextMapView.map;
  // Trigger hidePlaceDetailsView() with a click event handler on the inner map.
  map.addListener("click", () => {
    localContextMapView.hidePlaceDetailsView();
  });

  // Merge map styles.
  const mergedStyles = map.get("styles").concat(styles);

  map.setOptions({
    center: center,
    zoom: 14,
    styles: mergedStyles,
  });
  // Add a marker at the center point
  new google.maps.Marker({
    position: center,
    map: map,
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAdUlEQVR4AWMYOWAU/AfhYWMBCxA3A/FlIN4MxN7I6gjg80DcD8QC+CzIxqIxH6aOSHwfYQmmBZexuQymjgTcj8uCz1gUHybDgvO4LFiMRXE4GRb8x2UBDxCXQ8PxPdSrLNSxAD+g3ALCeNQCKoHhZcHAg1EAAM3cyWj3TGxhAAAAAElFTkSuQmCC",
    zIndex: 30,
  });


}


// Standard google maps function
function initialize() {
  var myLatlng = new google.maps.LatLng(40.779502, -73.967857);
  var myOptions = {
      zoom: 12,
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
  TestMarker();
}

// Function for adding a marker to the page.
function addMarker(location) {
  marker = new google.maps.Marker({
      position: location,
      map: map
  });
}

// Testing the addMarker function
function TestMarker() {
     CentralPark = new google.maps.LatLng(37.7699298, -122.4469157);
     addMarker(CentralPark);
}

window.initMap = initMap;




// [START maps_add_map]
// Initialize and add the map
function initMap() {
    // [START maps_add_map_instantiate_map]
    // The location of Uluru
    const uluru = { lat: 12.9692, lng: 79.1559 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom:14,
      center: uluru,
    });
    // [END maps_add_map_instantiate_map]
    // [START maps_add_map_instantiate_marker]
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
    // [END maps_add_map_instantiate_marker]
  }
  
  window.initMap = initMap;
  // [END maps_add_map]
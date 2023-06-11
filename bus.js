function createMapMarker() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiY2hleWVubmUxMSIsImEiOiJjbGlybnl2YmsxYWw2M2dtcjZucnV3bWViIn0.16ksxC5BUShZ6htrWGc8UQ';
  
      let map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-71.091542, 42.358862],
      zoom: 12,
    });
  
    // Create a marker and set its coordinates
    let marker = new mapboxgl.Marker().setLngLat([-71.091542, 42.358862]);
  
    // Add the marker to the map
    marker.addTo(map);
  }
  
  createMapMarker();
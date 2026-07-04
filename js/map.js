// Training-locations map (Leaflet + OpenStreetMap tiles)
//
// ⚠️ COORDINATES: lat/lng below are best estimates — nudge them if a pin
// sits slightly off. Get exact values from Google Maps: right-click the
// spot → the first menu row shows "lat, lng" (click to copy).
const GYM_LOCATIONS = [
  {
    name: 'Norton Gym',
    address: '26–28 Hyde Way, Welwyn Garden City AL7 3UQ',
    lat: 51.7999,
    lng: -0.195,
    icon: 'assets/norton-gym.png',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Norton+Gym+26-28+Hyde+Way+Welwyn+Garden+City+AL7+3UQ',
  },
  {
    name: 'Anytime Fitness',
    address: 'Welwyn Garden City',
    lat: 51.8025,
    lng: -0.2055,
    icon: 'assets/anytime-fitness.png',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Anytime+Fitness+Welwyn+Garden+City',
  },
];

const mapEl = document.getElementById('gym-map');

if (mapEl && typeof L !== 'undefined') {
  const map = L.map(mapEl, { scrollWheelZoom: false });

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  const bounds = [];

  GYM_LOCATIONS.forEach((gym) => {
    const icon = L.divIcon({
      className: 'gym-pin-wrap',
      html: `<div class="gym-pin"><img src="${gym.icon}" alt=""></div><div class="gym-pin-tip"></div>`,
      iconSize: [44, 54],
      iconAnchor: [22, 54],
      popupAnchor: [0, -50],
    });

    const marker = L.marker([gym.lat, gym.lng], { icon, title: gym.name }).addTo(map);

    // Popup content built with DOM APIs (no HTML string interpolation)
    const popup = document.createElement('div');
    popup.className = 'gym-popup';
    const strong = document.createElement('strong');
    strong.textContent = gym.name;
    const addr = document.createElement('span');
    addr.textContent = gym.address;
    const link = document.createElement('a');
    link.href = gym.mapsUrl;
    link.target = '_blank';
    link.rel = 'noopener';
    link.textContent = 'Open in Google Maps';
    popup.append(strong, addr, link);

    marker.bindPopup(popup);
    bounds.push([gym.lat, gym.lng]);
  });

  map.fitBounds(bounds, { padding: [60, 60], maxZoom: 15 });
}


fetch('winnice.json')
  .then(response => response.json())
  .then(data => {
    const map = L.map('map').setView([51.1, 17.0], 8);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    data.forEach(w => {
      const marker = L.marker([w.lat, w.lng]).addTo(map);
      marker.bindPopup(
        `<b>${w.nazwa}</b><br>${w.miejscowosc}<br><a href="${w.link_map}" target="_blank">Mapa</a><br><small>${w.opis}</small>`
      );
    });
  });

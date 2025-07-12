function isWithinRadius(userLat, userLng, poiLat, poiLng, radius) {
  const toRad = (val) => val * Math.PI / 180;
  const R = 6371;
  const dLat = toRad(poiLat - userLat);
  const dLng = toRad(poiLng - userLng);
  const a = Math.sin(dLat/2)**2 +
            Math.cos(toRad(userLat)) * Math.cos(toRad(poiLat)) *
            Math.sin(dLng/2)**2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c <= radius;
}

function searchPOIs(userLat, userLng, radius) {
  db.collection("pois").get().then(snapshot => {
    const results = [];
    snapshot.forEach(doc => {
      const poi = doc.data();
      if (isWithinRadius(userLat, userLng, poi.lat, poi.lng, radius)) {
        results.push(poi.name);
      }
    });
    logAction("User searched POIs in radius: " + radius + " km");
    alert("POIs Found: " + results.join(", "));
  });
}
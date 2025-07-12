function uploadPOI(name, lat, lng) {
  if (!name || !lat || !lng) {
    alert("All fields are required.");
    return;
  }

  db.collection("pois").add({
    name,
    lat: parseFloat(lat),
    lng: parseFloat(lng),
    timestamp: new Date().toISOString()
  }).then(() => {
    logAction("Admin uploaded POI: " + name);
    alert("POI added");
  }).catch(err => {
    console.error("Upload Error:", err);
    alert("Upload failed: " + err.message);
  });
}
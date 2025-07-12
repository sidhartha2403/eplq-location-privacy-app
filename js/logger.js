function logAction(action) {
  db.collection("logs").add({
    action,
    timestamp: new Date().toISOString()
  });
}
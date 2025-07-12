function registerUser(email, password, userType) {
  auth.createUserWithEmailAndPassword(email, password)
    .then((user) => db.collection(userType).doc(user.user.uid).set({ email }))
    .then(() => alert("Registration successful"))
    .catch((err) => alert(err.message));
}

function loginUser(email, password, userType, redirectPage) {
  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      alert("Login success");
      window.location.href = redirectPage;
    })
    .catch((err) => alert(err.message));
}
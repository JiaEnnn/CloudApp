const admin = require("firebase-admin");
<<<<<<< HEAD
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

console.log("✅ Firebase Admin SDK Initialized!");
=======
const path = require("path");

if (!admin.apps.length) {
  const serviceAccount = require(path.join(__dirname, "..", "..", "firebase-service-account.json"));

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });

  console.log("Firebase Admin initialized successfully");
}
>>>>>>> 201809c4c06e9d8a65c8cec40e80c06ecd077008

module.exports = admin;
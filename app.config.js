import 'dotenv/config';

export default {

  "expo": {
    "name": "chatApp",
    "slug": "chatApp",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "extra": {
      apiKey: "AIzaSyBaOlmknONtt9dfIeo3uk611mVuFbX24Kw",
      authDomain: "chatapp-dc5ad.firebaseapp.com",
      projectId: "chatapp-dc5ad",
      storageBucket: "chatapp-dc5ad.appspot.com",
      messagingSenderId: "214313407010",
      appId: "1:214313407010:web:88bac22e120ce7ceb2707b",
      measurementId: "G-J317HYQP36"
    }
  }
}

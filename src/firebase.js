import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCZTVoLmjPGJvL6gHIo6Qkd69l0W2fbSdE",
    authDomain: "cipbackend.firebaseapp.com",
    projectId: "cipbackend",
    storageBucket: "cipbackend.appspot.com",
    messagingSenderId: "685820807156",
    appId: "1:685820807156:web:71537947d1f2484d5d5ba1"
  }

  const firebaseApp = firebase.initializeApp(config)
  export default firebaseApp
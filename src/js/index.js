

// document.getElementById('root').appendChild(LoadingScreen())
// we can write a fuction as a parameter inside another function. this is the way of write
// const root =document.getElementById('root')
// root.appendChild(LoadingScreen())

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyD7ZelOpOfkwwzxtpbs1P195TcXGV9dqw8",
    authDomain: "fire-chat-40be5.firebaseapp.com",
    databaseURL: "https://fire-chat-40be5.firebaseio.com",
    projectId: "fire-chat-40be5",
    storageBucket: "fire-chat-40be5.appspot.com",
    messagingSenderId: "6444122254"
  };
  firebase.initializeApp(config);

navigate('loading-screen');
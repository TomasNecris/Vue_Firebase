import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase";

Vue.config.productionTip = false;

let app = "";

firebase.initializeApp({
  apiKey: "AIzaSyB1BiOccEobQ9TeWkJvlOu0LdRBoiPAQq0",
  authDomain: "basedatoshsk1.firebaseapp.com",
  databaseURL: "https://basedatoshsk1.firebaseio.com",
  projectId: "basedatoshsk1",
  storageBucket: "basedatoshsk1.appspot.com",
  messagingSenderId: "359404887996",
  appId: "1:359404887996:web:dea6785cae284b1c1215b9",
  measurementId: "G-V20VM67YCQ"
});

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount("#app");
  }
});

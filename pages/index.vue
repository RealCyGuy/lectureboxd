<template>
  <Header />
  <h1> Hello, {{user ? user.email : 'guest'}}! Welcome back to LectureBoxd!</h1>
  <button @click="signout">Sign out</button>
  <ul>
    <li v-for="u in users" :key="u.id">{{ u.name }} {{ u.courses }}</li>
  </ul>
</template>

<script setup>
<<<<<<< Updated upstream
import Header from '@/pages/header.vue';
=======
import { signOut } from "firebase/auth";
import { collection, query } from "firebase/firestore";

const db = useFirestore();
const users = useCollection(query(collection(db, "users")));
>>>>>>> Stashed changes

import { signOut } from "firebase/auth";
const user = await useCurrentUser();
const auth = useFirebaseAuth();

function signout() {
  signOut(auth)
    .then(() => {
      console.log("Sign out successful");
    })
    .catch((error) => {
      console.error(error);
    });
}
</script>

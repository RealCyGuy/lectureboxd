<template>
  <Header />
  <h1>
    Hello, {{ user ? user.email : "guest" }}! Welcome back to LectureBoxd!
  </h1>
  <button @click="signout">Sign out</button>
  <ul>
    <li v-for="u in users" :key="u.id">{{ u.name }} {{ u.courses }}</li>
  </ul>
</template>

<script setup>
import Header from "@/pages/header.vue";

// const db = useFirestore();
// const users = useCollection(query(collection(db, "users")));

// const user = await useCurrentUser();
// const auth = useFirebaseAuth();

// function signout() {
//   signOut(auth)
//     .then(() => {
//       console.log("Sign out successful");
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }
</script>

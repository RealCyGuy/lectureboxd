<template>
  <h1> Hello, {{ user.email || 'guest'}}! Welcome back to LectureBoxd!</h1>
  <button @click="signout">Sign out</button>
</template>

<script setup>
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

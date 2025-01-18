<template>
  <div>
    <h1>login</h1>
    <form @submit="signin" action="javascript:void(0)">
      <label for="email">Email</label>
      <input type="email" id="email" name="email" required />

      <button type="submit">Sign in with email link</button>
    </form>
  </div>
</template>

<script setup>
import {
  isSignInWithEmailLink,
  sendSignInLinkToEmail,
  signInWithEmailLink,
} from "firebase/auth";

const auth = useFirebaseAuth();
const user = await getCurrentUser();
console.log(user);

function signin() {
  console.log(4);
  const email = document.getElementById("email").value;

  sendSignInLinkToEmail(auth, email, {
    url: "http://localhost:3000/login",
    handleCodeInApp: true,
  })
    .then(() => {
      console.log("Email sent");
      window.localStorage.setItem("emailForSignIn", email);
    })
    .catch((error) => {
      console.error(error);
    });
}

onMounted(() => {
  if (isSignInWithEmailLink(auth, window.location.href)) {
    // Additional state parameters can also be passed via URL.
    // This can be used to continue the user's intended action before triggering
    // the sign-in operation.
    // Get the email if available. This should be available if the user completes
    // the flow on the same device where they started it.
    let email = window.localStorage.getItem("emailForSignIn");
    if (!email) {
      // User opened the link on a different device. To prevent session fixation
      // attacks, ask the user to provide the associated email again. For example:
      email = window.prompt("Please provide your email for confirmation");
    }
    // The client SDK will parse the code from the link for you.
    signInWithEmailLink(auth, email, window.location.href)
      .then((result) => {
        // Clear email from storage.
        window.localStorage.removeItem("emailForSignIn");
        // You can access the new user by importing getAdditionalUserInfo
        // and calling it with result:
        // getAdditionalUserInfo(result)
        // You can access the user's profile via:
        // getAdditionalUserInfo(result)?.profile
        // You can check if the user is new or existing:
        // getAdditionalUserInfo(result)?.isNewUser
        navigateTo("/setup");
      })
      .catch((error) => {
        // Some error occurred, you can inspect the code: error.code
        // Common errors could be invalid email and invalid or expired OTPs.
        console.error(error);
      });
  }
});
</script>

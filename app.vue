<template>
  <div>
    <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
    <NuxtPage />
  </div>
  <!-- <div>
    <div>hello</div>
    <label for="cars">Choose a car:</label>

    <select name="cars" id="cars">
      <option :value="i" v-for="i in Array(100).keys()">U{{ i }}</option>
    </select>
  </div> -->
</template>

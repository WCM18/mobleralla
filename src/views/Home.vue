<template>
  <div class="home">
    <Navbar></Navbar>
  
    <homeContent></homeContent>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";

import homeContent from "@/components/home-content.vue";

export default {
  name: "home",
  components: {
    Navbar,
    homeContent
  }
};
</script>


<!--<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>
-->


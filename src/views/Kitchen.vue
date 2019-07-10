<template>
  <div class="kitchen">
    <Navbar></Navbar>
    <h1>DETTA ÄR KÖK SIDAN</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";

export default {
  name: "kitchen",
  components: {
    Navbar
  }
};
</script>

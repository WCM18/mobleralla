<template>
  <div class="bedroom">
    <Navbar></Navbar>
    <BedroomComponent></BedroomComponent>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import BedroomComponent from '@/components/BedroomComponent.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: "bedroom",
  components: {
    Navbar,
    BedroomComponent,
    Footer
  }
};
</script>

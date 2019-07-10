<template>
  <div class="product">
    <Navbar></Navbar>
    <products></products>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Products from "@/components/CupbordsComponents.vue";

export default {
  name: "product",
  components: {
    Navbar,
    Products
  }
};
</script>
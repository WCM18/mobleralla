<template>
   <div class="desks">
      <Navbar></Navbar>
      <products></products>
   </div>

</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Products from "@/components/OfficedesksComponents.vue";

export default {
	name: "product", 
  	components: {
    Navbar,
    Products
  }
};
</script>
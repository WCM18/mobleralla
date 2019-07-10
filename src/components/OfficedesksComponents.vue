<template>
  <article>
    <div>
      <br>
      <section v-for="product in products" :key="product.title">
        <div class="row">
          <div class="col-6">
            <img :src="product.image" width="400px" height="300px">
          </div>
          <div class="col-4">
            <h1>{{product.title}}</h1>
            <h5>{{product.price}} Kr</h5>
            <br>
            {{product.text}}
          </div>
        </div>
        <br>
      </section>
    </div>
  </article>
</template>

<script>
import image1 from "@/images/skrivbord.jpg";
import image2 from "@/images/skrivbord1.jpeg";
import image3 from "@/images/skrivbord2.jpg";
export default {
  data() {
    return {
      products: [
        {
          title: "Elite Skrivbord",
          price: "30500",
          text: `Praesent vestibulum dapibus nibh. Morbi ac felis. Aenean commodo ligula eget dolor.
                  Fusce neque. Praesent adipiscing. Ut tincidunt tincidunt erat.`,
          image: image1
        },
        {
          title: "Bekant",
          price: "5500",
          text: `Praesent vestibulum dapibus nibh. Morbi ac felis. Aenean commodo ligula eget dolor.
                  Fusce neque. Praesent adipiscing. Ut tincidunt tincidunt erat.`,
          image: image2
        },
        {
          title: "Leonardo",
          price: "10500",
          text: `Praesent vestibulum dapibus nibh. Morbi ac felis. Aenean commodo ligula eget dolor.
                  Fusce neque. Praesent adipiscing. Ut tincidunt tincidunt erat.`,
          image: image3
        }
      ]
    };
  }
};
</script>
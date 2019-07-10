<template>
   <div class="bedroomcomponent">
      <div class="container first">
         <div class="row">
            <div class="col-lg-3 col-md-4 col-sm-6">
               <h5>{{ header5 }}</h5>
               <p>{{ text1 }}</p>
            </div>
            <div class="col col-picture">
               <img :src="image1" alt="">
            </div>
            <div class="col col-picture">
               <img :src="image2" alt="">
            </div>
         </div>
         <div class="container second">
            <div class="row">
               <div class="col-12">
                  <h3>{{ header3 }}</h3>
               </div>
            </div>
            <div class="row">
               <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                  <div class="carousel-inner">
                     <div class="carousel-item active">
                        <img :src="image3" class="d-block w-100" alt="...">
                     </div>
                     <div class="carousel-item">
                        <img :src="image4" class="d-block w-100" alt="...">
                     </div>
                     <div class="carousel-item">
                        <img :src="image5" class="d-block w-100" alt="...">
                     </div>
                  </div>
                  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                     <span class="sr-only">Previous</span>
                  </a>
                  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                     <span class="carousel-control-next-icon" aria-hidden="true"></span>
                     <span class="sr-only">Next</span>
                  </a>
               </div>
            </div> <!-- closing row tag -->
         </div> <!-- closing container-fluid second tag -->
      </div> <!-- closing container-fluid first tag -->
   </div> <!-- closing bedroomcomponent tag -->
</template>

<style>
  .col-3, .col {
    height: 230px;
    margin: 0 5px 30px 5px;
    padding: 0;
  }

  .col-picture {
     margin-bottom: 0;
  }

  .col>img {
    height: 100%;
    width: 100%;
  }

  .carousel-item>img {
      height: 100vh;
      width: 100vw;
  }

  p {
    margin: 0;
    text-align: left;
  }
  h3 {
    margin: 45px 0 10px 0;
  }

  h5 {
    margin-bottom: 0.7rem;
  }
   
   .first, .second {
      padding: 0; 
   }
   
   .bedroomcomponent{
      margin-top: 50px;
   }
   .second {
     margin-bottom: 50px;
  }
</style>

<script>
import image1 from '@/images/pillows-1031079_1920.jpg'
import image2 from '@/images/bedroom-1078890_1920.jpg'
import image3 from '@/images/apartment-1822409_1920.jpg'
import image4 from '@/images/bedroom-1807837_1920.jpg'
import image5 from '@/images/nursery-1078923_1920.jpg'

export default {
   name: 'BedroomComponent',
   data() {
      return {
         header5: 'Sov gott!',
         header3: 'Våra nyaste produkter!',
         text1: `Vi vet betydningen av en god natt sömn. Varje möbel vi säljer ned till minsta detalj, har en uppgift. Att se till att du får den bästa sömnen, varje natt!`,
         image1: image1,
         image2: image2,
         image3: image3,
         image4: image4,
         image5: image5
      }
   }
}
</script>
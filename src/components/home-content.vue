<template>
  <div id="master-box">
    <div id="main-box">
        <div id="box-group-one">
            <div id="main-box-one">
                <div id="text-box"><p>Sofistikerad Soffa</p></div>
                <div class="justify" id="img-box">
                    <img :src="soffa1" alt="blabla">
                </div>
            </div>
            
            
        </div>




        <div id="box-group-two">
            <div id="main-box-two">
                 <div id="text-box-two"><p>Hyllad Hylla</p></div>
                <div class="justify" id="img-box-two">
                     <img :src="hylla1" alt="blabla">
                </div>
            </div>
           
            
        </div>
         
      </div>
       <footer id="site-foot"></footer>
    </div>
  
  
</template>

<style>
#master-box {
  height: 100vh;
}

#main-box {
  display: flex;
  height: 100%;
}

#main-box-one {
  display: flex;
  flex: 1;
  margin: 2vw;
  background-color: #45a9eb;
  width: 45vw;
  height: 60vh;
  flex-direction: column;
}

#main-box-two {
  display: flex;
  flex: 1;
  margin: 2vw;
  background-color: #45a9eb;
  width: 45vw;
  height: 60vh;
  flex-direction: column;
}

#site-foot {
  background-color: #45a9eb;

  width: 100%;
  height: 20%;
}

#text-box {
  background-color: white;
  height: 30px;
  width: 300px;
  padding: 2px;
  margin-top: 20px;
  align-self: center;
  text-align: center;
}

#text-box-two {
  background-color: white;
  height: 30px;
  width: 300px;
  padding: 2px;
  margin-top: 20px;
  align-self: center;
}

#img-box,
#img-box-two {
    background-color: white;
    height: 300px;
    width: 500px;
    padding: 2px;
   
  
}



.justify {
    margin: auto;

}

.justify img {
    height: 100%; 
    width: 100%; 
    object-fit: cover;
}



</style>

<script>
import soffa1 from '@/images/soffa.jpg'
import hylla1 from '@/images/hylla.jpeg'


export default {
    name: "home-content",
    data() {
      return {
        
         soffa1: soffa1,
         hylla1: hylla1
      }
   }
}
</script>


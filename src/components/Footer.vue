<template>
   <nav class="navbar fixed-bottom navbar-expand-lg navbar-bark">
      <div class="container footer-container">
         <span class="text-muted">{{ spantext }}</span>
      </div>
   </nav>
</template>

<style>
   .fixed-bottom {
      position: relative;
      bottom: 0;
      height: 60px;
      line-height: 60px;
      background-color: #45A9EB;
   }

   .footer-container {
      width: auto;
      max-width: 680px;
      padding: 0 15px;
      margin-left: auto;
      margin-right: auto;
      }

   .text-muted {
      color: white!important;
   }
</style>

<script>
export default {
   name: 'Footer',
   data() {
      return {
         spantext: 'Här kan vi ha text eller annat'
      }
   }
}
</script>

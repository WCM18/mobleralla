<template>
   <nav class="navbar sticky-top navbar-expand-lg navbar-light" style="background-color:#45A9EB;">
      <div class="navbar-brand">
    <img src="https://wcms18.nodehill.se/wp-content/uploads/2019/01/mobleralla.png" width="100" height="100" class="d-flex align-items-end" style="border-radius: 50px;">
  </div>
      <router-link to="/" class="navbar-brand" style="color: white;">Hem</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style="background-color: white;">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="color: white;">
          Kök
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
           <router-link to="/kitchen" class="dropdown-item" style="color: #45A9EB;">Huvudsida Kök</router-link>
          <div class="dropdown-divider"></div>
          <router-link to="/countertops" class="navbar-brand" style="color: #45A9EB;">Bänkskivor</router-link>
          <router-link to="/worktops" class="navbar-brand" style="color: #45A9EB;">Köksbänkar</router-link>
          <router-link to="/kitchenshelves" class="navbar-brand" style="color: #45A9EB;">Kökshyllor</router-link>
          <router-link to="/cupboards" class="navbar-brand" style="color: #45A9EB;">Skåpluckor</router-link>
          <router-link to="/drawercabinets" class="navbar-brand" style="color: #45A9EB;">Lådhurtsar</router-link>
         </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="color: white;">
         Vardagsrum
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
           <router-link to="/living" class="dropdown-item" style="color: #45A9EB;">Huvudsida Vardagsrum</router-link>
          <div class="dropdown-divider"></div>
          <router-link to="/sofas" class="navbar-brand" style="color: #45A9EB;">Soffor</router-link>
          <router-link to="/armchairs" class="navbar-brand" style="color: #45A9EB;">Fåtöljer</router-link>
          <router-link to="/tables" class="navbar-brand" style="color: #45A9EB;">Bord</router-link>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="color: white;">
          Kontor
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
           <router-link to="/office" class="dropdown-item" style="color: #45A9EB;">Huvudsida Kontor</router-link>
          <div class="dropdown-divider"></div>
          <router-link to="/desks" class="navbar-brand" style="color: #45A9EB;">Skrivbord</router-link>
          <router-link to="/officechairs" class="navbar-brand" style="color: #45A9EB;">Kontorsstolar</router-link>
          <router-link to="/bookshelves" class="navbar-brand" style="color: #45A9EB;">Bokhyllor</router-link>
         </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="color: white;">
          Sovrum
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <router-link to="/bedroom" class="dropdown-item" style="color: #45A9EB;">Huvudsida Sovrum</router-link>
          <div class="dropdown-divider"></div>
          <router-link to="/beds" class="navbar-brand" style="color: #45A9EB;">Sängar</router-link>
          <router-link to="/nightstands" class="navbar-brand" style="color: #45A9EB;">Nattduksbord</router-link>
          <router-link to="/wardrobes" class="navbar-brand" style="color: #45A9EB;">Garderober</router-link>
         </div>
      </li>
   </ul>
  </div>
   </nav>
</template>

<style>
.navbar-brand {
  display: block;
  font-size: 1rem;
  text-align: center;
}
</style>


<script>
export default {
   name: 'Navbar'
}
</script>
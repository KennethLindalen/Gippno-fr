<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="navbar-brand" href="#" :to="{name:'home'}"><h3>Gippno</h3></router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor03"
        aria-controls="navbarColor03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link :to="{name:'home'}" class="nav-link" href="#"><h6>Home</h6>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name:'news'}" class="nav-link" href="#"><h6>Newsletter</h6>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name:'about'}" class="nav-link" href="#"><h6>About us</h6>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view class="container mt-2" />
    <br>
    <footer id="sticky-footer" class="py-4 bg-dark text-white-50">
      <div class="container text-center">
        <small>Copyright &copy; Gippno 2019</small>
      </div>
    </footer>
  </div>
</template>

<style>
  #sticky-footer {
    flex-shrink: 0;
  }
</style>

<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="navbar-brand" href="#" :to="{name:'home'}">Gippno</router-link>
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
            <router-link :to="{name:'news'}" class="nav-link" href="#">Newsletter</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view class="container mt-4" />
  </div>
</template>

<style>
</style>

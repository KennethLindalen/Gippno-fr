<template>
  <div class="home">
    <div class="jumbotron">
      <h1 class="display-3">Gippno - a better way to organize your project!</h1>
      <p class="lead">
        This is a simple hero unit, a simple jumbotron-style component for calling
        extra attention to featured content or information.
      </p>
      <hr class="my-4" />
      <p>
        It uses utility classes for typography and spacing to space content out within the larger
        container.
      </p>
      <p class="lead pb-1">
        <router-link :to="{name:'signup'}"
                     class="btn btn-primary btn-lg float-right ml-2"
                     role="button">
        Sign Up</router-link>
        <router-link :to="{name:'login'}"
                     class="btn btn-primary btn-lg float-right"
                     role="button">
        Login</router-link>
      </p>
    </div>
    <h2>News</h2>

    <div class="card mb-2">
      <div class="card-body">
        <h4 class="card-title">Opening day</h4>
        <h6 class="card-subtitle mb-2 text-muted">10.27.2019 9:26PM</h6>
        <p class="card-text">
          While this might not have come to the offical release date it is
          currently in alpha, therefore everyone that joins get the first 2 months for free.
          Some feedback would be highly appriciated so we can further improve our services!
          <br />
          <br />Thanks,
          <br />- The Gippno team
        </p>
        <router-link :to="{name:'news'}"
                     href="#"
                     class="card-link">Click to view more of the article</router-link>
      </div>
    </div>
    <div class="card mb-2">
      <div class="card-body">
        <h4 class="card-title">Upcoming changes</h4>
        <h6 class="card-subtitle mb-2 text-muted">10.27.2019 9:26PM</h6>
        <p class="card-text">
          Seeing that Gippno just released it has just the basics of features, there are
          still plenty
          in development and they will start coming out rather soon. For now, there is only
          the kanban board, the documentation generator and the messaging capabilities.
          More features to come shortly!
        </p>
        <router-link :to="{name:'news'}"
                     href="#"
                     class="card-link">
          Click to view more of the article
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {},
};
</script>

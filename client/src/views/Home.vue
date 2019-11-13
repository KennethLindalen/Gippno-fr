<template>
  <div class="home">
    <div class="jumbotron pt-4">
      <h1 class="display-4">Gippno - a better way to organize your projects!</h1>
      <br>
      <p class="lead">
        HOVED INFO TEKST!HOVED INFO TEKST!
        HOVED INFO TEKST!
        HOVED INFO TEKST!HOVED INFO TEKST!
        HOVED INFO TEKST!
        HOVED INFO TEKST!
        HOVED INFO TEKST!
        HOVED INFO TEKST!
        HOVED INFO TEKST!
        HOVED INFO TEKST!
        HOVED INFO TEKST!
        HOVED INFO TEKST!


      </p>
      <hr class="my-4"/>
      <p>
        Mindre info tekst, Mindre info tekst,
        Mindre info tekst,
        Mindre info tekst,
        Mindre info tekst,
        Mindre info tekst,
        Mindre info tekst,
      </p>
      <p class="lead pb-1">
        <router-link :to="{name:'signup'}"
                     class="btn btn-primary btn-lg float-right ml-2 px-5"
                     role="button">
        Sign Up
        </router-link>
        <router-link :to="{name:'login'}"
                     class="btn btn-primary btn-lg float-right px-5"
                     role="button">
        Log in
        </router-link>
      </p>
    </div>
    <h2>News</h2>

    <div class="card mb-2">
      <div class="card-body">
        <h4 class="card-title">Title 2</h4>
        <h6 class="card-subtitle mb-2 text-muted">10.27.2019 9:26PM</h6>
        <p class="card-text">
          Turpiss sunt buxums de rusticus nuclear vexatum iacere.
          Turpiss sunt buxums de rusticus nuclear vexatum iacere.
          Turpiss sunt buxums de rusticus nuclear vexatum iacere.
          Turpiss sunt buxums de rusticus nuclear vexatum iacere.
          Turpiss sunt buxums de rusticus nuclear vexatum iacere.
          Turpiss sunt buxums de rusticus nuclear vexatum iacere.
          Turpiss sunt buxums de rusticus nuclear vexatum iacere.

          <br />
          <br />Thanks,
          <br />- The Gippno team
        </p>
        <router-link :to="{name:'news'}"
                     href="#"
                     class="card-link">
          Click to view more of the article
        </router-link>
      </div>
    </div>
    <div class="card mb-2">
      <div class="card-body">
        <h4 class="card-title">Title 1</h4>
        <h6 class="card-subtitle mb-2 text-muted">10.27.2019 9:26PM</h6>
        <p class="card-text">
            Turpiss sunt buxums de rusticus nuclear vexatum iacere.
          Turpiss sunt buxums de rusticus nuclear vexatum iacere.
          Turpiss sunt buxums de rusticus nuclear vexatum iacere.
          Turpiss sunt buxums de rusticus nuclear vexatum iacere.
          Turpiss sunt buxums de rusticus nuclear vexatum iacere.
          Turpiss sunt buxums de rusticus nuclear vexatum iacere.
          Turpiss sunt buxums de rusticus nuclear vexatum iacere.
          <br />
          <br />Thanks,
          <br />- The Gippno team
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
/* eslint-disable */
export default {
  name: 'home',
  components: {},
};
</script>

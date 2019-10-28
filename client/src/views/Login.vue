<template>
  <div>
    <div class="jumbotron pt-3 pb-4">
      <h1>Login</h1>
      <div class="alert alert-warning mp-3" role="alert" v-if="this.errorMsg">
        {{this.errorMsg}}
      </div>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="email">Email address</label>
          <input type="email" class="form-control" id="email"
                 aria-describedby="email help"
                 placeholder="Enter your email" required v-model="user.epost">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password"
                 placeholder="Password" required v-model="user.passord">
          </div>
        <button type="submit" class="btn btn-primary" style="width: 100%">Login</button>
      </form>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
export default {
    data() {
      return {
          errorMsg: '',
          user: {
              epost: '',
              password: '',
          }
      }
  },
    methods: {
        login(){
          if(this.validUser()){

          }
        },
        validUser(){

        }
    }
};
</script>
<style scoped>
</style>

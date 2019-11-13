<template>
  <div>
    <div class="jumbotron pt-3 pb-4">
      <h1>Login</h1>
      <div v-if="loggingIn" >
        <img class="mx-auto" style="display: block" src="../assets/Spinner-1s-200px.svg" />
      </div>
      <div class="alert alert-danger mp-3" role="alert" v-if="this.errorMsg">
        {{errorMsg}}
      </div>
      <form @submit.prevent="login()" v-if="!loggingIn">
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

import Joi from 'joi';

const schema = Joi.object().keys({
  epost: Joi.string().trim().email().required(),
  passord: Joi.string().trim().min(8).max(32).required(),
});

export default {
  data: () => ({
    errorMsg: '',
    loggingIn: false,
    user: {
      epost: '',
      passord: '',
    },
  }),
  methods: {
    login() {
      this.errorMsg = '';
      if (this.validUser()) {
        this.loggingIn = true;
        const body = {
          email: this.user.epost,
          password: this.user.passord,
        };
        fetch('http://localhost:5000/auth/login/', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(body),
        }).then((response) => {
          if (response.ok) {
            return response.json();
          }
          return response.json().then((error) => {
            throw new Error(error.message);
          });
        }).then((result) => {
          localStorage.token = result.token;
          setTimeout(() => {
            this.loggingIn = false;
            this.$router.push('/dashboard');
          }, 1000);
        }).catch((error) => {
          setTimeout(() => {
            this.loggingIn = false;
            this.errorMsg = error.message;
          }, 1000);
        });
      }
    },
    validUser() {
      const result = Joi.validate(this.user, schema);
      if (result.error === null) {
        return true;
      }
      if (result.error.message.includes('epost')) {
        this.errorMsg = 'Email is invalid.';
      } else {
        console.log(result.error);
        this.errorMsg = 'Password is invalid.';
      }
      return false;
    },
  },
};
</script>
<style scoped>
</style>

<template>
  <div>
    <div class="jumbotron pt-3 pb-4">
      <h1>Sign up</h1>
      <div v-if="singingUp" >
        <img class="mx-auto" style="display: block" src="../assets/Spinner-1s-200px.svg" />
      </div>
      <div class="alert alert-danger mt-3" role="alert" v-if="this.errorMsg">
        {{errorMsg}}
      </div>
      <form @submit.prevent="signup" v-if="!singingUp">
          <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" class="form-control" id="email"
            placeholder="Enter email" required
            v-model="user.epost">
            <label for="email">Username</label>
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password"
            placeholder="Password" required v-model="user.passord">
            <label for="confirmPassword">Confirm password</label>
            <input type="password" class="form-control" id="confirmPassword"
            placeholder="Confirm Password" required v-model="user.confirmedPassword">
          </div>
        <button type="submit" class="btn btn-primary px-5" style="width: 100%">Sign Up</button>
      </form>
    </div>
</div>
</template>
<script>
/* eslint-disable */
import joi from 'joi';


const registerSchema = joi.object().keys({
    email: joi.string().trim().email().required(),
    password: joi.string().trim().min(8).max(32).required(),
    confirmedPassword: joi.string().trim().min(8).max(32).required(),
});
export default {
  data: () => ({
    errorMsg: '',
      singingUp: false,
    user: {
      epost: '',
      passord: '',
      confirmedPassword: '',
    },
  }),
  watch:{
    user:{
      deep: true,
      handler() {
        this.errorMsg = '';
      },
    }
  },
  methods: {
    signup() {
      this.errorMsg = "";
      if(this.validUser){
        const body = {
            email: this.user.epost,
            password: this.user.passord,
          };
        this.singingUp = true;
        fetch('http://localhost:5000/auth/register/', {
            method: 'POST',
            body: JSON.stringify(body),
                headers:
                    {
                      'content-Type': 'application/json'
                    }
        }).then((response) => {
          if(response.ok){
            return response.json();
          }
            return response.json().then((error) => {
                throw new Error(error.message);
            })
        }).then(() => {
            setTimeout(() =>{
                this.singingUp = false;
                this.$router.push('/login');
            },1000);

        }).catch((error) => {
            setTimeout(() =>{
                this.singingUp = false;
                this.errorMsg = error.message();
            },1000);
        })
      }
    },
    validUser() {
      if(this.user.passord !== this.user.confirmedPassword){
        this.errorMsg = "The passwords must match.";
        return false;
      } else {
        const res = joi.validate(this.user, registerSchema);
        if(res.error === null){
          return true;
        }
          if(res.error.message.includes('username')){
            this.errorMsg = 'Email is invalid'
          }else{
            this.errorMsg = "Password is invalid"
          }
          return false;
        }
      }
    }
  }
</script>
<style scoped>
</style>

<template>
  <div>
    <div class="jumbotron pt-3">
      <h1>Log in</h1>
      <div class="alert alert-danger mt-5" role="alert" v-if="this.errorMsg">
        {{this.errorMsg}}
      </div>
      <form>
        <div class="form-group">
          <label for="email">Email address</label>
          <input type="email" class="form-control" id="email"
                 aria-describedby="email help" placeholder="Enter email" required>
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password"
                 placeholder="Password" required>
          </div>
        <button type="submit" class="btn btn-primary float-right px-5">Login</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {

};
</script>
<style scoped>
</style>

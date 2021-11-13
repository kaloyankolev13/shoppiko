<template>
  <div class="container">
    <div class="navigation-bar">
      <h1>{{ msg }}</h1>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/products">Products</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "shopiko",
    };
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  background-color: #f5f5f5;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-bottom: 30px;
}
.navigation-bar {
  display: flex;
  padding: 20px;
  margin: 0px 100px;
  justify-content: space-between;
  align-items: center;
}
/* #nav{
        
    } */
#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 10px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

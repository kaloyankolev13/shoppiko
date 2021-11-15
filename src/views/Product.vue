<template>
  <div>
    <section class="container">
      <div class="flex-col-1">
        <img class="img-col-1" :src="imagePath(product)" alt="" />
      </div>
      <div class="flex-col-2">
        <h2>{{ product.name }}</h2>
        <p>Price : {{ product.price }}$</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Product",
  data() {
    return {
      product: this.$store.getters.product(this.$route.params.id),
    };
  },
  methods: {
    imagePath(product) {
      return require(`../assets/img/products/${product.images[0]}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.img-col-1 {
  width: 70%;
  height: auto;
}
</style>

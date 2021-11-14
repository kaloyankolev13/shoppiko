<template>
  <div>
    <section class="wrapper">
      <h2>Featured Items</h2>
      <ul class="featured-items">
        <li
          v-for="product in products"
          :key="product.id"
          class="featured-item_items"
        >
          <img class="product-image" :src="imagePath(product)" alt="" />
          <p class="product-title">{{ product.name }}</p>
          <p>
            <em>$ {{ product.price }}</em>
          </p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "Products",
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  methods: {
    imagePath(product) {
      return require(`../assets/img/products/${product.images[0]}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  margin: 0 auto;
  max-width: 1300px;
  padding: 0 20px;
  text-align: center;
  h2 {
    margin-bottom: 20px;
  }
}
.featured-items {
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 30px 10px;
  border-radius: 20px;
}
.featured-item_items {
  justify-content: space-between;
}
.product-image {
  width: 60%;
  margin: 0 auto;
  border-radius: 20px;
}
.product-title {
  font-weight: bold;
  font-size: 1.2rem;
  margin: 0;
}
</style>

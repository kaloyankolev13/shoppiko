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
          <router-link :to="{ name: 'product', params: { id: product.id } }">
            <img class="product-image" :src="imagePath(product)" alt="" />
            <p class="product-title" :class="{ 'no-stock': !isAvailable }">
              {{ product.name }}
            </p>
            <p>
              <em>$ {{ product.price }}</em>
            </p>
          </router-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "Products",
  data() {
    return {
      isAvailable: true,
    };
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  methods: {
    imagePath(product) {
      return require(`../assets/img/products/${product.images[0]}`);
    },
    ifAvaliabe() {
      if (this.product.stock <= 0) {
        this.isAvailable = false;
      }
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
  a {
    text-decoration: none;
  }
}

.featured-item_items {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 30px;
  padding: 10px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 0 5px #ccc;
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

.no-stock {
  text-decoration: line-through;
}
</style>

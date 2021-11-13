<template>
  <div>
    <ProductsBlock />
    <h1>This is a products page</h1>
  </div>
</template>

<script>
import ProductsBlock from "../components/ProductsBlock.vue";
export default {
  name: "App",
  components: {
    ProductsBlock,
  },
};
</script>

<style lang="scss" scoped>
</style>
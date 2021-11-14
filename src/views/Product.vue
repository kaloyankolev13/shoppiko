<template>
  <div>
    <h2>{{ product.name }}</h2>
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
};
</script>

<style lang="scss" scoped>
</style>
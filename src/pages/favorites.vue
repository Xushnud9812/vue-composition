<template>
  <div class="container">
    <h1 class="text-3xl text-center font-bold my-5">Favorites</h1>

    <div class="grid grid-cols-4 gap-5">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>

  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue';
export default {
  components: { ProductCard },

  computed: {
    products() {
      return this.$store.state.likedProducts
    }
  }
}
</script>

<style lang="scss" scoped></style>
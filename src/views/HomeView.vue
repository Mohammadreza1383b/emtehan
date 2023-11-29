<script setup lang="ts">
    import productComp from './productComp.vue';
    import {product} from '../stores/counter'
    const StoreProduct = product()
</script>

<template>
  <productComp @delete="StoreProduct.RemoveProduct('1')"/>
</template>

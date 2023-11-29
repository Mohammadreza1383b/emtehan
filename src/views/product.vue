<script setup lang="ts">
    import {product} from '../stores/counter'
    const StoreProduct = product()
</script>

<template>
    <div>{{ StoreProduct.productList }}</div>

</template>

<style>

</style>
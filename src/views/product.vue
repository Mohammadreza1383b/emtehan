<script setup lang="ts">
    import { computed } from 'vue';
import {product} from '../stores/counter'
    const StoreProduct = product()
    const count = 5
    //this can use in template section but template lose his organization and it better computed to do a logic and it is better to function becouse it have buffer
    const Isproduct = computed(() =>{
        return StoreProduct.productList.length>1 ? true : false
    })
</script>

<template>
    <div v-if="Isproduct == false">there is no product</div>
<div v-if="Isproduct == true">
    <div v-for="x in StoreProduct.productList.length-1">
        <P>{{ StoreProduct.productList[x].title }} - {{ StoreProduct.productList[x].title }}</P>
    </div>
</div>

</template>

<style>

</style>
<script setup lang="ts">
    import { computed, reactive, ref } from 'vue';
    import {product} from '../stores/counter'

    const StoreProduct = product()
    const count = 5
    //this can use in template section but template lose his organization and it better computed to do a logic and it is better to function becouse it have buffer
    const Isproduct = computed(() =>{
        return StoreProduct.productList.length>1 ? true : false
    })
    //define title and id variable to link by form
    const form = reactive({
        id : '',
        title : ''
    })

    const emit = defineEmits(['delete'])
</script>

<template>
    <input class="input" placeholder="title" type="text" v-model="form.title">
    <input class="input" placeholder="id" type="text" v-model="form.id">
    <button style="margin: 10px;" @click="StoreProduct.AddProduct({id :form.id , title : form.title})">Add</button>
    <br>
    <div v-if="Isproduct == false">there is no product</div>
<div v-if="Isproduct == true">
    <div  @dblclick="$emit('delete',StoreProduct.productList[x].id)" class="product" v-for="x in StoreProduct.productList.length-1">
        <P>{{ x }} -  {{ StoreProduct.productList[x].id }} - {{ StoreProduct.productList[x].title }}</P>
    </div>
</div>

</template>

<style>
    .input{
        margin: 10px;
    }

    .product{
        border: 2px solid green;
        border-radius: 10px;
    }
</style>
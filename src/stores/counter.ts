import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const product = defineStore('counter', () => {
  

  type productModel = {
    id : '',
    title : '',
  }

  const productList = reactive([
    {
      id : 'defalt',
      title : 'defalt'
    },
    {
      id : '1',
      title : 'test'
    }
  ]);

  function AddProduct(inputProduct : productModel) {
    productList.push(inputProduct)
  }

  function RemoveProduct(INPid : number) {
    //find product by id 
    const findProduct = productList.find(item => item.id);
    if (findProduct != null) {
      //first find index of product that find and remove by slice that remove 1 from idex
      productList.slice(productList.indexOf(findProduct),1)
    }
  }

  return{productList,AddProduct,RemoveProduct}
})

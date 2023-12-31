import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const product = defineStore('counter', () => {
  
  //this is store for store data and organize 

  //define model
  type productModel = {
    id : '',
    title : '',
  }

  //define a product list in by defalt value

  const productList = reactive([
    {
      id : 'defalt',
      title : 'defalt'
    },
    
  ]);

  function AddProduct(inputProduct : productModel) {
    productList.push(inputProduct)
  }

  function RemoveProduct(INPid : String) {
    //find product by id 
     const findProduct = productList.find(item => item.id == INPid);
      //first find index of product that find and remove by slice that remove 1 from idex
      console.log(productList.indexOf(findProduct!));
      productList.slice(productList.indexOf(findProduct!),1)
  }

  return{productList,AddProduct,RemoveProduct}
})

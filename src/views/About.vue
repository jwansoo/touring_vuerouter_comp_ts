<template>
  <div class="nav-bar">
    <div class="cart">Cart({{cart}})</div>
    <div class="product-display">
      
      <div class="product-container">
        <div class="product-image">
          <img :class="{'out-of-stock-img':!inStock}" :src="image">
        </div>
        <div class="product-info">
          <h1>{{title}}</h1>
          <p v-if="inStock > 0">In Stock</p>
          <p v-else>Out of Stock</p>
          <p>Shipping:{{shipping}}</p>
          <ul>
            <li v-for="detail in details" :key="detail">
              {{ detail }}
            </li>
          </ul>
        <div
         v-for="(variant,index) in variants" 
        :key="variant.id"
         @mouseover="updateVariant(index)"
        class="color-circle"
        :style="{backgroundColor:variant.color}">
      </div>
       <button class="button"
       :class="{disableButton:!inStock}"
       :disabled="!inStock"
       @click="addToCart">Add to Cart</button>
      <div><a :href="url">Made by Vue Mastery</a></div>
      </div>
    </div>
   </div>
  </div>
</template>
<script setup lang="ts">
import {ref,reactive,computed} from 'vue'
const cart=ref(0)
const product=ref('Socks')
const brand=ref('Vue Mastery')
const selectedVariant=ref(0)
const premium=ref(true)
const details=ref(['50% cotton','30% wool','20% polyester'])
const variants=reactive([
  {id:2234,color:'green',image:'/images/socks_green.jpg',quantity:50},
  {id:2235,color:'blue',image:'/images/socks_blue.jpg',quantity:0}
])
const onSale=ref(true)
const addToCart=()=>cart.value+=1
const updateVariant=(index:number)=>selectedVariant.value=index
const title=computed(()=>brand.value +' '+ product.value)
const image=computed(()=>variants[selectedVariant.value].image)
const inStock=computed(()=>variants[selectedVariant.value].quantity)
const shipping=computed(()=>{
  if(premium.value){
    return 'Free'
  }
  return 2.99
})
const url=ref('https://www.vuemastery.com/')
</script>

<style scoped>
body {
  background-color: #f2f2f2;
  margin: 0px;
  font-family: tahoma;
  color: #282828;
}

.button {
  margin: 30px;
  background-color: #39495c;
  border-radius: 5px;
  font-size: 18px;
  width: 160px;
  height: 60px;
  color: white;
  padding: 20px;
  box-shadow: inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.17),
    inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.15),
    inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
  text-align: center;
  cursor: pointer;
}

.cart {
  margin: 25px 100px;
  float: right;
  border: 1px solid #d8d8d8;
  padding: 10px 30px;
  background-color: white;
  -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 2px 15px -12px rgba(0, 0, 0, 0.57);
}

.color-circle {
  width: 50px;
  height: 50px;
  margin-top: 8px;
  border: 2px solid #d8d8d8;
  border-radius: 50%;
}


.disabledButton {
  background-color: #d8d8d8;
  cursor: not-allowed;
}

h1 {
  font-size: 50px;
}

h3 {
  font-size: 25px;
}

img {
  border: 2px solid #d8d8d8;
  width: 70%;
  margin: 40px;
  padding: 15px;
  -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 2px 15px -12px rgba(0, 0, 0, 0.57);
}

input {
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
}

label {
  font-size: 20px;
  margin-bottom: 5px;
}

li {
  font-size: 18px;
}

.nav-bar {
  background: linear-gradient(-90deg, #84cf6a, #16c0b0);
  height: 60px;
  margin-bottom: 25px;
  -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.57);
}

.out-of-stock-img {
  opacity:0.5
}

p {
  font-size: 22px;
}

.product-display {
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

.product-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.product-image,
.product-info {
  width: 50%;
}

.review-form {
  display: flex;
  flex-direction: column;
  width: 425px;
  padding: 20px;
  margin: 40px;
  border: 2px solid #d8d8d8;
  background-color: white;
  -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 2px 15px -12px rgba(0, 0, 0, 0.57);
}

.review-container {
  width: 425px;
  padding: 20px;
  background-color: white;
  -webkit-box-shadow: 0px 2px 20px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 20px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 2px 20px -12px rgba(0, 0, 0, 0.57);
  margin-left: 40px;
  border: 2px solid #d8d8d8;
}

.review-container li {
  margin-bottom: 30px;
}

.review-form .button {
  display: block;
  margin: 30px auto;
}

select {
  height: 40px;
  font-size: 20px;
  background-color: white;
  cursor: pointer;
}

textarea {
  width: 95%;
  height: 70px;
  padding: 10px;
  font-size: 20px;
  margin-bottom: 20px;
}

ul {
  list-style-type: none;
}

@media only screen and (max-width: 600px) {
  .container {
    flex-direction: column;
  }

  .product-image,
  .product-info {
    margin-left: 10px;
    width: 100%;
  }

  .review-form {
    width: 90%;
  }
}

</style>

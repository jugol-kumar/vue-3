<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import { useFlash } from '@/composables/useFlash'
import { useStorage } from "@/composables/useStorage";
import {ref, watch} from "vue";
let {flash} = useFlash();
let food = useStorage('food', 'salad');
let age = useStorage('age', 0);

let obj = useStorage("obj" , {one:"one", "tow":2 })


setTimeout(() =>{
  obj.value.one = "changed"
}, 200)


// let food = ref(localStorage.getItem('food'));
// let age = ref(localStorage.getItem('age'));
// function write(key, val){
//   localStorage.setItem(key, val);
//
// }
// watch(food, (val) =>{
//   write("food", val);
// })
//
//
// setTimeout(() =>{
//   food.value = "changed";
// }, 2000)
//

</script>


<template>
  <main>
    <h1>This is my main component</h1>

    <h2>Food Item</h2>
    <input type="text" v-model="food">

    <br>
    <h2>Your age? </h2>
    <input type="text" v-model="age">

    <button @click="flash('Yes!','I have got it')">Click me for flash</button>



  </main>
</template>

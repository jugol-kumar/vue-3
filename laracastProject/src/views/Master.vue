<script setup>
import MainParent from '../components/MainParent.vue'
import { mydata } from "../stores/firstStores.js";
// import {provide, ref} from "vue"
//
//   let mydata = ref("Hello prvider and injector")
//
// provide("mydate", mydata)
//
// setTimeout(() =>{
//   mydata.value = "Please Change this ref value";
// }, 2000)




</script>

<template>

  <button @click="mydata.name = 'This is my name'">Click me for change</button>

  <MainParent/>
</template>




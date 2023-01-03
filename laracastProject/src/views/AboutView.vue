<script setup>
import {useFlash} from "@/composables/useFlash";

let {flash} = useFlash();

</script>




<template>
  <div class="about">
    <h1>This is an about page</h1>


    <button @click="flash('Ok!','im info', 'info')">Click me for flash</button>


  </div>
</template>

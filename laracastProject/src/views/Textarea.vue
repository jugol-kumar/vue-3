<script setup>
  import TabableTextara from "@/components/TabableTextara.vue"
  import {ref} from "vue";
  let comment = ref("this is for test");

  setTimeout(()=>{
    comment.value = "yes this is changed";
  }, 2000)
</script>

<template>
  <div class="greetings">
    <TabableTextara v-model="comment" style="width: 100%; height: 300px"/>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>

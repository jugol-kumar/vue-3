<script setup>
  function onTabPress(e){
    // if(e.keyCode === 9){
    // e.preventDefault();
    // }
    // let t = e.target

    let val = e.target.value,
        start = e.target.selectionStart,
        end = e.target.selectionEnd;

    e.target.value = val.substring(0, start) + "\t" + val.substring(end);
    e.target.selectionStart = e.target.selectionEnd = start + 1;
  }
  defineProps({
    modelValue: String
  })
  let emit = defineEmits(["update:modelValue"])

</script>



<template>
  <textarea
      @keydown.tab.prevent="onTabPress"
      @keyup="emit('update:modelValue', $event.target.value)"
      v-text="modelValue"/>
</template>
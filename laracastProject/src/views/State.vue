<script setup>
import { useCounterState } from "../stores/CounterState";
let counter = useCounterState();

</script>

<template>
  <h1>This is Stage Page</h1>

  <hr>
  <h1>{{ counter.count }}</h1>
  <button
      :disabled="!counter.remaning"
      @click="counter.increments()">Increment {{ counter.remaning }}</button>
</template>


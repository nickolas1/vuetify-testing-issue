<script setup lang="ts">
import { ref } from 'vue';

const selection = ref('yes');
const items = ["yes", "no", "maybe"]
</script>

<template>
        <v-select v-model="selection" :items="items" label="Select Label" class="wide-enough"> </v-select>
</template>

<style>
.wide-enough {
    width: 150px;
}
</style>

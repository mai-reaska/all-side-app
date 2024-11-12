<template>
  <div class="about">
    <div>
      <h1>Departmnet </h1>
      <div>
        <img :src="vila" alt="">
      </div>
      <div>
        <img :src="daly" alt="">
      </div>
      <div>
        <img :src="cheyear" alt="">
      </div>
    </div>
  </div>
</template>
<script setup>
import vila from "@/assets/images/staff/vila.jpg"
import daly from "@/assets/images/staff/daly.jpg"
import cheyear from "@/assets/images/staff/cheyear.jpg"
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

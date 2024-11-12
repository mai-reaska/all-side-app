<template>
  <div>
    <header class="flex justify-between m-auto container">
      <div class="flex">
        <img :src="logo" alt="ite logo" class="w-36" />
        <img :src="dse_logo" alt="ite logo" class="w-36" />
      </div>
      <nav class="flex mt-14 font-medium">
        <ul class="flex text-2xl ml-10">
          <li class="pr-4">Home</li>
          <li class="pr-4">About us</li>
          <li class="pr-4">Service</li>
        </ul>
      </nav>
    </header>
  </div>
</template>
<script setup>
import logo from '@/assets/logo/logo.png'
import dse_logo from '@/assets/logo/DSE-logo.png'
</script>

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
          <RouterLink to="/about">
            <li class="pr-4">About us</li>
          </RouterLink>
          <li class="pr-4">Service</li>
          <li class="pr-4">Even and News</li>
          <li class="pr-4">Project</li>
        </ul>
      </nav>
    </header>
    <RouterView>
      
    </RouterView>
  </div>
</template>
<script setup>
import logo from '@/assets/logo/logo.png'
import dse_logo from '@/assets/logo/DSE-logo.png'
import { RouterView } from 'vue-router';
</script>

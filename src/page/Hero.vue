<template>
    <div class="flex justify-between m-auto container">
        <div class="max-w-2xl my-10">
            <h2 class="text-3xl font-semibold my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h2>
            <h3 class="text-2xl font-semibold">autem rerum veniam similique saepe est.</h3>
            <p class=" mt-5 font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quibusdam aperiam sunt earum
                quos natus at magnam pariatur eius! At doloribus nemo eius laudantium culpa mollitia
                repellat, cupiditate harum eaque.
            </p>
            <button class="mt-5 btn bg-slate-500 text-white py-2 px-4 text-xl">join now</button>
        </div>
        <img :src="poster" alt="" />
    </div>
</template>
<script setup>
import poster from '@/assets/images/poster.png'
</script>

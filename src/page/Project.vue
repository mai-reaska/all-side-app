<template>
    <div>
        <h2 class=" text-center text-2xl font-semibold my-4">គម្រោងយើងមាន</h2>
        <div class="img flex justify-between">
            <div>
                <img :src="ihub" alt="">
            </div>
            <div>
                <img :src="nicc" alt="">
            </div>
            <div>
                <img :src="ihub" alt="">
            </div>
            <div>
                <img :src="nicc" alt="">
            </div>
        </div>
    </div>
</template>
<script setup>
import nicc from "@/assets/images/nicc.jpg"
import ihub from "@/assets/images/ihub.jpg"
</script>
<style>
.img img {
    width: 200px;
    height: auto;
}
</style>
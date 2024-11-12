<template>
    <div class=" container m-auto">
        <HomeLayout> </HomeLayout>
        <Hero />
        <Mission class="flex justify-around" />
        <Project />
    </div>
</template>
<script setup>
import Project from '@/page/Project.vue'
import Mission from '@/page/Mission.vue'
import Hero from '@/page/Hero.vue'
import HomeLayout from '@/layout/HomeLayout.vue'
</script>

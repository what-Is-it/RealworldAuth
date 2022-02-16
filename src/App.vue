<template>
    <div class="header">
        <app-topbar />
    </div>
    <router-view />
</template>


<script>
import AppTopbar from '@/components/Topbar'
export default {
    name: 'App',
    components: {
        AppTopbar
    },
    mounted() {
        this.$store.dispatch('getCurrentUser')
    }
}
</script>
<style>
</style>

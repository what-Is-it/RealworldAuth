<template>
    <main class="home-page">
        <div>
            <div v-if="isLoggedIn" class="container">
                <div class="banner">Hello, {{ currentUser.username }}</div>
            </div>
            <div v-else class="container">
                <div class="banner">Please, Sing In</div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: 'AppGlobalFeed',
    computed: {
        isLoggedIn() {
            return this.$store.getters.isLoggedIn
        },
        currentUser() {
            return this.$store.getters.currentUser
        },
    },
}
</script>

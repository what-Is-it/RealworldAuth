<template>
    <header>
        <nav class="navigation">
            <router-link class="navigation__logo" :to="{name: 'GlobalFeed'}"
                >MediumAuth</router-link
            >
            <ul class="navigation__list">
                <li class="navigation__link">
                    <router-link
                        class="link"
                        :to="{name: 'GlobalFeed'}"
                        active-class="active"
                        exact
                        >Home</router-link
                    >
                </li>
                <template v-if="isLoggedIn">
                    <li class="navigation__link">
                        <router-link class="link" :to="{name: 'GlobalFeed'}">
                            <i class="ion-compose"></i>&nbsp;New Article
                        </router-link>
                    </li>
                    <li class="navigation__link">
                        <router-link class="link" :to="{name: 'GlobalFeed'}">
                            <i class="ion-gear-a"></i>&nbsp;Settings
                        </router-link>
                    </li>
                    <li class="navigation__link">
                        <router-link
                            class="link user-info"
                            :to="{
                                name: 'GlobalFeed',
                                params: {c_user: currentUser.username},
                            }"
                        >
                            <img
                                class="user-pic"
                                src="https://dummyimage.com/100x100/adq/fre"
                                alt="userPicture"
                            />
                            &nbsp;
                            {{ currentUser.username }}
                        </router-link>
                    </li>
                </template>
                <template v-if="isAnonymous">
                    <li class="navigation__link">
                        <router-link
                            class="link"
                            :to="{name: 'Login'}"
                            active-class="active"
                            >Sign In</router-link
                        >
                    </li>
                    <li class="navigation__link">
                        <router-link
                            class="link"
                            active-class="active"
                            :to="{name: 'Register'}"
                            >Sign Up</router-link
                        >
                    </li>
                </template>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'AppTopbar',
    computed: {
        currentUser() {
            return this.$store.getters.currentUser
        },
        isLoggedIn() {
            return this.$store.getters.isLoggedIn
        },
        isAnonymous() {
            return this.$store.getters.isAnonymous
        },
    },
}
</script>

<style lang="css" scoped>
.nav {
    display: flex;
    flex-direction: row;
}
</style>

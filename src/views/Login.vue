<template>
    <div class="auth-page">
        <div class="container">
            <div class="page">
                <h1 class="text-center">Sign In</h1>
                <p class="text-center">
                    <router-link class="sign-link" :to="{name: 'Register'}">Need an account?</router-link>
                </p>
                <app-validation-errors
                    v-if="validationErrors"
                    :validationErrors="validationErrors"
                />
                <form @submit.prevent="onSubmit">
                    <fieldset class="form-group">
                        <input
                            type="email"
                            class="form-control"
                            placeholder="Email"
                            v-model="email"
                        />
                    </fieldset>
                    <fieldset class="form-group">
                        <input
                            type="password"
                            class="form-control"
                            placeholder="Password"
                            v-model="password"
                        />
                    </fieldset>
                    <div class="form-button">
                        <button :disabled="isSubmitting">Sign In</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import AppValidationErrors from '@/components/ValidationErrors'
export default {
    name: 'AppLogin',
    components: {
        AppValidationErrors
    },
    data() {
        return {
            email: '',
            password: ''
        }
    },
    computed: {
        isSubmitting() {
            return this.$store.state.auth.isSubmitting
        },
        validationErrors() {
            return this.$store.state.auth.validationErrors
        }
    },
    methods: {
        onSubmit() {
            this.$store
                .dispatch('login', {
                    email: this.email,
                    password: this.password
                })
                .then(() => {
                    this.$router.push({name: 'GlobalFeed'})
                })
        }
    }
}
</script>

<style lang="scss" scoped></style>

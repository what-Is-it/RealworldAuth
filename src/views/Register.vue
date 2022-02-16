<template>
    <div class="auth-page">
        <div class="container">
            <div class="page">
                <h1 class="text-center">Sign Up</h1>
                <p class="text-center">
                    <router-link class="sign-link" :to="{name: 'GlobalFeed'}"
                        >Have an account?</router-link
                    >
                </p>
                <app-validation-errors
                    v-if="validationErrors"
                    :validationErrors="validationErrors"
                />
                <form @submit.prevent="onSubmit">
                    <fieldset class="form-group">
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Username"
                            v-model="username"
                        />
                    </fieldset>
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
                        <button :disabled="isSubmitting">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import AppValidationErrors from '@/components/ValidationErrors'
export default {
    name: 'AppRegister',
    components: {
        AppValidationErrors,
    },
    data() {
        return {
            email: '',
            password: '',
            username: '',
        }
    },
    computed: {
        isSubmitting() {
            return this.$store.state.auth.isSubmitting
        },
        validationErrors() {
            return this.$store.state.auth.validationErrors
        },
    },
    methods: {
        onSubmit() {
            console.log('submitted form')
            this.$store
                .dispatch('register', {
                    email: this.email,
                    username: this.username,
                    password: this.password,
                })
                .then((user) => {
                    console.log('successfully register user', user)
                    this.$router.push({name: 'GlobalFeed'})
                })
        },
    },
}
</script>

<style lang="scss" scoped></style>

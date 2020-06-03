<template>
    <v-card class="text-center b-register-no-borders">
        <v-card-title class="py-6">
            <h2 class="font-weight-bold display-1">
                Create an account
            </h2>
        </v-card-title>
        <v-card-text>
            <v-form>
                <v-text-field
                    v-model="nick"
                    :rules="[rules.required]"
                    label="Name/Nick"
                    required />
                <v-text-field
                    v-model="email"
                    :rules="[rules.required, rules.emailFormat]"
                    label="Email"
                    required />
                <v-text-field
                    v-model="emailConfirm"
                    :rules="[rules.required, rules.emailFormat]"
                    label="Confirm email"
                    required />
                <v-text-field
                    v-model="password"
                    :append-icon="show1 ? 'visibility' : 'visibility_off'"
                    :rules="[rules.required, rules.min]"
                    :type="show1 ? 'text' : 'password'"
                    name="input - 10 - 1"
                    label="Password"
                    hint="At least 8 characters"
                    counter
                    @click:append="show1 = !show1"
                ></v-text-field>
                <v-btn>Register</v-btn>
            </v-form>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: 'RegisterColumn',
    data: () => ({
        nick: '',
        email: '',
        emailConfirm: '',
        password: '',
        show1: false,
        rules: {
            required: value => !!value || 'Required.',
            min: v => v.length >= 8 || 'Min 8 characters',
            emailFormat: v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        },
    }),
}
</script>

<style>
    .b-register-no-borders {
        box-shadow: none;
    }
</style>
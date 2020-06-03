<template>
    <v-card class="text-center b-login-no-borders">
        <v-card-title class="py-6">
            <h2 class="font-weight-bold display-1">
                Sign-In
            </h2>
        </v-card-title>
        <v-card-text>
            <v-form>
                <v-text-field
                    v-model="email"
                    :rules="rules.emailRules"
                    label="Email"
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
                <v-checkbox v-model="keepSigned" :label="keepSignedLabel"></v-checkbox>
                <v-btn>Sign-In</v-btn>
            </v-form>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: 'LoginColumn',
    data: () => ({
        email: '',
        password: '',
        show1: false,
        keepSigned: false,
        keepSignedLabel: 'Keep me signed in',
        rules: {
            required: value => !!value || 'Required.',
            min: v => v.length >= 8 || 'Min 8 characters',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
        },
    }),
}
</script>

<style>
    .b-login-no-borders {
        box-shadow: none;
    }
</style>
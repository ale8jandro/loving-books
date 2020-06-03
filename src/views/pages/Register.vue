<template>
    <v-container>
        <v-row class="text-center display-1">
            <v-col>
                Loving Books
            </v-col>
        </v-row>
        <v-card>
            <v-row>
                <v-col cols="6" class="pa-6">
                    <LoginColumn />
                </v-col>
                <v-col cols="6" class="pa-6 b-register-divider">
                    <RegisterColumn />
                </v-col>
            </v-row>
        </v-card>
        <v-row class="text-center caption">
            <v-col>
                By signing in, you agree to Loving Books's Conditions of Use and Privacy Policy.
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import RegisterColumn from '@/components/RegisterColumn';
import LoginColumn from '@/components/LoginColumn';

export default {
    name: 'Register',
    components: {
        LoginColumn,
        RegisterColumn,
    },
}
</script>

<style>
    .b-register-divider {
        border-left: 1px solid black;
    }
</style>
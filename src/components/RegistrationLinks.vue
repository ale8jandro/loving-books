<template>
    <div class="body-2">
        <router-link to="register" class="monoColor05--text font-regular b-reg-links-text-decoration">
            <span class="font-weight-bold"><v-icon small class="mr-1">person</v-icon>Iniciar sesión</span>
            /
            <span>Registrarse</span>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'RegistrationLinks',
}
</script>

<style>
    .b-reg-links-text-decoration {
        text-decoration: none;
    }
</style>
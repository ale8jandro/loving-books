<template>
  <v-app-bar app>
      <v-app-bar-nav-icon @click="openNavigationDrawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link to="/" class="monoColor05--text b-navigation-bar-title">Loving Books</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <SearchBox />
      <v-spacer></v-spacer>
      <RegistrationLinks />
  </v-app-bar>
</template>

<script>
import { mapMutations } from 'vuex';
import SearchBox from '@/components/SearchBox';
import RegistrationLinks from '@/components/RegistrationLinks';

export default {
    name: 'NavigationBar',
    components: {
      SearchBox,
      RegistrationLinks,
    },
    methods: {
      ...mapMutations('common_modules', ['toggleNavigationDrawer']),
      openNavigationDrawer() {
        this.toggleNavigationDrawer();
      },
      goToHome() {
        this.$router.push('/');
      },
    },
}
</script>

<style>
.b-navigation-bar-title {
  cursor: pointer;
  text-decoration: none;
}
</style>
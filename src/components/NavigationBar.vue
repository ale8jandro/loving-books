<template>
  <v-app-bar app>
      <v-app-bar-nav-icon @click="onChange"></v-app-bar-nav-icon>
      <v-toolbar-title @click="goToHome" class="b-navigation-bar-hover">Loving Books</v-toolbar-title>
      <v-spacer></v-spacer>
      <SearchBox />
      <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script>
import { mapMutations } from 'vuex';
import SearchBox from '@/components/SearchBox';

export default {
    name: 'NavigationBar',
    components: {
      SearchBox,
    },
    methods: {
      ...mapMutations('common_modules', ['toggleNavigationDrawer']),
      onChange() {
        this.toggleNavigationDrawer();
      },
      goToHome() {
        this.$router.push('/');
      },
    },
}
</script>

<style>
.b-navigation-bar-hover {
  cursor: pointer;
}
</style>
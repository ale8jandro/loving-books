<template>
  <v-app-bar app>
      <v-app-bar-nav-icon @click="onChange"></v-app-bar-nav-icon>

      <v-toolbar-title>Loving Books</v-toolbar-title>
      <v-spacer></v-spacer>

      <SearchBox />
  </v-app-bar>
</template>

<script>
import  { mapMutations } from 'vuex';
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
    },
}
</script>
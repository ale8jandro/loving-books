<template>
  <v-app>
    <NavigationBar />
    <NavigationDrawer />
    <v-content>
      <v-container>
        <router-view/>
      </v-container>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import NavigationBar from '@/components/NavigationBar';
import NavigationDrawer from '@/components/NavigationDrawer';
import Footer from '@/components/Footer';

export default {
  name: 'App',

  components: {
    NavigationBar,
    NavigationDrawer,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>

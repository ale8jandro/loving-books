<template>
    <v-navigation-drawer
      :value="navigationDrawer"
      v-on:input="onChange"
      temporary app>
      <v-list dense>
        <div v-for="(element, index) in navigation_drawer_configuration" :key="index">
          <v-list-item v-if="!element.expandable">
            
            <v-list-item-icon>
              <v-icon>{{ element.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <router-link :to="element.link" class="monoColor05--text font-regular b-nav-draw-text-decoration">{{ element.title }}</router-link>
            </v-list-item-title>
          </v-list-item>

          <v-list-group v-else :prepend-icon="element.icon" class="monoColor05--text">
            <template v-slot:activator>
              <v-list-item-title class="monoColor05--text b-nav-draw-text-decoration">{{ element.title }}</v-list-item-title>
            </template>
            <v-list-group no-action sub-group v-for="(itemElement, indexCategory) in element.items" :key="indexCategory" class="monoColor05--text">
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title class="monoColor05--text b-nav-draw-text-decoration">{{ itemElement.category }}</v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item v-for="(itemCategory, indexCategoryItems) in itemElement.items" :key="indexCategoryItems">
                <router-link :to="itemCategory.link" class="monoColor05--text b-nav-draw-text-decoration"><v-list-item-title v-text="itemCategory.title"></v-list-item-title></router-link>
                <v-list-item-icon>
                  <v-icon v-text="itemCategory.icon"></v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>
          </v-list-group>

          <v-divider></v-divider>
        </div>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import navigation_drawer_conf from './configuration/navigation_drawer_conf.json';
export default {
    name: 'NavigationDrawer',
    computed: {
        ...mapState('common_modules', ['navigationDrawer']),
    },
    methods: {
        ...mapMutations('common_modules', ['setNavigationDrawer']),
        onChange(event) {
            this.setNavigationDrawer(event);
        },
    },
    data() {
      return {
        navigation_drawer_configuration: navigation_drawer_conf,
      };
    },
}
</script>

<style>
  .b-nav-draw-text-decoration {
    text-decoration: none;
  }
</style>
<template>
    <v-footer padless>
        <v-row justify="center" no-gutters>
            <v-btn v-for="(link, index) in links" :key="index"
              text
              rounded
              class="my-2" :to="link.link">
                {{ link.name }}
            </v-btn>
            <v-col class="py-4 text-center" cols="12">
                {{ new Date().getFullYear() }} — <strong>Loving Books</strong>
            </v-col>
        </v-row>
    </v-footer>
</template>

<script>
import footer_data from '@/data/footer.json';

export default {
  name: 'Footer',
  data: () => ({
    links: [],
  }),
  created() {
    this.links = footer_data;
  },
}
</script>
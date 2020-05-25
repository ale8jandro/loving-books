<template>
    <div>
        <v-card
          max-width="150"
          elevation="4"
          class="mx-auto">
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="headline">{{ book.bookTitle }}</v-list-item-title>
                    <v-list-item-subtitle>by {{ book.autor }}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-img
              :src="book.image"
              max-height="100">
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn icon dark>
                        <v-icon>list</v-icon>
                    </v-btn>
                    <v-btn icon dark>
                        <v-icon>rss_feed</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-img>

            <v-card-text>
                {{ book.description }}
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
export default {
    name: 'BookMiniature',
    props: {
        book: {
            type: Object,
        },
    },
}
</script>
<template>
    <v-card shaped elevation="7" raised class="mb-8">
        <v-container>
            <v-card-title class="headline"><v-icon color="primary">chevron_right</v-icon>{{ carouselInformation.title }}</v-card-title>
            <v-card-subtitle>{{ carouselInformation.description }}</v-card-subtitle>
            <v-row>
                <v-col xs6 sm4 v-for="(book, index) in contentBooks" :key="index" >
                    <BookMiniature :book="book"/>
                </v-col>
            </v-row>
        </v-container>
        <v-card-actions>
            <v-btn text>{{ carouselInformation.see_more }}</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import BookMiniature from '@/components/BookMiniature';
export default {
    name: 'MiniaturesCarousel',
    components: {
        BookMiniature,
    },
    props: {
        carouselInformation: {
            type: Object,
        },
        contentBooks: {
            type: Array,
        },
    },
}
</script>
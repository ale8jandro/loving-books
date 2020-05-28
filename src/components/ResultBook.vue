<template>
    <v-container>
        <v-row>
            <v-col cols="auto">
                <v-img :src="book.image" aspect-ratio="0.7" width="80"></v-img>
            </v-col>
            <v-col>
                <v-row class="title"><router-link :to="{path: 'book', query: {id: book.id}}">{{ book.name }}</router-link> ({{ book.year }})</v-row>
                <v-row><v-icon small color="primary">star</v-icon>{{ book.rate }} - {{ book.ratings }} <v-icon small color="primary" class="ml-1">thumbs_up_down</v-icon></v-row>
                <v-row class="monoColor01 body-2">{{ book.description }}</v-row>
            </v-col>
        </v-row>
        <v-divider></v-divider>
    </v-container>
</template>

<script>
export default {
    name: 'ResultBook',
    props: {
        book: {
            type: Object,
        },
    },
}
</script>
<template>
    <v-container>
        <v-row>
            <v-col cols="auto">
                <v-img :src="authorWork.image" aspect-ratio="0.7" width="80"></v-img>
            </v-col>
            <v-col>
                <v-row class="title"><router-link :to="{path: 'book', query: {id: authorWork.id}}">{{ authorWork.name }}</router-link> ({{ authorWork.year }})</v-row>
                <v-row><v-icon small color="primary">star</v-icon>{{ authorWork.rate }} - {{ authorWork.ratings }} <v-icon small color="primary" class="ml-1">thumbs_up_down</v-icon></v-row>
                <v-row class="monoColor01 body-2">{{ authorWork.description }}</v-row>
            </v-col>
        </v-row>
        <v-divider></v-divider>
    </v-container>
</template>

<script>
export default {
    name: 'BookInAuthor',
    props: {
        authorWork: {
            type: Object,
        },
    },
}
</script>
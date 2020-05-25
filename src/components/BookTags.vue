<template>
    <v-container>
        <v-row v-for="(tag, index) in bookTags" :key="index" :no-gutters="tag.subitems">
            <v-col cols="2">
                {{ tag.category }}
            </v-col>
            <v-col cols="10" v-if="tag.subitems">
                <v-chip label @click="goToResults" class="mr-5" v-for="(value, indexValue) in tag.value" :key="indexValue">{{ value }}</v-chip>
            </v-col>
            <v-col cols="10" v-else>
                {{ tag.value }}
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import book_tags_data from '@/data/book_tags.json'

export default {
    name: 'BookTags',
    props: {
        id: {
            type: String,
        },
    },
    data: () => ({
        bookTags: [],
    }),
    methods: {
        goToResults() {

        },
    },
    created() {
        this.bookTags = book_tags_data;
    },
}
</script>
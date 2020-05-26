<template>
    <v-container>
        <v-row>
            <v-col cols="2">
                <v-row no-gutters><v-icon color="primary">chevron_right</v-icon>Work</v-row>
                <v-row no-gutters><v-icon color="primary">chevron_right</v-icon>Order by</v-row>
                <v-radio-group v-model="orderBy">
                    <v-radio :key="1" label="Name" :value="'name'"></v-radio>
                    <v-radio :key="2" label="Year" :value="'year'"></v-radio>
                    <v-radio :key="3" label="Rate" :value="'rate'"></v-radio>
                </v-radio-group>
            </v-col>
            <v-col cols="10">
                <BookInAuthor v-for="(author_work, index) in authorWorkData" :key="index" :authorWork="author_work"/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import BookInAuthor from '@/components/BookInAuthor';

import author_work_data from '@/data/author_work.json';

export default {
    name: 'AuthorWork',
    components: {
        BookInAuthor,
    },
    data: () => ({
        authorWorkData: [],
        orderBy: 'name',
    }),
    watch: {
        orderBy(newValue) {
            console.log(newValue);
        },
    },
    created() {
        this.authorWorkData = author_work_data;
    },
}
</script>
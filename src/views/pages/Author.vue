<template>
    <v-container>
        <v-row>
            <v-col cols="9">
                <v-card>
                    <AuthorHeader :id="id" />
                    <v-divider></v-divider>
                    <Tags :tags="authorTagsData"/>
                    <v-divider></v-divider>
                    <AuthorWork :id="id" />
                    <v-divider></v-divider>
                    <FriendsRating :id="id" />
                </v-card>
            </v-col>
            <v-col cols="3">
                <v-card>
                    <AuthorSidebar :id="id" />
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import AuthorHeader from '@/components/AuthorHeader';
import AuthorSidebar from '@/components/AuthorSidebar';
import Tags from '@/components/Tags';
import AuthorWork from '@/components/AuthorWork';
import FriendsRating from '@/components/FriendsRating';

import author_tags_data from '@/data/author_tags.json';

export default {
    name: 'Author',
    data: () => ({
        id: '',
        authorTagsData: [],
    }),
    components: {
        AuthorHeader,
        Tags,
        AuthorWork,
        AuthorSidebar,
        FriendsRating,
    },
    created() {
        this.authorTagsData = author_tags_data;
    },
    watch: {
        '$route.query.id': {
            immediate: true,
            handler(newValue, oldValue) {
                this.id = newValue;
            },
        },
    },
}
</script>
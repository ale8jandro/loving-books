<template>
    <v-container>
        <v-row>
            <v-col cols="9">
                <v-card>
                    <BookHeader :id="id" />
                    <v-divider />
                    <Tags :tags="bookTagsData"/>
                    <v-divider />
                    <ProReviews :id="id" />
                    <v-divider />
                    <BookAwards :id="id" />
                    <v-divider />
                    <ReviewForm :id="id" />
                    <v-divider />
                    <FriendsRating :id="id" />
                </v-card>
            </v-col>
            <v-col cols="3">
                <v-card>
                    <BookSidebar :id="id" />
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import BookHeader from '@/components/BookHeader';
import Tags from '@/components/Tags';
import ProReviews from '@/components/ProReviews';
import BookAwards from '@/components/BookAwards';
import ReviewForm from '@/components/ReviewForm';
import FriendsRating from '@/components/FriendsRating';
import BookSidebar from '@/components/BookSidebar';

import book_tags_data from '@/data/book_tags.json';

export default {
    name: 'Book',
    data: () => ({
        id: 0,
        bookTagsData: [],
    }),
    components: {
        BookHeader,
        Tags,
        ProReviews,
        BookAwards,
        ReviewForm,
        FriendsRating,
        BookSidebar,
    },
    watch: {
        '$route.query.id': {
            immediate: true,
            handler(newValue, oldValue) {
                this.id = newValue;
            },
        },
    },
    created() {
        this.bookTagsData = book_tags_data;
    },
}
</script>
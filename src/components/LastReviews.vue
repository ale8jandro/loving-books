<template>
    <v-card outlined>
        <v-card-title>Last reviews</v-card-title>
        <v-card-text class="pb-0">
            <v-carousel
                :show-arrows="false"
                :light="true"
                cycle
                hide-delimiters
                height="auto">
                <v-carousel-item
                    v-for="(review, index) in lastReviews"
                    :key="index">
                    <v-row no-gutters>
                        <v-card class="mx-auto">
                            <div class="caption">{{ review.review }}</div>
                            <v-list two-line>
                                <v-list-item>
                                    <v-list-item-content>
                                        <v-list-item-title class="subtitle-1">{{ review.title }}</v-list-item-title>
                                        <v-list-item-subtitle class="font-italic">{{ review.user }}</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list>
                        </v-card>
                    </v-row>
                </v-carousel-item>
            </v-carousel>
        </v-card-text>
        <v-card-actions class="pt-0">
            <v-spacer></v-spacer>
            <v-btn text>
                See all reviews
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import last_reviews_data from '@/data/last_reviews.json';

export default {
    name: 'LastReviews',
    props: {
        id: {
            type: Number,
        },
    },
    data: () => ({
        lastReviews: [],
    }),
    created() {
        this.lastReviews = last_reviews_data;
    },
}
</script>
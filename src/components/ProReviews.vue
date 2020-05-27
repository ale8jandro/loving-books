<template>
    <v-container v-if="showModule">
        <v-row>
            <v-col cols="2">
                <v-icon color="primary">chevron_right</v-icon>Pro Reviews
            </v-col>
            <v-col cols="10">
                <v-list two-line class="pa-0">
                    <v-list-item class="pa-0" v-for="(review, index) in proReviews" :key="index">
                        <v-list-item-content class="pa-0">
                            <v-list-item-title>
                                {{ review.name }} <span class="font-italic">from {{ review.source }}</span>
                            </v-list-item-title>
                            <v-rating :value="review.rate" background-color="red lighten-3" color="red" dense small readonly></v-rating>
                            <v-list-item-subtitle>{{ review.review }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-divider></v-divider>
                </v-list>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import pro_reviews_data from '@/data/pro_reviews.json';

export default {
    name: 'ProReviews',
    props: {
        id: {
            type: Number,
        },
    },
    data: () => ({
        proReviews: [],
        showModule: true,
    }),
    created() {
        this.proReviews = pro_reviews_data;
        this.showModule = this.proReviews.length > 0;
    },
}
</script>
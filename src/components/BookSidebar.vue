<template>
    <v-container>
        <Average :id="id" />
        <v-row>
            <v-col>
                <RateGraphics :id="id" />
            </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row class="align-center">
            <v-col>
                <RateElement :id="id" />
            </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row class="text--secondary text-center">
            <v-col>
                View all the 23.456 reviews
            </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row class="text--secondary text-center">
            <v-col>
                <router-link to="lists" class="monoColor05--text font-regular b-book-side-text-decoration">Add to list</router-link>
            </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row>
            <v-col>
                <LastReviews :id="id" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Average from '@/components/Average';
import RateElement from '@/components/RateElement';
import LastReviews from '@/components/LastReviews';
import RateGraphics from '@/components/RateGraphics';

export default {
    name: 'BookSidebar',
    props: {
        id: {
            type: Number,
        },
    },
    components: {
        Average,
        RateElement,
        LastReviews,
        RateGraphics,
    },
}
</script>

<style>
    .b-book-side-text-decoration {
        text-decoration: none;
    }
</style>
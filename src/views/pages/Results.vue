<template>
    <v-container>
        <v-row>
            <v-col cols="9">
                <ResultCard :search="search" :orderBy="orderBy" />
            </v-col>
            <v-col cols="3">
                <ResultSidebar />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import ResultCard from '@/components/ResultCard';
import ResultSidebar from '@/components/ResultSidebar';

export default {
    name: 'Results',
    data: () => ({
        search: '',
        orderBy: 'year',
    }),
    components: {
        ResultCard,
        ResultSidebar,
    },
    watch: {
        '$route.query.search': {
            immediate: true,
            handler(newValue, oldValue) {
                this.search = newValue;
            },
        },
        '$route.query.orderBy': {
            immediate: true,
            handler(newValue, oldValue) {
                this.orderBy = newValue || 'year';
            },
        },
    },
}
</script>
<template>
    <v-card>
        <v-card-title class="py-6">
            <h1 class="font-weight-bold display-1">
                Results to '{{ search }}'
            </h1>
        </v-card-title>
        <v-tabs v-model="tab">
            <v-tab v-for="(result, index) in results" :key="index">
                {{ result.title }}
            </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
            <v-tab-item v-for="(result, index) in results" :key="index">
                <ResultElements :results="result.results" />
            </v-tab-item>
        </v-tabs-items>
    </v-card>
</template>

<script>
import ResultElements from '@/components/ResultElements';

import name_results_data from '@/data/name_results.json';
import author_results_data from '@/data/author_results.json';

const items = ['Name', 'Author'];

export default {
    name: 'ResultCard',
    components: {
        ResultElements,
    },
    data: () => ({
        tab: null,
        text: 'asdf',
        results: [],
    }),
    props: {
        search: {
            type: String,
        },
    },
    created() {
        const nameResultsObject = {
            title: items[0],
            results: name_results_data,
        };
        const authorResultsObject = {
            title: items[1],
            results: author_results_data,
        };
        this.results.push(nameResultsObject, authorResultsObject);
    },
}
</script>
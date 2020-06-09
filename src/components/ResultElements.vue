<template>
    <div>
        <EmptyResults v-if="results.length === 0" />
        <BookItem v-for="(result, index) in results" :key="index" :book="result"/>
        <div class="text-center">
            <v-pagination
                v-model="page"
                :length="paginationLength"
                :total-visible="7" />
        </div>
    </div>
</template>

<script>
import BookItem from '@/components/BookItem';
import EmptyResults from '@/components/EmptyResults';

const resultsPerPage = 10;

export default {
    name: 'ResultElements',
    components: {
        EmptyResults,
        BookItem,
    },
    props: {
        results: {
            type: Array,
        },
    },
    data: () => ({
        page: 1,
        paginationLength: 1,
    }),
    created() {
        this.paginationLength = Math.ceil(this.results.length / resultsPerPage) || 1;
    },
}
</script>
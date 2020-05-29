<template>
    <v-card>
        <v-card-title>Advanced Search</v-card-title>
        <v-card-text>
            <v-text-field
                v-model="search"
                clearable
                :label="searchLabel"
                type="text"
                append-icon="search"
                @click:append="searchResults"
                @keyup.enter="searchResults"
                    />
            <v-icon color="primary">chevron_right</v-icon>Search by
            <v-radio-group v-model="searchBy">
                <v-radio :key="1" label="Title" :value="'title'"></v-radio>
                <v-radio :key="2" label="Genre" :value="'genre'"></v-radio>
                <v-radio :key="3" label="Author" :value="'author'"></v-radio>
            </v-radio-group>
            <v-icon color="primary">chevron_right</v-icon>Order by
            <v-radio-group v-model="orderBy">
                <v-radio :key="1" label="Year" :value="'year'"></v-radio>
                <v-radio :key="2" label="Title" :value="'title'"></v-radio>
                <v-radio :key="3" label="Author" :value="'author'"></v-radio>
                <v-radio :key="4" label="Rate" :value="'rate'"></v-radio>
            </v-radio-group>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: 'ResultSidebar',
    data: () => ({
        search: '',
        searchLabel: 'Type a search',
        searchBy: 'title',
        orderBy: 'year',
    }),
    methods: {
        searchResults() {
            this.$router.push({
                path: 'results',
                query: {
                    search: this.search,
                    orderBy: this.orderBy,
                    searchBy: this.searchBy,
                },
            });
            this.search = '';
        },
    },
}
</script>
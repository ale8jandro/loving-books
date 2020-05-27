<template>
    <v-form class="mt-7 b-search-box-size">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <v-text-field
                        v-model="search"
                        solo
                        clearable
                        :label="searchLabel"
                        type="text"
                        append-icon="search"
                        >
                    </v-text-field>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>

<script>
export default {
    name: 'SearchBox',
    data: () => ({
        search: '',
        searchLabel: 'Type a book to search',
    }),
}
</script>

<style>
    .b-search-box-size {
        width: 600px;
    }
</style>
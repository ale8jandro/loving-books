<template>
    <v-form class="mt-7">
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
    data() {
        return {
            search: '',
            searchLabel: 'Type a book to search',
        };
    },
}
</script>
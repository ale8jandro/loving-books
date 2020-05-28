<template>
    <v-container>
        <v-row>
            <v-col cols="9">
                <ResultCard :search="search"/>
            </v-col>
            <v-col cols="3">
                <v-card>
                    this is the sidebar page
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import ResultCard from '@/components/ResultCard';

export default {
    name: 'Results',
    data: () => ({
        search: '',
    }),
    components: {
        ResultCard,
    },
    watch: {
        '$route.query.search': {
            immediate: true,
            handler(newValue, oldValue) {
                this.search = newValue;
            },
        },
    },
}
</script>
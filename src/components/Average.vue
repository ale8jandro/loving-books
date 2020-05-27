<template>
    <v-row class="text-center">
        <v-col>
            <v-icon x-large color="yellow">star</v-icon>
        </v-col>
        <v-col class="text-right">
            <v-row class="display-2">{{ average }}</v-row>
            <v-row>{{ totalVotesFormated }}</v-row>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'Average',
    props: {
        id: {
            type: Number,
        },
    },
    data: () => ({
        average: 0,
        totalVotes: 0,
    }),
    computed: {
        totalVotesFormated() {
            return this.totalVotes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        },
    },
    created() {
        this.average = 6.3;
        this.totalVotes = 23564;
    },
}
</script>
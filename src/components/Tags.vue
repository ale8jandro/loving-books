<template>
    <v-container>
        <v-row v-for="(tag, index) in tags" :key="index" :no-gutters="tag.subitems">
            <v-col cols="2">
                {{ tag.category }}
            </v-col>
            <v-col cols="10" v-if="tag.subitems">
                <v-chip label @click="goToResults" class="mr-5" v-for="(value, indexValue) in tag.value" :key="indexValue">{{ value }}</v-chip>
            </v-col>
            <v-col cols="10" v-else>
                {{ tag.value }}
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'Tags',
    props: {
        tags: {
            type: Array,
        },
    },
    methods: {
        goToResults() {
        },
    },
}
</script>
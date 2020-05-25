<template>
    <v-container>
        <v-row>
            <v-col cols="9">
                <v-card>
                    <AuthorHeader :id="id" />
                </v-card>
            </v-col>
            <v-col cols="3">
                <v-card>
                    <AuthorSidebar :id="id" />
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import AuthorHeader from '@/components/AuthorHeader';
import AuthorSidebar from '@/components/AuthorSidebar';

export default {
    name: 'Author',
    data: () => ({
        id: '',
    }),
    components: {
        AuthorHeader,
        AuthorSidebar,
    },
    watch: {
        '$route.query.id': {
            immediate: true,
            handler(newValue, oldValue) {
                this.id = newValue;
            },
        },
    },
}
</script>
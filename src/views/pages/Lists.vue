<template>
    <v-container>
        <v-card>
            <BookItem :book="bookData"/>
            <v-container>
                lsitas
            </v-container>
        </v-card>
    </v-container>
</template>

<script>
import BookItem from '@/components/BookItem';

import book_item_data from '@/data/book_item.json';

export default {
    name: 'Lists',
    data: () => ({
        bookData: {},
    }),
    components: {
        BookItem,
    },
    created() {
        this.bookData = book_item_data;
    },
}
</script>
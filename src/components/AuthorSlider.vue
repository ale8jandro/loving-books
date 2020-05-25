<template>
    <v-carousel height="200" hide-delimiter-background cycle>
        <v-carousel-item v-for="(authorGroup, index) in authorsSlider" :key="index">
            <v-row row>
                <v-col xs4 v-for="(author, indexAuthor) in authorGroup.items" :key="indexAuthor" class="text-center">
                    <router-link :to="{path: 'author'}">
                        <v-avatar size="150">
                            <img :src="author.image" :alt="author.name">
                        </v-avatar>
                    </router-link>
                    <p class="mt-5">{{ author.name }} ({{ author.average_rating }})</p>
                </v-col>
            </v-row>
        </v-carousel-item>
    </v-carousel>
</template>

<script>
export default {
    name: 'AuthorSlider',
    props: {
        authorsSlider: {
            type: Array,
        },
    },
}
</script>
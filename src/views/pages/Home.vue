<template>
    <v-container>
        <MiniaturesCarousel v-for="(home_element, index) in homeConfiguration" :key="index" :carouselInformation="home_element" :contentBooks="booksMiniature"/>
        <AuthorSlider :authorsSlider="authorSlider"/>
    </v-container>
</template>

<script>
import MiniaturesCarousel from '@/components/MiniaturesCarousel';
import AuthorSlider from '@/components/AuthorSlider';

import dataBooksMiniature from '../../data/booksMiniature.json';
import dataAuthorSlider from '../../data/author_slider.json';

import home_configuration from './configuration/home_configuration.json';

export default {
    name: 'Home',
    components: {
        MiniaturesCarousel,
        AuthorSlider,
    },
    data() {
        return {
            booksMiniature: [],
            homeConfiguration: [],
            authorSlider: [],
        };
    },
    created() {
        // Do the fetch of the books Miniatures
        this.booksMiniature = dataBooksMiniature;
        this.homeConfiguration = home_configuration;
        this.authorSlider = dataAuthorSlider;
    },
}
</script>
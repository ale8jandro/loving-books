<template>
    <v-sheet>
        <v-sparkline
            :labels="scale"
            :value="rateGraphics"
            :gradient="gradients"
            color="secondary"
            smooth
            label-size="14">
        </v-sparkline>
    </v-sheet>
</template>
<script>
import rate_graphics_date from '@/data/rate_graphics.json';
const gradients = ['#f72047', '#ffd200', '#1feaea'];
const scale = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

export default {
    name: 'RateGraphics',
    props: {
        id: {
            type: Number,
        },
    },
    data: () => ({
        rateGraphics: [],
        scale,
        gradients,
    }),
    created() {
        this.rateGraphics = rate_graphics_date;
    },
}
</script>
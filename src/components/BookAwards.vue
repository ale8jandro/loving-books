<template>
    <v-container class="amber lighten-2 text-center">
        Click <a href="">here</a> to see all the awards and nominations
    </v-container>
</template>

<script>
export default {
    name: 'BookAwards',
    props: {
        id: {
            type: Number,
        },
    },
}
</script>
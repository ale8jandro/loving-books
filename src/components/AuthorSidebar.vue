<template>
    <v-container>
        <Average :id="id" />
        <v-row>
            <v-col>
                <RateGraphics :id="id" />
            </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row class="align-center">
            <v-col>
                <RateElement :id="id" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Average from '@/components/Average';
import RateElement from '@/components/RateElement';
import RateGraphics from '@/components/RateGraphics';

export default {
    name: 'AuthorSidebar',
    props: {
        id: {
            type: String,
        },
    },
    components: {
        Average,
        RateElement,
        RateGraphics,
    },
}
</script>
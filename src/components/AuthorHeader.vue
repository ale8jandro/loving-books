<template>
    <v-container>
        <v-row>
            <v-col cols="2">
                <v-avatar size="120">
                    <img src="https://www.guadanews.es/fotos/121/UNA_NUEVA_HISTORIA_DE_ESPAA_A_ALFAGUARA_PEREZ_REVERTE_GUADANEWS.jpeg" alt="author">
                </v-avatar>
            </v-col>
            <v-col cols="10">
                <v-row>
                    <v-col>
                        <v-container>
                            <v-row class="display-2">Arturo Perez Reverte</v-row>
                            <v-row>
                                <flag iso="es" />
                                <span class="font-italic">from 1986 to today</span>
                            </v-row>
                        </v-container>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'AuthorHeader',
    props: {
        id: {
            type: String,
        },
    },
}
</script>
<template>
    <v-expansion-panels>
        <v-expansion-panel>
            <v-expansion-panel-header>
                <v-row no-gutters>
                    <v-col>Your rate</v-col>
                    <v-col class="text--secondary">
                        <v-fade-transition leave-absolute>
                            <v-row no-gutters class="text-center font-weight-bold">
                                <v-col>{{ rate || 'Not rated' }}</v-col>
                            </v-row>
                        </v-fade-transition>
                    </v-col>
                </v-row>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
                <v-row
                no-gutters class="text-center">
                    <v-col>
                        <v-rating
                            v-model="rate"
                            length="10"
                            dense
                            size="15"
                            color="yellow darken-3"
                            background-color="grey darken-1"
                            hover
                            ></v-rating>
                    </v-col>
                </v-row>
                <v-row class="text-center">
                    <v-col>
                        {{ rateFormated }}
                    </v-col>
                </v-row>
                <div v-if="rate !== null">
                    <v-divider></v-divider>
                    <v-row class="text-center">
                        <v-col>
                            <v-btn text @click="unRateBook">Unread this book</v-btn>
                        </v-col>
                    </v-row>
                </div>
            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>
</template>

<script>
const evaluations = ['Penoso', 'Malo', 'Mediocre', 'Anodino', 'Soportable',
    'Regular', 'Correcto', 'Notable', 'Descollante', 'Excelente', 'Matrícula'];

export default {
    name: 'RateElement',
    props: {
        id: {
            type: String,
        },
    },
    data: () => ({
        rate: 8,
        evaluations,
    }),
    methods: {
        unRateBook() {
            this.rate = null;
        },
    },
    computed: {
        rateFormated() {
            const rateRounded = Math.round(this.rate);
            return this.evaluations[rateRounded || null] || null;
        },
    },
}
</script>
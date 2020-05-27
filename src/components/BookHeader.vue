<template>
    <v-container>
        <v-row>
            <v-col cols="2">
                <v-avatar size="120">
                    <img src="https://edit.org/images/cat/portadas-libros-big-2019101610.jpg" alt="libro">
                </v-avatar>
            </v-col>
            <v-col cols="10">
                <v-row>
                    <v-col>
                        <v-container>
                            <v-row class="display-2">La belleza de mayo</v-row>
                            <v-row>
                                <flag iso="it" />
                                <a href="/author">Pink Floyd</a>
                                1995 - Alfaguara
                            </v-row>
                        </v-container>
                    </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-row>
                    <v-col>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam at odit atque libero nulla, quasi pariatur voluptatem veniam modi eum facilis, accusamus harum. Ab officia quasi tempore veniam assumenda asperiores!
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'BookHeader',
    props: {
        id: {
            type: Number,
        },
    },
}
</script>
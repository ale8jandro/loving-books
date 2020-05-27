<template>
    <v-container>
        <v-row>
            <v-col cols="2">
                <v-icon color="primary">chevron_right</v-icon>Friends Rating
            </v-col>
            <v-col cols="10">
                <v-simple-table fixed-header>
                    <thead>
                        <tr>
                            <th class="text-left subtitle-1 font-weight-bold">User</th>
                            <th class="text-left subtitle-1 font-weight-bold">Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(friend, index) in friendsRating" :key="index">
                            <td>{{ friend.user }}</td>
                            <td>{{ friend.rate }}</td>
                        </tr>
                        <tr>
                            <td class="font-weight-bold">Average rate from your friends</td>
                            <td class="font-weight-bold">{{ averageRate.toFixed(1) }}</td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import friends_rating_data from '@/data/friends_rating.json';

export default {
    name: 'FriendsRating',
    data: () => ({
        friendsRating: [],
        averageRate: 0,
    }),
    props: {
        id: {
            type: Number,
        },
    },
    created() {
        // fetch if the user is logged and if the user has friends rate
        this.friendsRating = friends_rating_data;
        const rates = this.friendsRating.map((a) => a.rate);
        
        this.averageRate = rates.reduce((a, b) => a + b, 0) / rates.length || 0;
        
    },
}
</script>
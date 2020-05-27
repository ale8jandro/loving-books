<template>
    <v-container>
        <v-row>
            <v-col cols="2">
                <v-icon color="primary">chevron_right</v-icon>Your Review
            </v-col>
            <v-col cols="10">
                <v-form
                ref="form"
                lazy-validation>
                    <v-text-field
                    v-model="title"
                    :value="title"
                    :counter="50"
                    :readonly="emptyForm"
                    label="Title"
                    required></v-text-field>

                    <v-textarea
                    v-model="review"
                    :counter="500"
                    label="Your Review"
                    :readonly="emptyForm"
                    required></v-textarea>

                    <v-btn
                    v-if="!emptyForm"
                    color="success"
                    class="mr-4"
                    @click="publishReview">
                        <v-icon left>publish</v-icon>Publish the review
                    </v-btn>

                    <v-btn
                    v-if="emptyForm"
                    color="success"
                    class="mr-4"
                    @click="editReview">
                        <v-icon left>edit</v-icon>Edit the review
                    </v-btn>

                    <v-btn
                    v-if="!emptyForm"
                    color="error"
                    class="mr-4"
                    @click="resetFields">
                        <v-icon left>sync</v-icon>Reset Fields
                    </v-btn>

                    <v-btn
                    v-if="emptyForm"
                    color="error"
                    class="mr-4"
                    @click="deleteReview">
                        <v-icon left>delete_forever</v-icon>Delete the Review
                    </v-btn>
                </v-form>
                <span class="caption">{{ reviewFormData.helpful_rate }} of {{ reviewFormData.total_rate }} people found this review helpful<br></span>
                <span class="caption">creada en {{ createdDate }}, modificada el {{ modifiedDate }}</span>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import review_form_data from '@/data/review_form.json';

export default {
    name: 'ReviewForm',
    data: () => ({
        title: '',
        review: '',
        reviewFormData: {},
        emptyForm: true,
        reviewEditable: false,
        createdDate: '',
        modifiedDate: '',
    }),
    props: {
        id: {
            type: Number,
        },
    },
    methods: {
        resetFields() {
            this.title = '';
            this.review = '';
        },
        publishReview() {},
        editReview() {
            this.reviewEditable = true;
        },
        deleteReview() {},
        formatDate(date) {
            const objectDate = new Date(date);
            return objectDate.toLocaleDateString();
        },
    },
    created() {
        // fetch if the user is logged and if the user has a review
        this.reviewFormData = review_form_data;
        const isEmptyForm = Object.keys(this.reviewFormData).length === 0;
        if (isEmptyForm) {
            this.emptyForm = false;
        } else {
            this.title = this.reviewFormData.title;
            this.review = this.reviewFormData.review;
            this.emptyForm = true;
            this.createdDate = this.formatDate(this.reviewFormData.date_creation);
            this.modifiedDate = this.formatDate(this.reviewFormData.date_last_edition);
        }
    },
}
</script>
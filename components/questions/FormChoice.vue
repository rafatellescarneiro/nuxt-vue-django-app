<template>
  <form class="columns">
    <input id="question-id" v-model="value.id" type="hidden">
    <b-field grouped>
        <b-input
            v-model="value.text"
            placeholder="Enter the choice text"
            type="text"
            icon="tag"
            required
            expanded
        ></b-input>
        <p class="control">
            <b-button type="is-info" icon-left="check" @click="saveChoice">
                Save
            </b-button>
        </p>
    </b-field>
  </form>
</template>

<script>
export default {
    props:{
        value:{
            type: Object,
            required: true
        }
    },
    methods: {
        saveChoice(){
            this.$emit('saveChoice', this.value)
        }
    }
}
</script>

<style>

</style>
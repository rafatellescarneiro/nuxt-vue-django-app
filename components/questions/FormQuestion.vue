<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div class="box column is-10 is-offset-1">
    <form>
        <input id="question-id" v-model="value.id" type="hidden">
        <b-field label="Question">
            <b-input
                v-model="value.text"
                placeholder="Enter the question text"
                type="text"
                icon="tag"
                required
            />
        </b-field>
        <div class="columns">
            <b-field class="column" label="Start date">
                <b-datetimepicker
                    v-model="value.start_date"
                    icon="calendar-arrow-right"
                    required
                />
            </b-field>
            <b-field class="column" label="End date">
                <b-datetimepicker
                    v-model="value.end_date"
                    icon="calendar-arrow-left"
                    required
                />
            </b-field>
        </div>
        <h1 class="subtitle">Choices</h1>
        <form-choice v-model="choice" @saveChoice="saveChoice" />
        <hr />
        <list-choices
            v-model="value.choices"
            @removeChoice="removeChoice"
            @loadChoice="loadChoice"
        />

        <div>
            <b-button type="is-dark" icon-left="redo" @click="reset">
                Cancel
            </b-button>
        </div>
    </form>
  </div>
</template>

<script>
import FormChoice from './FormChoice'
import ListChoices from './ListChoices'
export default {
    components: { FormChoice, ListChoices  },
    props: {
        value: {
            type: Object,
            required: true
        }
    },
    data(){
        return{
            choice: {}
        }
    },
    methods:{
        save(){
            this.$emit('save', this.value)
        },
        reset(){
            this.$emit('reset')
        },
        saveChoice(choice){
            if(choice.edit){
                const objIndex = this.value.choices.findIndex(
                    (obj) => obj.id === choice.id
                )
                // eslint-disable-next-line vue/no-mutating-props
                this.value.choices[objIndex].text = choice.text
            }else{
                // eslint-disable-next-line vue/no-mutating-props
                this.value.choices.push(choice)
            }
            this.choice = {}
        },
        removeChoice(choice){
            const objIndex = this.value.choices.findIndex(
                (obj)=> obj.id === choice.id
            )
            // eslint-disable-next-line vue/no-mutating-props
            this.value.choices.splice(objIndex, 1)
        },
        loadChoice(choice){
            this.choice = {
                id: choice.id,
                text: choice.text,
                edit: true
            }
        }
    }
}
</script>

<style>

</style>
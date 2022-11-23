<template>
  <b-table striped :data="value">
    <template slot-scope="props">
        <b-table-column field="id" label="ID" width="40" sortable numeric>
            {{ props.row.id }}
        </b-table-column>

        <b-table-column field="text" label="Question Text" sortable>
            {{ props.row.text }}
        </b-table-column>

        <b-table-column field="start_date" label="Start" sortable centered>
            {{ new Date(props.row.start_date).toLocaleString() }}
        </b-table-column>

        <b-table-column field="end_date" label="End" width="40" sortable centered>
            {{ new Date(props.row.end_date).toLocaleString() }}
        </b-table-column>

        <b-table-column field="actions" label="Actions">
            <b-button
                type="is-warning"
                icon-left="pencil"
                @lick="loadQuestion(props.row)"
                >
            </b-button>
            <b-button
                type="is-danger"
                icon-left="trash-can-outline"
                @lick="confirmRemove(props.row)"
            >
            </b-button>
        </b-table-column>
    </template>
  </b-table>
</template>

<script>
export default {
    props:{
        value:{
            type: Array,
            required: true
        }
    },
    methods:{
        loadQuestion(question){
            this.$emit('loadQuestion', question)
        },
        conformRemove(question){
            this.$buefy.dialog.confirm({
                title: 'Delete question?',
                message:
                    'Are you sure to <b>delete</b> this question? This action cannot be undone',
                conrfirmText:'Delete',
                cancelText: 'Cancel',
                type: 'is-danger',
                hasIcon: true,
                onConfirm: () => this.$emit('remove', question)
            })
        }
    }
}
</script>

<style>

</style>
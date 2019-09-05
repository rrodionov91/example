<template>
    <div>
        <table-comp :data="users">
            <template #head>
                <table-head-cell>Name</table-head-cell>
                <table-head-cell>Age</table-head-cell>
                <table-head-cell>Severity</table-head-cell>
            </template>
            <template #row="{rowData}">
                <table-cell>
                    {{rowData.name}}
                </table-cell>
                <table-cell>
                    {{rowData.age}}
                </table-cell>
                <user-severity-table-cell :severity="rowData.severity"></user-severity-table-cell>
            </template>
        </table-comp>
    </div>
</template>

<script>
    import TableComp from '@components/table/component'
    import TableCell from '@components/table/cells/cell'
    import TableHeadCell from '@components/table/cells/head_cell'
    import UserSeverityTableCell from '@components/table/cells/user_severity_cell'
    import {SAFETY_UPDATE_USERS} from "../../store/modules/user";
    import {mapState} from 'vuex'

    export default {
        name: "some_page",
        components: {TableComp, TableCell, TableHeadCell, UserSeverityTableCell},
        beforeCreate () {
            this.$store.dispatch(SAFETY_UPDATE_USERS)
        },
        computed: {
            ...mapState({
                users: state => state.userStoreModule.users
            })
        }
    }
</script>

<style>

</style>
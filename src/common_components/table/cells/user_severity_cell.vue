<template>
    <td class="table-cell">
        <div :class="[`bg-${color}-500`, 'w-16 h-4 m-auto rounded']"></div>
    </td>
</template>

<script>
    import {getSeverityColor} from "../../../business_logic_helpers/users";

    export default {
        name: "user-severity-cell",
        props: {
            severity: {
                type: String
            }
        },
        computed: {
            color () {
                return getSeverityColor(this.severity)
            }
        }
    }
</script>

<style>

</style>
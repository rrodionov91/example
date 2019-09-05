<template>
    <table class="border-collapse">
        <thead>
            <tr>
                <slot name="head"></slot>
            </tr>
        </thead>
        <tbody>
            <tr v-for="rowData in data">
                <slot name="row" v-bind:rowData="rowData"></slot>
            </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        name: "table-comp",
        props: {
            data: {
                type: Array
            }
        },
        computed: {
        }
    }
</script>

<style lang="scss">
    @import "./styles.scss";

</style>
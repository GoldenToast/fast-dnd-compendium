<template>
    <div>
        <h1>Monsters</h1>
        <b-form-group
                label-align-sm="right"
                label-size="sm"
                label-for="filterInput"
                class="mb-0"
        >
            <b-input-group>
                <b-form-input
                        v-model="filter"
                        type="search"
                        id="filterInput"
                        placeholder="Type to Search"
                ></b-form-input>
                <b-input-group-append>
                    <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
                </b-input-group-append>
            </b-input-group>
        </b-form-group>

        <b-table
                striped
                hover
                @row-clicked="onRowSelected"
                :busy.sync="isBusy"
                :filter="filter"
                @filtered="onFiltered"
                :fields="fields"
                :items="items">

        </b-table>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'Monsters',
        data () {
            return {
                fields: ['name'],
                items:[],
                isBusy: false,
                filter: '',
                filterOn: [],
                totalRows: 1,
                currentPage: 1,
            }
        },
        methods: {
            get(thing) {
                return axios.get(thing)
                    .then(response => {
                        this.totalRows = response.data.count;
                        this.items = response.data.results;
                    }).catch(error => {
                        console.log(error)
                        this.items = []
                    })

            },
            onRowSelected(items) {
                this.$router.push({ path: 'monsters/'+ items.index })
            },
            onFiltered(filteredItems) {
                // Trigger pagination to update the number of buttons/pages due to filtering
                this.totalRows = filteredItems.length
                this.currentPage = 1
            }
        },
        mounted() {
             this.get("lib/api/monsters");
        }
    }
</script>

<style scoped>

</style>
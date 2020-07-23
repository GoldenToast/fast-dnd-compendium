<template>
    <div>
        <b-card
                :title="item.name"
        >
            <b-card-text>
                <h5>Range</h5>
                <div>{{item.range}}</div>
                <h5>Description</h5>
                <b-list-group>
                    <b-list-group-item v-for="item in item.desc" :key="item.desc">
                        ({{item}}
                    </b-list-group-item>
                </b-list-group>
            </b-card-text>
        </b-card>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'Spell',
        data () {
            return {
                item: {}
            }
        },
        methods: {
            get(thing) {
                return axios.get(thing)
                    .then(response => {
                        this.item = response.data;
                    }).catch(error => {
                        console.log(error)
                        this.item = {}
                    })

            },
        },
        mounted() {
            this.get("lib/api/spells/" + this.$route.params.name);
        }
    }
</script>

<style scoped>

</style>
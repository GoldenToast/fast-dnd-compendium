<template>
    <div>
        {{item}}
        <b-card
                :title="item.name"
        >
            <b-card-text>
                <h5>Size</h5>
                <div>{{item.size}}</div>
                <h5>Type</h5>
                <div>{{item.type}}</div>
                <h5>Alignment</h5>
                <div>{{item.alignment}}</div>
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
        name: 'Monster',
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
            this.get("lib/api/monsters/" + this.$route.params.name);
        }
    }
</script>

<style scoped>

</style>
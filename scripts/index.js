import { createApp, ref } from 'vue'

const vueApp = createApp({
    data() {
        return {
            cities : [],
            token: null,
        }
    },
    methods: {
        
    },
    mounted() {
        localStorage.getItem("cities") ? this.cities = JSON.parse(localStorage.getItem("cities")) : this.cities = [];
        localStorage.getItem("token") {
            this.token = localStorage.getItem("token");
        }
    }
})

vueApp.component("token-add", {
    template: `
    <input type="text" v-model="token">
    <div @click="addToken">Add</div>
    `,
    data() {
        return {
            token: null
        }
    },
    methods: {
        addToken() {
            if(this.token!=null || this.token.lenght!=0) {
                this.token = null;
                this.$emit('update');
            }
        }
    }
})

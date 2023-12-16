import { createApp, ref } from "vue";

const vueApp = createApp({
  data() {
    return {
      cities: [],
      token: null,
    };
  },
  methods: {},
  mounted() {
    localStorage.getItem("cities")
      ? (this.cities = JSON.parse(localStorage.getItem("cities")))
      : (this.cities = []);
    localStorage.getItem("token");
    this.token = localStorage.getItem("token");
  },
});

vueApp.component("token-add", {
  template: `
    <div class="card text-center mt-3 position-absolute start-50 translate-middle-x">
        <div class="card-body">
            <div class="card" style="width: 21rem;">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    <div class="input-group mb-3">
                      <input type="text" class="form-control" placeholder="Token" aria-label="Recipient's username" aria-describedby="basic-addon2">
                      <span class="input-group-text" id="basic-addon2">Example: 111-111-111</span>
                    </div>
                </li>
                <li class="list-group-item"><div @click="addToken" class="btn btn-primary add-token">Add</div></li>
              </ul>
            </div>
        </div>
    </div>
    `,
  data() {
    return {
      token: null,
    };
  },
  methods: {
    addToken() {
      if (this.token != null || this.token.lenght != 0) {
        this.token = null;
        this.$emit("update");
      }
    },
  },
});

vueApp.mount("#app");

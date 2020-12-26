/* eslint-disable */
// prettier-ignore
import Vue from "https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js";

const AppPlace = Vue.component(
  "app-place",
  {
    template:
      ` <div class="place"> <img :src="location.img" width="235" height="300" /> <slot></slot> <p>{{ location.desc }}</p> </div>`,
    props: ["location"],
  },
);
const App = new Vue(
  {
    template:
      ` <div id="app"> <h1>Your Upcoming Destinations</h1> <div class="location-contain"> <div class="locations" v-for="location in locations" :key="location.desc"> <app-place :location="location"> <h2>{{ location.name }}</h2> </app-place> </div> </div> </div>`,
    name: "app",
    components: { AppPlace },
    data() {
      return {
        locations: [
          {
            name: "moscow",
            img:
              "https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/moscow.svg",
            desc:
              `Moscow is the capital and most populous city of Russia, with 13.2 million residents within the city limits and 17.8 million within the urban area. Moscow has the status of a Russian federal city.`,
          },
          {
            name: "paris",
            img:
              "https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/paris1.svg",
            desc:
              `Paris is the capital and most populous city of France. By the 17th century, Paris was one of Europe's major centres of finance, commerce, fashion, science, and the arts, and it retains that position still today.`,
          },
          {
            name: "rome",
            img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/rome.svg",
            desc:
              `Rome's history spans more than 2,500 years. While Roman mythology dates the founding of Rome at around 753 BC, the site has been inhabited for much longer, making it one of the oldest continuously occupied sites in Europe.`,
          },
          {
            name: "paris",
            img:
              "https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/paris2.svg",
            desc:
              `By the end of the 12th century, Paris had become the political, economic, religious, and cultural capital of France. Maurice de Sully undertook the construction of the Notre Dame Cathedral at its eastern extremity.`,
          },
        ],
      };
    },
  },
);

App.$mount("#app");
export default App;

import { createApp } from "vue";
import App from "./App.vue";

//* bootstrap 5.3.2
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";

//* fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// solid
import {
  faChevronDown,
  faMagnifyingGlass,
  faBagShopping,
  faTruck,
  faSackDollar,
  faTag,
  faHandHoldingDollar,
} from "@fortawesome/free-solid-svg-icons";
// regular
import { faUser } from "@fortawesome/free-regular-svg-icons";

//* fontawesome library
library.add(
  faChevronDown,
  faMagnifyingGlass,
  faUser,
  faBagShopping,
  faTruck,
  faSackDollar,
  faTag,
  faHandHoldingDollar
);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");

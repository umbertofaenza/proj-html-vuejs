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
  faChevronLeft,
  faChevronRight,
  faStar,
  faLocationDot,
  faPhone,
  faEnvelope,
  faPlus,
  faGears,
  faHeart,
  faMaximize,
  faEye,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
// regular
import {
  faUser,
  faCalendarDays,
  faComments,
} from "@fortawesome/free-regular-svg-icons";
// brands
import {
  faFacebookF,
  faTwitter,
  faGooglePlusG,
  faSkype,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

//* fontawesome library
library.add(
  faChevronDown,
  faMagnifyingGlass,
  faUser,
  faBagShopping,
  faTruck,
  faSackDollar,
  faTag,
  faHandHoldingDollar,
  faChevronLeft,
  faChevronRight,
  faStar,
  faCalendarDays,
  faComments,
  faLocationDot,
  faPhone,
  faEnvelope,
  faFacebookF,
  faTwitter,
  faGooglePlusG,
  faSkype,
  faInstagram,
  faPlus,
  faGears,
  faHeart,
  faMaximize,
  faEye,
  faCircle
);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");

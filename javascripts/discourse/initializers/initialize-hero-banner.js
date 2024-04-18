import { withPluginApi } from "discourse/lib/plugin-api";
import HeroBanner from "../components/hero-banner";

export default {
  name: "hero-banner",

  initialize() {
    withPluginApi("1.14.0", (api) => {
      api.renderInOutlet("below-site-header", HeroBanner);
    });
  },
};

import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import Phone from "../views/Phone.vue";
import PcDesign from "../views/Pc-design.vue";
import PhoneDesign from "../views/Phone-design.vue";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/phone",
            name: "phone",
            component: Phone
        },
        {
            path: "/pc-design",
            name:"pc-design",
            component: PcDesign
        },
        {
            path: "/phone-design",
            name:"phone-design",
            component: PhoneDesign
        },
    ]
});

import Vue from "vue";
import VueRouter from "vue-router";

//Pagine collegate
import Pianifica from "../views/Pianifica.vue";
import Viaggio from "../views/Viaggio.vue";

import Linee from "../views/Linee.vue";
import Preferiti from "../views/Preferiti.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/pianifica",
        component: Pianifica,
        children: [
            { path: "viaggio", component: Viaggio }
        ]
    },
    { path: "/", redirect: "/pianifica" },
    { path: "/linee", component: Linee },
    { path: "/preferiti", component: Preferiti }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load(compPath: string) {
	return () => import(`./components/${compPath}`).then(m => m.default)
}

var routes: { path: string, component: () => Promise<any> }[] = [
	{ path: '/billsoverview', component: load('Billsoverview/Billsoverview.vue') },
	{ path: '/odata', component: load('Odata/Odata.vue') },
	{ path: '/car', component: load('Car/Car.vue') },
	{ path: '/', component: load('Billsoverview/Billsoverview.vue') },
	{ path: '*', component: load('Error404.vue') }
]

export const router = new VueRouter({
	routes,
	mode: 'history'
})
/*global Vue*/

// register the grid component
Vue.component('demo-grid', {
	template: '#grid-template',
	props: {
		data: Array,
		columns: Array
	},
	filters: {
		capitalize: function (str) {
			return str.charAt(0).toUpperCase() + str.slice(1)
		}
	}
});
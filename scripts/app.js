/*global Vue*/

var store = {
	state: {
		filters: {
			country: ['USA'],
			age: '',
			power: '>90',
		}
	},
	updateFilter: function(filterName, values) {
		this.state.filters[filterName] = values;
	}
};

// bootstrap the app
var app = new Vue({
	el: '#app',
	data: {
		searchQuery: '',
		gridColumns: ['name', 'power', 'age', 'country'],
		gridData: [
			{ name: 'Chuck Norris', power: Infinity, age: 52, country: 'USA' },
			{ name: 'Bruce Lee', power: 9000, age: 66, country: 'China' },
			{ name: 'Jackie Chan', power: 7000, age: 50, country: 'China' },
			{ name: 'Jet Li', power: 8000, age: 52, country: 'China' }
		],
		config: {
			filters: [
			{
					id: 'country',
					name: 'country',
					type: 'select',
					current: store.state.filters.country,
					options: [
						{ id: 'China', text: 'China' },
						{ id: 'USA', text: 'USA' }
					]
				},
				{
					id: 'power',
					name: 'power',
					type: 'range',
					current: store.state.filters.power
				}
			]
		},
		sharedState: store.state
	},
	methods: {
		changedFilter: function(event) {
			store.updateFilter(event.filterId, event.filterData);
			store.updateFilter('power', 'hello');
		}
	}
});

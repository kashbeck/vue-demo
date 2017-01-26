/*global Vue, $*/

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
			{ name: 'Chuck Norris', power: 6000, age: 52, country: 'USA' },
			{ name: 'Bruce Lee', power: 9000, age: 66, country: 'China' },
			{ name: 'Jackie Chan', power: 7000, age: 50, country: 'China' },
			{ name: 'Jet Li', power: 8000, age: 52, country: 'China' }
		],
		config: {
			filters: {
				country: {
					id: 'country',
					name: 'country',
					type: 'select',
					current: store.state.filters.country,
					options: [
						{ id: 'China', text: 'China' },
						{ id: 'USA', text: 'USA' }
					]
				},
				power: {
					id: 'power',
					name: 'power',
					type: 'range',
					current: store.state.filters.power
				}
			}
		}
	},
	computed: {
		filterSummary: function() {
			var filterSummary = [], filter;
			for (var filterName in this.config.filters) {
				filter = this.config.filters[filterName];
				if (filter.type === 'select') {
					if (filter.current && filter.current.length > 0) {
						filter.current.forEach(function(current, c) {
							var option = filter.options.filter(o => o.id === current);
							if (option && option.length > 0) {
								var display = option[0];
								display.filter = filter.id;
								filterSummary.push(display);
							}
						});
					}
				} else if (filter.type === 'range') {
					if (filter.current) {
						filterSummary.push({
							id: filter.current,
							text: filter.current,
							filter: filter.id
						})
					}
				}
			};
			
			return filterSummary;
		}
	},
	methods: {
		changedFilter: function(event) {
			//this.config.filters[event.filterId] = event.filterData;
		},
		removeFilter: function(filterObj) {
			var filterConfig = this.config.filters[filterObj.filter];	
			var current = filterConfig.current;
			
			if (Array.isArray(current)) {
				var index = current.indexOf(filterObj.id);
				if (index > -1) {
					current.splice(index, 1);
				}
			} else {
				filterConfig.current = '';
			}
		}
	},
	mounted: function() {
		//use jQuery DataTable
		$(this.$el).find('.filtered-table__table > table').DataTable();
	}
});

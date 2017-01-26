/*global Vue*/

// register the filter-summary component
Vue.component('filter-summary', {
  template: '#filter-summary',
	 props: ['filters'],
  data: function () {
		return {
		};
  },
  methods: {
		removeFilter: function(filter) {
			this.$emit('filter-removed', filter);
		}
  }
});
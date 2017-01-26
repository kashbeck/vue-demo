/*global Vue*/

// register the grid component
Vue.component('tbl-filter', {
  template: '#tbl-filter',
	 props: ['config'],
  data: function () {
		return {
			collapsed: false
		};
  },
  methods: {
		changeSelect: function() {
			this.$emit('filter-change', { filterId: this.config.id, filterData: this.config.current });
		},
		changeValue: function() {
			//console.log('changeValue');
			this.$emit('filter-change', { filterId: this.config.id, filterData: this.config.current });
		}
  }
});
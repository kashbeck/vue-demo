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
			this.$emit('tbl-filter--change', { filterId: this.config.id, filterData: this.config.current });
			//this.$emit('tbl-filter--change', this.config.current);
			//store.updateFilter(this.config.id, this.config.current);
			//console.log(this.config.current);
			//console.log(store);
			//store.updateFilter(this.config.id, this.config.current);
		},
		changeValue: function() {
			this.$emit('tbl-filter--change', this.config.current);
			//store.updateFilter(this.config.id, this.config.current);
			//console.log(store);
			//store.updateFilter(this.config.id, this.config.current);
		}
  }
});
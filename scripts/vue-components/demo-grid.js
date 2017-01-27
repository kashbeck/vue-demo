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


/*
<!-- component template -->
<script type="text/x-template" id="grid-template">
	<table>
		<thead>
			<tr>
				<th v-for="key in columns">
					{{ key | capitalize }}
				</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="entry in data">
				<td v-for="key in columns" :data-order="entry[key]">
					{{entry[key]}}
				</td>
			</tr>
		</tbody>
	</table>
</script>   <!-- end #grid-template -->
*/
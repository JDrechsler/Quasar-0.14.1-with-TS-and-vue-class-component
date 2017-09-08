import Vue from 'vue'
import Component from 'vue-class-component'
// import { Watch } from 'vue-property-decorator'
import axios from 'axios'

@Component
export default class Billsoverview extends Vue {

	table: object
	config: object = {
		title: 'Data Table',
		refresh: true,
		noHeader: false,
		columnPicker: true,
		leftStickyColumns: 0,
		rightStickyColumns: 2,
		rowHeight: '50px'
	}

	columns: Array<any> = [
		{
			label: 'Date',
			field: 'isodate',
			width: '140px',
			classes: 'bg-orange-2'
		},
		{
			label: 'Service',
			field: 'serviceable',
			width: '70px'
		},
		{
			label: 'Time Range',
			field: 'timerange',
			width: '80px',
			type: 'number'
		},
		{
			label: 'Message',
			field: 'message',
			type: 'string',
			width: '500px'
		},
		{
			label: 'Source',
			field: 'source',
			type: 'string',
			width: '120px'
		},
		{
			label: 'Log Number',
			field: 'log_number',
			type: 'string',
			width: '100px'
		}
	]

	pagination: boolean = true
	rowHeight: number = 50
	bodyHeightProp: string = 'maxHeight'
	bodyHeight: number = 500


	async mounted() {
		console.log('testing odata...')
		try {
			const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
			console.log(response.data)
		} catch (e) {
			console.log(e)
		}

		// http://services.odata.org/V4/(S(btt321fxmnjag4n042xg5j3u))/TripPinServiceRW/
		// http://services.odata.org/Northwind/Northwind.svc/


		// try {
		// 	const response = await axios.get(`http://services.odata.org/V4/(S(btt321fxmnjag4n042xg5j3u))/TripPinServiceRW/`)
		// 	console.log(response.data.value)
		// } catch (e) {
		// 	console.log(e)
		// }

		// try {
		// 	const response = await axios.get(`http://services.odata.org/Northwind/Northwind.svc/Customers`)
		// 	console.log(response.data.value)
		// } catch (e) {
		// 	console.log(e)
		// }


	}

}

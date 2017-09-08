import Vue from 'vue'
import Component from 'vue-class-component'
// import { Watch } from 'vue-property-decorator'

interface SelectedOption {
	label: string,
	value: string,
	description?: string
}

@Component
export default class Car extends Vue {
	chips: Array<string> = ['A/C']

	today: Date = new Date
	pickupTime: Date = new Date

	selectedLocation: string = 'rw'

	selectedOption: Array<SelectedOption> = [
		{
			label: 'D-04519 RACKWITZ',
			value: 'rw',
			description: `
				SAT <br>
				Sächsische Autotransport und Service GmbH<br>
				Am Schafteich 1<br>
				08371 Glauchau<br>
				Deutschland
			`
		},
		{
			label: 'D-04639 GÖSSNITZ',
			value: 'gn',
			description: `
				SAT<br>
				Sächsische Autotransport und Service GmbH<br>
				Am Schafteich 1<br>
				08371 Glauchau<br>
				Deutschland
			`
		},
		{
			label: 'D-08371 GLAUCHAU',
			value: 'gh',
			description: `
				SAT<br>
				Sächsische Autotransport und Service GmbH<br>
				Am Schafteich 1<br>
				08371 Glauchau<br>
				Deutschland
			`
		},
		{
			label: 'D-14669 KETZIN',
			value: 'kz',
			description: `
				ACM Auto-Service und Umschlag-Center Mosolf Etzin GmbH<br>
				Gewerbegebiet Etzin<br>
				14669 Ketzin<br>
				Deutschland
			`
		},
		{
			label: 'D-26723 EMDEN',
			value: 'ed',
			description: `
				ALM<br>
				Automobil-Logistik-Mosolf GmbH<br>
				Zum Emskai 1<br>
				26723 Emden<br>
				Deutschland
			`
		},
		{
			label: 'D-38442 WOLFSBURG',
			value: 'wb',
			description: `
				MOSOLF Logistics & Services GmbH<br>
				Niederlassung Wolfsburg<br>
				Bremerslust 1<br>
				38442 Wolfsburg<br>
				Deutschland	
			`
		}
	]

	get getLocationInfo() {

		var locationInfo: string = 'not set'

		for (var index = 0; index < this.selectedOption.length; index++) {
			var element = this.selectedOption[index]
			if (element.value === this.selectedLocation) {
				if (element.description) {
					locationInfo = element.description
				}
			}
		}

		return locationInfo
	}

	mounted() {
		console.log('Car mounted')
	}

}

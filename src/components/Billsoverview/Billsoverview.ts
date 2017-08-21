import Vue from 'vue'
import Component from 'vue-class-component'
import { Watch } from 'vue-property-decorator'
import Firebase from 'firebase'
import { Dialog } from 'quasar'
import GoogleImageSearch from './../../classes/GoogleImageSearch.js'

interface Biller {
	uid: string,
	title: string,
	amount: number,
	dayOfMonth: number,
	isPaid: boolean,
	picture: string
}

var fbConfig = {
	apiKey: "AIzaSyArRBqM-15qOKgr4dQAR9NnjHR5E85uCHo",
	authDomain: "firsttryfirebase-560dd.firebaseapp.com",
	databaseURL: "https://firsttryfirebase-560dd.firebaseio.com",
	projectId: "firsttryfirebase-560dd",
	storageBucket: "firsttryfirebase-560dd.appspot.com",
	messagingSenderId: "583541784479"
}

if (!Firebase.apps.length) {
	Firebase.initializeApp(fbConfig);
}

var billersRef = Firebase.database().ref('billers')

@Component
export default class Billsoverview extends Vue {

	billsOverview = [
		{
			title: 'Rent',
			amount: 950,
			dayOfMonth: 29,
			isPaid: false,
			picture: 'https://www.nationalcorporatehousing.com/sites/default/files/styles/768x500/public/properties/gal7.jpg?itok=sOk00PI8'
		},
		{
			title: 'Charter internet',
			amount: 100,
			dayOfMonth: 6,
			isPaid: true,
			picture: 'http://downdetector.com/i/logo/charter-communications_logo_3807.png'
		},
		{
			title: 'Progressive Insurance',
			amount: 201,
			dayOfMonth: 17,
			isPaid: false,
			picture: 'http://carhomelifeinsurances.com/images/articleimages/car2.jpg'
		}
	]

	incomeMonthly: number = 2700

	billers = [
		{
			uid: '0',
			title: '',
			amount: 0,
			dayOfMonth: 0,
			isPaid: false,
			picture: ''
		}
	]

	settings = {
		sortSelection: 'sortByDueDate',
		/**
			Only for usage with q-option-group. For comparison use sortSelection
		 */
		sortOptions: [
			{ label: 'Sort by amount', value: 'sortByAmount' },
			{ label: 'Sort by due date', value: 'sortByDueDate' },
			{ label: 'Sort by title', value: 'sortByTitle' }
		]
	}

	today: Date = new Date

	searchIcon: string = "search"

	foundImages: Array<string> = ['']

	selectedImage: string = 'none'

	newBiller = {
		title: '',
		amount: 0,
		dayOfMonth: 0,
		isPaid: false,
		picture: ''
	}
	showImageSelection: boolean = false

	selectedBiller = {
		title: '',
		amount: 0,
		dayOfMonth: 0
	}

	sortBillers(): void {
		if (this.settings.sortSelection === 'sortByAmount') {
			this.billers.sort(function (a, b) {
				return parseFloat(b.amount.toString()) - parseFloat(a.amount.toString());
			})
		}
		if (this.settings.sortSelection === 'sortByTitle') {
			this.billers.sort(function (a, b) {
				return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
			});
		}
		if (this.settings.sortSelection === 'sortByDueDate') {
			this.billers.sort(function (a, b) {
				return parseFloat(a.dayOfMonth.toString()) - parseFloat(b.dayOfMonth.toString());
			})
		}
	}

	markAllBillsAsPaid(): void {
		Dialog.create({
			title: 'Mark all bills as paid',
			message: 'Are you sure?',
			buttons: [
				{
					raised: true,
					label: 'No',
					color: 'negative',
					handler() {
						return
					}
				},
				{
					label: 'Yes',
					color: 'positive',
					handler: () => {
						for (var index = 0; index < this.billers.length; index++) {
							this.fbUpdateBiller(this.billers[index].uid, { isPaid: true })
						}
					}
				}
			]
		})
	}

	markAllBillsAsUnpaid(): void {
		Dialog.create({
			title: 'Mark all bills as unpaid',
			message: 'Are you sure?',
			buttons: [
				{
					raised: true,
					label: 'No',
					color: 'negative',
					handler() {
						return
					}
				},
				{
					label: 'Yes',
					color: 'positive',
					handler: () => {
						for (var index = 0; index < this.billers.length; index++) {
							this.fbUpdateBiller(this.billers[index].uid, { isPaid: false })
						}
					}
				}
			]
		})
	}

	getDueDate(biller: Biller): string {
		if (biller.dayOfMonth == 1) return '1st'
		if (biller.dayOfMonth == 2) return '2nd'
		if (biller.dayOfMonth == 3) return '3rd'
		if (biller.dayOfMonth == 21) return '21st'
		if (biller.dayOfMonth == 22) return '22nd'
		if (biller.dayOfMonth == 23) return '23rd'
		if (biller.dayOfMonth == 31) return '31st'
		return `${biller.dayOfMonth}th`
	}

	getAmountWithDollars(biller: Biller): string {
		var amountWithDollars = '$' + '' + biller.amount.toFixed(2)
		return amountWithDollars.big()
	}

	showPaidDialog(biller: Biller): void {
		Dialog.create({
			title: biller.title,
			buttons: [
				{
					label: 'Unpaid',
					color: 'negative',
					handler: () => {
						this.fbUpdateBiller(biller.uid, { isPaid: false })
					}
				},
				{
					label: 'Paid',
					color: 'positive',
					handler: () => {
						this.fbUpdateBiller(biller.uid, { isPaid: true })

					}
				}
			]
		})
	}

	addNewBiller(): void {
		var newBiller: Biller = {
			uid: '0',
			title: this.newBiller.title,
			amount: this.newBiller.amount,
			dayOfMonth: this.newBiller.dayOfMonth,
			isPaid: false,
			picture: this.newBiller.picture
		}
		this.fbPostBiller(newBiller)
		this.newBiller.amount = 0
		this.newBiller.dayOfMonth = 0
		this.newBiller.isPaid = false
		this.newBiller.picture = ""
		this.newBiller.title = ""
	}

	makeAjaxRequest(): void {
		this.searchIcon = "hourglass empty"
		// console.log('makeing ajax request')

		GoogleImageSearch.searchImage(this.newBiller.title)
			.then((res: Array<any>) => {
				this.foundImages = res
				this.searchIcon = "search"
				this.newBiller.picture = this.foundImages[0]
			})
	}

	fbPostBiller(biller: Biller): void {
		var newRef = billersRef.push()
		if (newRef.key) {
			biller.uid = newRef.key
			newRef.set(biller)
		}
	}
	fbRemoveBiller(billerUid: string): void {
		billersRef.child(billerUid).remove()
	}
	fbUpdateBiller(billerUid: string, newPropertiesObject: object): void {
		billersRef.child(billerUid).update(newPropertiesObject)
	}



	get getNumPaidBills(): number {
		var numPaidBills: number = 0
		this.billers.forEach(bill => {
			if (bill.isPaid) {
				numPaidBills++
			}
		})
		return numPaidBills
	}

	get getTotalPaidBillsThisMonth(): number {
		var paidTotal: number = 0
		this.billers.forEach(bill => {
			if (bill.isPaid) {
				paidTotal += bill.amount
			}
		})
		return paidTotal
	}

	get getTotalUnpaidBillsThisMonth(): number {
		var unpaidTotal: number = 0
		this.billers.forEach(bill => {
			if (!bill.isPaid) {
				unpaidTotal = unpaidTotal + bill.amount
			}
		})
		return unpaidTotal
	}

	get getRemainingMoneyThisMonth(): number {
		var remainingMoney: number = 0
		remainingMoney = this.incomeMonthly - this.getTotalPaidBillsThisMonth
		return remainingMoney
	}

	get getPaidBills(): Array<Biller> {
		return this.billers.filter(biller => {
			return biller.isPaid
		})
	}

	get getUnpaidBills(): Array<Biller> {
		return this.billers.filter(biller => {
			return !biller.isPaid
		})
	}

	get newBillerTitle(): string {
		return this.newBiller.title
	}

	get getUnPaidBillsDueToday(): Array<Biller> {
		var unPaidBillersDueToday: Array<Biller> = []
		for (var index = 0; index < this.billers.length; index++) {
			var biller = this.billers[index]
			if (biller.dayOfMonth == this.today.getDate()) {
				if (!biller.isPaid) {
					unPaidBillersDueToday.push(biller)
				}
			}
		}

		return unPaidBillersDueToday
	}

	get getUnPaidBillsDueNextThreeDays(): Array<Biller> {
		var todayDate = this.today.getDate()
		var unPaidBillersDueNTD: Array<Biller> = []
		for (var index = 0; index < this.billers.length; index++) {
			var biller = this.billers[index]
			if (biller.dayOfMonth > todayDate && biller.dayOfMonth < todayDate + 4) {
				if (!biller.isPaid) {
					unPaidBillersDueNTD.push(biller)
				}
			}
		}
		return unPaidBillersDueNTD
	}



	@Watch('newBillerTitle')
	onPropertyChanged(newValue: string, oldValue: string) {
		if (newValue.length < 3) {
			return
		}
		// console.log(`searchName changed: ${newValue}`)
		this.makeAjaxRequest()
	}



	mounted() {

		console.log('App mounted')

		this.billers = []

		billersRef.on('child_added', (snapshot) => {
			if (snapshot) {
				this.billers.push(snapshot.val())
				this.sortBillers()
			}
		})

		billersRef.on('child_changed', (snapshot) => {
			if (snapshot) {
				for (var index = 0; index < this.billers.length; index++) {
					var element = this.billers[index]
					if (element.uid === snapshot.val().uid) {
						Object.assign(this.billers[index], snapshot.val())
						this.sortBillers()
						// console.log('element in dom found and updated')
						break
					}
				}
			}
		})

		billersRef.on('child_removed', (snapshot) => {
			if (snapshot) {
				for (var index = 0; index < this.billers.length; index++) {
					var element = this.billers[index]
					if (element.uid === snapshot.val().uid) {
						this.billers.splice(index, 1)
						// console.log('element in dom found and removed')
						this.sortBillers()
						break
					}
				}
			}
		})
	}
}
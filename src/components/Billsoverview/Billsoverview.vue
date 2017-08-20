<template>
	<div class="layout-padding">

		<div class="justify-around">

			<!-- <q-alert key="negative" color="negative" style="margin-bottom: 1.5rem">
				Bill xyz is due tomorrow!
			</q-alert> -->

			<!-- Summary -->

			<q-card inline>
				<q-list>
					<q-item>
						<q-item-side>
							<q-item-tile label>Today</q-item-tile>
						</q-item-side>
						<q-item-main>
							<q-datetime v-model="today" type="date" format="MM/DD/YYYY" />
						</q-item-main>
					</q-item>
					<q-item @click="$refs.modalEditIncome.open()">
						<q-item-side>
							<q-item-tile color="green" icon="add" />
						</q-item-side>
						<q-item-main>
							<q-item-tile label>Monthly Income</q-item-tile>
							<q-item-tile sublabel>${{incomeMonthly}}</q-item-tile>
						</q-item-main>
					</q-item>

					<q-item>
						<q-item-side>
							<q-item-tile color="red" icon="remove" />
						</q-item-side>
						<q-item-main>
							<q-item-tile label>Unpaid Bills</q-item-tile>
							<q-item-tile sublabel>${{getTotalUnpaidBillsThisMonth}}</q-item-tile>
						</q-item-main>
					</q-item>

					<q-item>
						<q-item-side>
							<q-item-tile color="blue" icon="check" />
						</q-item-side>
						<q-item-main>
							<q-item-tile label>Paid Bills</q-item-tile>
							<q-item-tile sublabel>${{getMoneySpentOnBillsThisMonth}}</q-item-tile>
						</q-item-main>
					</q-item>

					<q-card-separator />
					<q-item>

						<q-item-side>
							<q-item-tile v-bind:class="{ positive:this.getRemainingMoneyThisMonth>=400, negative:this.getRemainingMoneyThisMonth<400}" icon="attach money" />
						</q-item-side>
						<q-item-main>
							<q-item-tile label>Remaining Balance</q-item-tile>
							<q-item-tile sublabel>${{getRemainingMoneyThisMonth}}</q-item-tile>
						</q-item-main>
					</q-item>
				</q-list>
			</q-card>

			<!-- Unpaid Bills  -->
			<q-card inline>
				<q-list>
					<q-list-header>Unpaid Bills</q-list-header>
					<q-item v-if="getUnpaidBills < 1">You do not have unpaid bills. Yay!</q-item>
					<q-item v-for="(biller, index) in getUnpaidBills" @click="Object.assign(selectedBiller, biller)">
						<q-item-side left @click="Object.assign(selectedBiller, biller);$refs.modalEditBiller.open()">{{getDueDate(biller)}}</q-item-side>
						<q-item-side :image="biller.picture" @click="$refs.modalEditBiller.open()" />
						<q-item-main :label="biller.title" @click="$refs.modalEditBiller.open()" />
						<q-item-side class="negative" right :stamp="getAmountWithDollars(biller)" @click="$refs.modalEditIsPaid.open()" />
					</q-item>
				</q-list>
			</q-card>

			<!-- Paid Bills  -->
			<q-card inline>
				<q-list>
					<q-list-header>Paid Bills</q-list-header>
					<q-item v-if="getPaidBills < 1">You do not have paid bills.</q-item>
					<q-item v-for="(biller, index) in getPaidBills" @click="Object.assign(selectedBiller, biller)">
						<q-item-side left @click="Object.assign(selectedBiller, biller);$refs.modalEditBiller.open()">{{getDueDate(biller)}}</q-item-side>
						<q-item-side :image="biller.picture" @click="Object.assign(selectedBiller, biller);$refs.modalEditBiller.open()" />
						<q-item-main :label="biller.title" @click="Object.assign(selectedBiller, biller);$refs.modalEditBiller.open()" />
						<q-item-side class="paidBill" right :stamp="getAmountWithDollars(biller)" @click="$refs.modalEditIsPaid.open()" />
					</q-item>
				</q-list>
			</q-card>

		</div>

		<q-btn round color="primary" @click="$refs.modalAddCustomBiller.open()" class="fixed" icon="add" style="right: 11px; bottom: 13px"></q-btn>
		<q-btn round small color="faded" @click="$refs.modalSettings.open()" class="fixed" icon="settings" style="right: 11px; top: 61px"></q-btn>

		<!-- ---------------------- Modals ------------------------- -->

		<q-modal ref="modalSettings" position="top">
			<q-card>
				<!-- <q-card-title>Settings</q-card-title> -->
				<q-card-main>
					<q-field>
						<q-option-group color="primary" type="radio" v-model="settings.sortSelection" :options="settings.sortOptions" @change="sortBillers" />
					</q-field>
					<q-btn color="primary" @click="markAllBillsAsPaid">Mark all bills as paid</q-btn>
					<q-btn color="primary" @click="markAllBillsAsUnpaid">Mark all bills as unpaid</q-btn>
					<q-btn color="positive" class="pull-right" round small icon="done" @click="$refs.modalSettings.close()"></q-btn>
				</q-card-main>
			</q-card>
		</q-modal>

		<q-modal ref="modalAddCustomBiller" minimized @close="showImageSelection=false" @escape-key="showImageSelection=false">
			<q-card>
				<q-card-title>
					<img v-if="newBiller.picture" @click="showImageSelection=!showImageSelection" :src="newBiller.picture" class="responsive">
					<div v-if="showImageSelection">
						<span v-for="image in foundImages">
							<q-btn @click="newBiller.picture=image;showImageSelection=false">
								<img :src="image">
							</q-btn>
						</span>
					</div>
				</q-card-title>
				<q-card-main>
					<q-search stack-label="Title" placeholder="Enter title" v-model="newBiller.title" :debounce="600"></q-search>
					<q-input v-model="newBiller.amount" type="number" stack-label="Amount" placeholder="Enter amount" />
					<q-input v-model="newBiller.dayOfMonth" type="number" stack-label="Day Of Month" placeholder="Enter day" />
					<q-btn color="positive" class="pull-right" round small icon="done" @click="addNewBiller();$refs.modalAddCustomBiller.close()"></q-btn>
					<q-btn color="negative" round small icon="close" @click="$refs.modalAddCustomBiller.close()"></q-btn>
				</q-card-main>
			</q-card>
		</q-modal>

		<q-modal ref="modalEditBiller" minimized @close="$refs.deleteCollapse.close()" @escape-key="$refs.deleteCollapse.close()">
			<q-card>
				<q-card-title>
					<img :src="selectedBiller.picture" class="responsive">
				</q-card-title>
				<q-card-main>
					<q-input v-model="selectedBiller.title" type="text" stack-label="Title" placeholder="Enter title" />
					<q-input v-model="selectedBiller.amount" type="number" stack-label="Amount" placeholder="Enter amount" />
					<q-input v-model="selectedBiller.dayOfMonth" type="number" stack-label="Day Of Month" placeholder="Enter day" />
					<q-collapsible ref="deleteCollapse" icon="delete" label="Delete">
						<q-btn color="negative" @click="$refs.modalConfirmRemoveBiller.open()">Delete</q-btn>
					</q-collapsible>
					<q-btn color="positive" class="pull-right" round small icon="done" @click="fbUpdateBiller(selectedBiller.uid, selectedBiller);$refs.modalEditBiller.close()"></q-btn>
					<q-btn color="negative" round small icon="close" @click="$refs.modalEditBiller.close()"></q-btn>
				</q-card-main>
			</q-card>
		</q-modal>

		<q-modal ref="modalEditIncome" minimized>
			<q-card>
				<q-card-main>
					<q-input v-model="incomeMonthly" type="number" stack-label="Monthly Income" placeholder="Enter Income" />
					<q-btn color="positive" round small icon="done" @click="$refs.modalEditIncome.close()"></q-btn>
				</q-card-main>
			</q-card>
		</q-modal>

		<q-modal ref="modalEditIsPaid" minimized>
			<q-card>
				<q-card-title>
					{{selectedBiller.title}}
				</q-card-title>
				<q-card-main>
					<q-btn color="positive" class="pull-right" @click="$refs.modalEditIsPaid.close()">Paid</q-btn>
					<q-btn color="negative" @click="$refs.modalEditIsPaid.close()">Unpaid</q-btn>
				</q-card-main>
			</q-card>
		</q-modal>

		<q-modal ref="modalConfirmRemoveBiller" minimized>
			<q-card>
				<q-card-title>
					Remove: {{selectedBiller.title}}?
				</q-card-title>
				<q-card-main>
					<q-btn color="positive" class="pull-right" round small icon="done" @click="fbRemoveBiller(selectedBiller.uid);$refs.modalEditBiller.close();$refs.modalEditBiller.close()"></q-btn>
					<q-btn color="negative" round small icon="close" @click="$refs.modalConfirmRemoveBiller.close()"></q-btn>
				</q-card-main>
			</q-card>
		</q-modal>

	</div>
</template>

<script lang="ts" src="./Billsoverview.ts"></script>

<style scoped>
	.negative {
		color: red
	}

	.positive {
		color: green
	}

	.paidBill {
		color: green;
		text-decoration: line-through;
	}

</style>

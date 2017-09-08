<template>
	<div class="layout-padding">

		<img src="http://www.mosolf.com/fileadmin/data/images/3Netzwerk/header_1600x400/Ketzin_Header.jpg" width="100%">

		<q-stepper color="secondary" ref="stepper" vertical alternative-labels>
			<q-step default name="first" title="Location and date">

				<q-select v-model="selectedLocation" :options="selectedOption" float-label="Select location for pick up" />

				<div v-html="getLocationInfo" class="bg-grey-2 shadow-1"></div>

				<q-datetime v-model="pickupTime" type="datetime" format="MMM-DD-YYYY hh:mm A" :min="today" float-label="Select date and time for pick up" />

				<q-stepper-navigation>
					<q-btn color="secondary" @click="$refs.stepper.next()">Continue</q-btn>
				</q-stepper-navigation>
			</q-step>
			<q-step name="second" title="Select car">
				<div v-for="n in 10">Step 2</div>
				<q-stepper-navigation>
					<q-btn color="secondary" @click="$refs.stepper.next()">Next</q-btn>
					<q-btn color="secondary" flat @click="$refs.stepper.previous()">Back</q-btn>
				</q-stepper-navigation>
			</q-step>
			<q-step name="third" title="Get code">
				<div v-for="n in 3">Step 3</div>
				<q-stepper-navigation>
					<q-btn color="secondary" @click="$refs.stepper.next()">Next</q-btn>
					<q-btn color="secondary" flat @click="$refs.stepper.previous()">Back</q-btn>
				</q-stepper-navigation>
			</q-step>
			<q-step name="fifth" title="Features">
				<div v-for="n in 3">Step 4</div>
				<q-chips-input v-model="chips" placeholder="Add important features" />
				<q-stepper-navigation>
					<q-btn color="secondary" @click="$refs.stepper.next()">Next</q-btn>
					<q-btn color="secondary" flat @click="$refs.stepper.previous()">Back</q-btn>
				</q-stepper-navigation>
			</q-step>
			<q-step name="fourth" title="Review and Finalize">
				<div v-for="n in 3">Step 5</div>
				<q-stepper-navigation>
					<q-btn color="secondary" @click="$refs.stepper.goToStep('first')">Restart</q-btn>
					<q-btn color="secondary" flat @click="$refs.stepper.previous()">Back</q-btn>
				</q-stepper-navigation>
			</q-step>
		</q-stepper>
	</div>
</template>

<script lang="ts" src="./Car.ts"></script>

<style scoped>


</style>

<template>
	<div id="app">
		<q-layout ref="layout" view="hHh LpR fFf" :right-breakpoint="1100">

			<q-toolbar slot="header">
				<q-btn flat @click="$refs.layout.toggleLeft()">
					<q-icon name="menu" />
				</q-btn>
				<q-toolbar-title>
					Bill Management
					<!-- <span slot="subtitle">Manage your bills</span> -->
				</q-toolbar-title>
			</q-toolbar>

			<!-- Left Side Panel -->
			<div slot="left">
				<q-list no-border link>
					<!-- <q-list-header>Essential Links</q-list-header> -->
					<q-side-link item to="/billsoverview">
						<q-item-side icon="account balance" />
						<q-item-main label="Bills Overview" />
					</q-side-link>
					<!-- <q-side-link item to="/chat">
												<q-item-side icon="chat" />
												<q-item-main label="Gitter Channel" />
											</q-side-link>
											<q-side-link item to="/Feed">
												<q-item-side icon="rss feed" />
												<q-item-main label="Feed" sublabel="@quasarframework" />
											</q-side-link>
											<q-side-link item to="/Grouptest">
												<q-item-side icon="warning" />
												<q-item-main label="GroupTest" />
											</q-side-link> -->
				</q-list>
			</div>

			<router-view></router-view>
		</q-layout>
	</div>
</template>

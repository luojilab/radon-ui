<template>
	<div class="container">
		<div class="sidebar"></div>
		<div class="content">
			<router-view></router-view>
		</div>
	</div>
</template>
<style lang="scss">
	html,body{
		height: 100%;
		margin: 0;
	}
	.container{
		height: 100%;
		position: relative;
		overflow: hidden;
	}
	.sidebar{
		width: 20%;
		background: black;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
	}
	.content{
		width: 100%;
		padding-left: 20%;
		height: 100%;
	}
</style>
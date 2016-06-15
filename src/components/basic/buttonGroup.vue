<template>
	<div class="radon-btn-group">
		<slot></slot>
	</div>
</template>
<style>
.radon-btn-group {
	display: inline-block;
}
.radon-btn-group>.radon-btn {
	margin: 0 -2.5px;
}
.radon-btn-group>.radon-btn:first-child:not(:last-child) {
	border-bottom-right-radius: 0;
    border-top-right-radius: 0;
}
.radon-btn-group>.radon-btn:last-child:not(:first-child) {
	border-bottom-left-radius: 0;
    border-top-left-radius: 0;
}
.radon-btn-group>.radon-btn:not(:first-child):not(:last-child) {
    border-radius: 0;
}
</style>
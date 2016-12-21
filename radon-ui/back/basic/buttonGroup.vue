<template>
	<div class="rd-btn-group">
		<slot></slot>
	</div>
</template>
<style>
.rd-btn-group {
	display: inline-block;
}
.rd-btn-group>.rd-btn {
	margin: 0 -2.5px;
    &:hover,
    &:focus {
        position: relative;
    }
}
.rd-btn-group>.rd-btn:first-child:not(:last-child) {
	border-bottom-right-radius: 0;
    border-top-right-radius: 0;
}
.rd-btn-group>.rd-btn:last-child:not(:first-child) {
	border-bottom-left-radius: 0;
    border-top-left-radius: 0;
}
.rd-btn-group>.rd-btn:not(:first-child):not(:last-child) {
    border-radius: 0;
}
</style>
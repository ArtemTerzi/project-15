export function addSpinner(parent) {
	const murkup = `
	<div class="preload-wrapper load">
		<div class="preload">
			<div class="loader"></div>
		</div>
	</div>
	`
	parent.insertAdjacentHTML("beforeend", murkup);
}

 export function removeSpinner(parent) {
	parent.innerHTML = "";
}
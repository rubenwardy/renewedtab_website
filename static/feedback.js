// @license magnet:?xt=urn:btih:1f739d935676111cfff4b4693e3816e664797050&dn=gpl-3.0.txt GPL-v3-or-Later

// Other field
const otherReason = document.querySelector("input[name='other_reason']");
if (otherReason) {
	const other = document.querySelector("input[name='reason'][value='other']");
	otherReason.addEventListener("click", () => {
		other.checked = true;
	});
}

// Get platform / browser / version info
{
	const urlParams = new URLSearchParams(window.location.search);

	function copyField(name) {
		const value = urlParams.get(name);
		if (value) {
			const input = document.querySelector(`input[name='${name}']`);
			input.value = value ? value : "";
			input.removeAttribute("disabled");
		}
	}

	copyField("platform");
	copyField("browser");
	copyField("version");
}

document.querySelectorAll("input[type='checkbox']").forEach(el => {
	el.addEventListener("change", event => {
		const id = el.getAttribute("value");
		const extra = document.getElementById(`extra-${id}`);
		if (!extra) {
			return;
		}

		const textarea = extra.querySelector("textarea");
		if (event.currentTarget.checked) {
			extra.classList.remove("is-hidden");
			textarea.setAttribute("required", "required");
		} else {
			extra.classList.add("is-hidden");
			textarea.removeAttribute("required");
		}
	})
});

// @license-end

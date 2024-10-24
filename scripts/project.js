let lastModified = new Date(document.lastModified);
const modify = document.querySelector("#lastModified");
modify.innerHTML = `Last Modified: <span class="highlight">${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "medium"
	}
).format(lastModified)}</span>`;

const year = document.querySelector("#currentyear");
const current = new Date()
year.innerHTML = `&copy ${current.getFullYear()}`
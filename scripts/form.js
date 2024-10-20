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

const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];
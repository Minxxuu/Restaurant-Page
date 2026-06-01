export default function renderHome() {
	const content = document.getElementById("content");

	content.replaceChildren();

	const header = document.createElement("h1");
	header.textContent = "Welcome to our restaurant!";

	const info = document.createElement("p");
	info.textContent = "Fresh food, warm service, and a calm dining space.";

	content.append(header, info);
}

import "./output.css";
export default function renderHome() {
	const content = document.getElementById("content");

	content.replaceChildren();

	const header = document.createElement("h1");
	header.textContent = "Welcome to our restaurant!";
    header.className = "text-3xl font-bold underline text-blue-500 flex justify-center items-center";

	const info = document.createElement("p");
	info.textContent = "Fresh food, warm service, and a calm dining space.";
    info.className = "bg-gray-100 p-4 rounded-lg text-gray-700 border border-gray-300 ml-2 mt-4 w-1/2 flex justify-center items-center";

	content.append(header, info);
}

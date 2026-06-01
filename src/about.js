import "./output.css";
const aboutP = document.createElement("p");
aboutP.textContent = "We are a family-owned restaurant that has been serving delicious meals for over 20 years. Our commitment to using fresh, locally-sourced ingredients and providing exceptional service has made us a favorite among food lovers in the community. We take pride in creating a warm and welcoming atmosphere where our guests can enjoy a memorable dining experience. Whether you're looking for a romantic dinner, a family gathering, or a casual meal with friends, we have something for everyone on our menu. Come visit us and taste the difference that passion and dedication can make in every dish we serve.";

aboutP.className = "bg-gray-100 p-4 rounded-lg text-gray-700 border border-gray-300 ml-2";

const aboutHeader = document.createElement("h1");
aboutHeader.textContent = "About Us";
aboutHeader.className = "bg-red-500 text-white p-4 rounded-lg text-3xl font-bold mb-4 border border-red-700";

export default function renderAbout() {
    const content = document.getElementById("content");
    content.replaceChildren();
    content.append(aboutHeader);
    content.append(aboutP);
}
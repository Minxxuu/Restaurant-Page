let menuitem = document.createElement("h1");
menuitem.textContent = "Menu";


export default function renderMenu() {
    const content = document.getElementById("content");
    content.replaceChildren();
    content.append(menuitem);
}
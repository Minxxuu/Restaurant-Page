let menuitem = document.createElement("h1");
menuitem.textContent = "Menu";

let menuItems = document.createElement("ul");
menuItems.className = "list-disc list-inside bg-gray-100 p-4 rounded-lg text-gray-700 border border-gray-300 ml-2 mt-4 w-1/2";

let item1 = document.createElement("li");
item1.textContent = "Spaghetti Carbonara - $12.99";
let item2 = document.createElement("li");
item2.textContent = "Margherita Pizza - $10.99";
let item3 = document.createElement("li");
item3.textContent = "Caesar Salad - $8.99";

menuItems.append(item1, item2, item3);
menuitem.append(menuItems);

export default function renderMenu() {
    const content = document.getElementById("content");
    content.replaceChildren();
    content.append(menuitem);
}
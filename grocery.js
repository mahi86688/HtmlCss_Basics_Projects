let bgContainerEle = document.createElement("div");
document.body.appendChild(bgContainerEle);
bgContainerEle.classList.add("bg-container");

let headingEle = document.createElement("h1");
headingEle.classList.add("Grocery-heading");
headingEle.textContent = "Grocery List"
bgContainerEle.appendChild(headingEle );

let ulcontainerEle = document.createElement("ul");
ulcontainerEle.classList.add("list-conatiner");
bgContainerEle.appendChild(ulcontainerEle);


let EachElements = ["Milk","Peanut butter","Choco chips","Cup cakes","Tomoto sause","Noodle"];
for (groceryItem of EachElements){
    let listEle = document.createElement("li");
    listEle.textContent = groceryItem;
    ulcontainerEle.appendChild(listEle);
}
let inputBg = document.createElement("div");
bgContainerEle.append(inputBg);
inputBg.classList.add("input-chekbox");


let checkbocEle = document.createElement("input");
checkbocEle.type = "checkbox";
checkbocEle.id = "delievryMode";
inputBg.appendChild(checkbocEle);

let lableEle = document.createElement("label");
lableEle.setAttribute("for","delievryMode");
lableEle.textContent = "Need Home delivery";
lableEle.classList.add("lb-Element");
inputBg.appendChild(lableEle);

let buttonbg = document.createElement("div");
bgContainerEle.append(buttonbg);
buttonbg.classList.add("button-bg");

let buttonEle = document.createElement("button");
buttonEle.textContent = "Proceed to pay";
buttonEle.classList.add("button");
buttonbg.appendChild(buttonEle);














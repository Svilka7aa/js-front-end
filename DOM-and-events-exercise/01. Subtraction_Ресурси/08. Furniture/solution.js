function solve() { 
  const button = document.querySelector("#exercise button");
  button.addEventListener("click", parseFurnitureInput);

  const buyButton = document.querySelector("#exercise button:nth-of-type(2)")
  buyButton.addEventListener("click", buySelectedFurniture);
}

function buySelectedFurniture() {
  const checkBoxes = Array.from(document.querySelectorAll("input[type='checkbox']:checked"));
  checkBoxes.map(checkBox => {
    const row = checkBox.parentElement.parentElement;
    const name = row.querySelector("td:nth-of-type(2)").textContent;
    const price = row.querySelector("td:nth-of-type(3)").textContent;
    const decFactor = row.querySelector("td:nth-of-type(4)").textContent;
    
    return {name, price, decFactor}
  })
}

function parseFurnitureInput () {
  const input = JSON.parse(document.querySelector("#exercise textarea").value);
  const tableBody = document.querySelector("tbody");

  input.map(furniture => {
    const row = document.createElement("tr");

    

    const nameCell = document.createElement("td");
    nameCell.textContent = furniture.name;

    const priceCell = document.createElement("td");
    priceCell.textContent = furniture.price;

    const decorationFactirCell = document.createElement("td");
    decorationFactirCell.textContent = furniture.decFactor;


    const checkCell = document.createElement("td");
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox"
    checkCell.appendChild(checkBox)


    row.appendChild(createImgCell(furniture.img));
    row.appendChild(nameCell);
    row.appendChild(priceCell);
    row.appendChild(decorationFactirCell);
    row.appendChild(checkCell)

    return row;
  }).forEach(row => tableBody.appendChild(row));
}

function createImgCell(src) {
  const imageCell = document.createElement("td");
    const image = document.createElement("img");
    image.src = src;
    imageCell.appendChild(image)
    return imageCell
}
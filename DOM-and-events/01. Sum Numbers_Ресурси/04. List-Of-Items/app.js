function addItem() {
    // console.log('TODO:...');
    const value = document.querySelector("#newItemText").value;
    
    // document.querySelector("ul").innerHTML += `<li>${value}</li>`

    const item = document.createElement("li");
    item.textContent = value
    document.querySelector("ul").appendChild(item)
}
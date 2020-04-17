function createPosition(position) {
  const {
    numPosition,
    name,
    scaling = "1/1",
    count = 1,
    price = 10,
    pku = true,
    capasity = 5,
    location = "",
    store = "",
    discount = "Весна",
  } = position;

  const numPositionTd = document.createElement("td");
  numPositionTd.innerText = numPosition;
  const nameTd = document.createElement("td");
  nameTd.innerText = name;
  const scalingTd = document.createElement("td");
  scalingTd.innerText = scaling;
  const countTd = document.createElement("td");
  countTd.innerText = count.toFixed(3);
  const priceTd = document.createElement("td");
  priceTd.innerText = price.toFixed(2);

  const sumTd = document.createElement("td");
  sumTd.innerText = (count * price).toFixed(2);

  const pkuCheckbox = document.createElement("input");
  pkuCheckbox.type = "checkbox";
  pkuCheckbox.checked = pku ? "checked" : undefined;
  pkuCheckbox.disabled = "disabled";
  const pkuTd = document.createElement("td");
  pkuTd.appendChild(pkuCheckbox);
  const capasityTd = document.createElement("td");
  capasityTd.innerText = capasity.toFixed(3);
  const locationTd = document.createElement("td");
  locationTd.innerText = location;
  const storeTd = document.createElement("td");
  storeTd.innerText = store;
  const discountTd = document.createElement("td");
  discountTd.innerText = discount;

  const row = document.createElement("tr");
  row.appendChild(numPositionTd);
  row.appendChild(nameTd);
  row.appendChild(scalingTd);
  row.appendChild(countTd);
  row.appendChild(priceTd);
  row.appendChild(sumTd);
  row.appendChild(pkuTd);
  row.appendChild(capasityTd);
  row.appendChild(locationTd);
  row.appendChild(storeTd);
  row.appendChild(discountTd);

  return row;
}

function insertPosition(position) {
  const table = document.getElementsByClassName("table-products_content");
  if (table.length === 0) return;

  const rows = table[0].getElementsByTagName("tr");
  const countAll = rows.length;
  const newRow = createPosition({ ...position, numPosition: countAll + 1 });
  newRow.onclick = () => {
    for (let i = 0; i < rows.length; i++) {
      rows[i].classList.remove("selected");
    }

    newRow.classList.add("selected");
  };

  table[0].appendChild(newRow);
}

insertPosition({ name: "demo1" });
insertPosition({ name: "demo2" });
insertPosition({ name: "demo3" });

function removePosition() {
  const table = document.getElementsByClassName("table-products_content");
  if (table.length === 0) return;

  const selected = table[0].getElementsByClassName("selected");
  if (selected.length === 0) return;

  table[0].removeChild(selected[0]);
}

async function onSearchPosition(text) {
  if (!text) return [];

  const response = await fetch("http://127.0.0.1/data.json");
  const data = await response.json();

  const searchText = text.toLowerCase();

  return data
    .filter((item) =>
      item.normativedocumentation
        ? item.normativedocumentation.toLowerCase().indexOf(searchText) >= 0
        : false
    )
    .map((item) => ({ name: item.normativedocumentation }));
}

async function onSearch(text) {
  const positions = await onSearchPosition(text);

  const modal = document.getElementsByClassName("search-input__modal");
  if (modal.length === 0) return;

  console.info({ positions });

  if (positions.length > 0) {
    const ul = document.createElement("ul");
    ul.classList.add("search-input__list");
    positions.forEach((item) => {
      const li = document.createElement("li");
      li.innerText = item.name;
      ul.appendChild(li);

      li.addEventListener("click", insertFoundPosition, li.textContent, modal);
    });

    modal[0].classList.add("search-input__modal--show");
    modal[0].innerHTML = "";
    modal[0].appendChild(ul);
  } else {
    modal[0].classList.remove("search-input__modal--show");
    modal[0].innerHTML = "";
  }
}

// search-input__list

const input = document.getElementsByClassName("search-input__input");
if (input.length > 0) {
  input[0].onkeyup = () => {
    console.info("onkeyup", input[0].value);
    onSearch(input[0].value);
  };
}

function insertFoundPosition(elem) {
  const text = elem.srcElement.textContent;
  insertPosition({ name: text });

  const modal = document.getElementsByClassName("search-input__modal");
  const input = document.getElementsByClassName("search-input__input");
  
  input[0].value = "";
  modal[0].classList.remove("search-input__modal--show");
  modal[0].innerHTML = "";
}

document.addEventListener("keydown", (event) => {
  if (event.code === "KeyD" || event.code === "F8") {
    removePosition();
    event.preventDefault();
  } else if (event.code === "F2") {
    alert("Открываем форму подбора товаров");
    event.preventDefault();
  } else if (event.code === "F3") {
    alert("Разукомплектация");
    event.preventDefault();
  } else if (event.code === "F4") {
    alert("Электронный чек");
    event.preventDefault();
  } else if (event.code === "F5") {
    alert("Количество");
    event.preventDefault();
  } else if (event.code === "F6") {
    alert("Возврат");
    event.preventDefault();
  } else if (event.code === "F7") {
    alert("Акции");
    event.preventDefault();
  } else if (event.code === "F9") {
    alert("Чек");
    event.preventDefault();
  } else if (event.code === "F11") {
    alert("Наличные");
    event.preventDefault();
  } else if (event.code === "F12") {
    alert("Сменить пользователя");
    event.preventDefault();
  };
}, false);

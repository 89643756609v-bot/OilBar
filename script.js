// --- Список товаров ---
const oils = [
  { name: "LUKOIL GENESIS ARMORTECH 5W-40", price: 12240, image: "images/LUKOIL GENESIS ARMORTECH 5W-40.jpg", inStock: true },
  { name: "Gazpromneft PREMIUM N 5W-40", price: 10500, image: "images/Gazpromneft PREMIUM N 5W-40.jpg", inStock: true },
  { name: "AFINOL EXTREME 5W-40", price: 15000, image: "images/AFINOL EXTREME 5W-40.jpg", inStock: true },
  { name: "FUCHS TITAN GT1 PRO 5W-40", price: 18500, image: "images/FUCHS TITAN GT1 PRO 5W-40.jpg", inStock: true },
  { name: "Mobil 1 Extended Performance 5W-40", price: 24000, image: "images/Mobil 1 Extended Performance 5W-40.jpg", inStock: true },
  { name: "ARECA F4500 5W-40", price: 11197, image: "images/ARECA F4500 5W-40.jpg", inStock: true },
  { name: "SINTEC PLATINUM 5W-40", price: 8500, image: "images/SINTEC PLATINUM 5W-40.jpg", inStock: true },
  { name: "KIXX G1 SP 5W-40", price: 13500, image: "images/KIXX G1 SP 5W-40.jpg", inStock: true },
  { name: "ZIC X7 5W-40", price: 14000, image: "images/ZIC X7 5W-40.jpg", inStock: true },
  { name: "TAKAYAMA 5W-40", price: 11500, image: "images/TAKAYAMA 5W-40.jpg", inStock: true },
  { name: "ENEOS CI-4 5W-40", price: 18000, image: "images/ENEOS CI-4 5W-40.jpg", inStock: true },
  { name: "SHELL HELIX ULTRA 5W-40", price: 20000, image: "images/SHELL HELIX ULTRA 5W-40.jpg", inStock: true },
  { name: "ROSNEFT MAGNUM ULTRATEC 5W-40", price: 10000, image: "images/ROSNEFT MAGNUM ULTRATEC 5W-40.jpg", inStock: true },
  { name: "Castrol EDGE 5W-40", price: 25900, image: "images/Castrol EDGE 5W-40.jpg", inStock: true },
  { name: "Motul 8100 X-cess 5W-40", price: 27000, image: "images/Motul 8100 X-cess 5W-40.jpg", inStock: true },
  { name: "Liqui Moly Top Tec 4200 5W-40", price: 28000, image: "images/Liqui Moly Top Tec 4200 5W-40.jpg", inStock: true },
  { name: "Valvoline SynPower 5W-40", price: 17500, image: "images/Valvoline SynPower 5W-40.jpg", inStock: true },
  { name: "Total Quartz 9000 5W-40", price: 14500, image: "images/Total Quartz 9000 5W-40.jpg", inStock: true },
  { name: "Ravenol High Tech 5W-40", price: 19500, image: "images/Ravenol High Tech 5W-40.jpg", inStock: true },
  { name: "Petronas Syntium 5W-40", price: 16500, image: "images/Petronas Syntium 5W-40.jpg", inStock: true },
  { name: "G-Energy Synthetic 5W-40", price: 12000, image: "images/G-Energy Synthetic 5W-40.jpg", inStock: true },
  { name: "ELF Evolution 900 NF 5W-40", price: 13700, image: "images/ELF Evolution 900 NF 5W-40.jpg", inStock: true },
  { name: "Pennzoil Platinum 5W-40", price: 22000, image: "images/Pennzoil Platinum 5W-40.jpg", inStock: true },
  { name: "Rosneft Premium 5W-40", price: 9500, image: "images/Rosneft Premium 5W-40.jpg", inStock: true },
  { name: "Mannol High Tech 5W-40", price: 11000, image: "images/Mannol High Tech 5W-40.jpg", inStock: true },
  { name: "XADO Atomic Oil 5W-40", price: 21000, image: "images/XADO Atomic Oil 5W-40.jpg", inStock: true },
  { name: "Liqui Moly Synthoil 5W-40", price: 35000, image: "images/Liqui Moly Synthoil 5W-40.jpg", inStock: true },
  { name: "AMSOIL Signature Series 5W-40", price: 30000, image: "images/AMSOIL Signature Series 5W-40.jpg", inStock: true },
  { name: "Shell Helix Diesel Ultra 5W-40", price: 21500, image: "images/Shell Helix Diesel Ultra 5W-40.jpg", inStock: true },
  { name: "ZIC X7 5W-40", price: 17000, image: "images/ZIC X7 5W-40.jpg", inStock: true },
  { name: "ZIC X9 5W-40", price: 17000, image: "images/ZIC X9 5W-40.jpg", inStock: true }
];

const antifreezes = [
  { name: "Felix G12", price: 4200, image: "images/Felix G12.jpg", inStock: true },
  { name: "Sintec Antifreeze G12+", price: 5010, image: "images/Sintec Antifreeze G12+.jpg", inStock: true },
  { name: "Nord Antifreeze", price: 4500, image: "images/Nord Antifreeze.jpg", inStock: true },
  { name: "Valesco Antifreeze", price: 4000, image: "images/Valesco Antifreeze.jpg", inStock: true },
  { name: "Teta Antifreeze", price: 3500, image: "images/Teta Antifreeze.jpg", inStock: true },
  { name: "Полярник Антифриз", price: 3800, image: "images/Антифриз Полярник.jpg", inStock: true }
];

// --- Функция создания карточки товара ---
function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "product-card";

  const img = document.createElement("img");
  img.src = product.image;
  img.alt = product.name;

  const name = document.createElement("p");
  name.className = "product-name";
  name.textContent = product.name;

  const price = document.createElement("p");
  price.className = "product-price";
  price.textContent = product.price + " ₸";

  const stock = document.createElement("p");
  stock.className = product.inStock ? "in-stock" : "out-of-stock";
  stock.textContent = product.inStock ? "В наличии" : "Нет в наличии";

  card.append(img, name, price, stock);
  return card;
}

// --- Добавляем карточки ---
const oilList = document.getElementById("oilList");
oils.forEach(oil => oilList.appendChild(createProductCard(oil)));

const antifreezeList = document.getElementById("antifreezeList");
antifreezes.forEach(a => antifreezeList.appendChild(createProductCard(a)));

// --- Логика для шторок ---
const toggleOils = document.getElementById("toggleOils");
const toggleAntifreeze = document.getElementById("toggleAntifreeze");
const oilPanel = document.getElementById("oilPanel");
const antifreezePanel = document.getElementById("antifreezePanel");

toggleOils.addEventListener("click", () => {
  oilPanel.classList.toggle("open");
  toggleOils.classList.toggle("active");
});

toggleAntifreeze.addEventListener("click", () => {
  antifreezePanel.classList.toggle("open");
  toggleAntifreeze.classList.toggle("active");
});

// --- Админ-панель ---
const adminBtn = document.getElementById("adminLoginBtn");
const adminPanel = document.getElementById("adminPanel");
const adminProducts = document.getElementById("adminProducts");
const saveBtn = document.getElementById("saveChanges");
const logoutBtn = document.getElementById("logoutBtn");

// Простой пароль (оставил как у тебя)
const ADMIN_PASSWORD = "Михаил Бородай";

// Функция перерисовки каталога (используется страницей и админкой)
function renderProducts() {
  // Очищаем существующее содержимое списков
  const oilList = document.getElementById("oilList");
  const antifreezeList = document.getElementById("antifreezeList");
  if (!oilList || !antifreezeList) return;

  oilList.innerHTML = "";
  antifreezeList.innerHTML = "";

  // Создаём карточки как в оригинале
  const createProductCardLocal = (product) => {
    const card = document.createElement("div");
    card.className = "product-card";

    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.name;

    const name = document.createElement("p");
    name.className = "product-name";
    name.textContent = product.name;

    const price = document.createElement("p");
    price.className = "product-price";
    price.textContent = product.price + " ₸";

    const stock = document.createElement("p");
    stock.className = product.inStock ? "in-stock" : "out-of-stock";
    stock.textContent = product.inStock ? "В наличии" : "Нет в наличии";

    card.append(img, name, price, stock);
    return card;
  };

  oils.forEach(o => oilList.appendChild(createProductCardLocal(o)));
  antifreezes.forEach(a => antifreezeList.appendChild(createProductCardLocal(a)));
}

// Вход администратора
adminBtn.addEventListener("click", () => {
  const pass = prompt("Введите пароль администратора");
  if (pass === ADMIN_PASSWORD) {
    localStorage.setItem("admin", "true");
    showAdminPanel();
  } else {
    alert("Неверный пароль");
  }
});

// Выход
logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("admin");
  adminPanel.style.display = "none";
});

// Если уже вошёл ранее
if (localStorage.getItem("admin") === "true") {
  showAdminPanel();
}

function showAdminPanel() {
  adminPanel.style.display = "block";
  renderAdminPanel();
}

const inputPassword = prompt("Введите пароль администратора:");

// Удаляем пробелы по краям
const cleanPassword = inputPassword.trim();

if (cleanPassword === "твой_пароль") {
  document.querySelector(".admin-panel").style.display = "block";
} else {
  alert("Неверный пароль!");
}

// Рендер админского интерфейса — редактирование, добавление, удаление
function renderAdminPanel() {
  adminProducts.innerHTML = "";

  // Кнопка добавить товар
  const addSection = document.createElement("div");
  addSection.style.margin = "10px 0";
  addSection.innerHTML = `
    <h3>Добавить новый товар</h3>
    Тип: 
    <select id="newType">
      <option value="oil">Масло</option>
      <option value="antifreeze">Антифриз</option>
    </select><br><br>
    Название: <input id="newName" type="text" style="width:300px;"><br>
    Цена (₸): <input id="newPrice" type="number" style="width:150px;"><br>
    Путь к изображению: <input id="newImage" type="text" style="width:300px;" placeholder="images/example.jpg"><br>
    В наличии: <input id="newStock" type="checkbox" checked><br><br>
    <button id="addProductBtn">➕ Добавить товар</button>
    <hr>
  `;
  adminProducts.appendChild(addSection);

  // Обработчик добавления товара
  document.getElementById("addProductBtn").onclick = () => {
  const type = document.getElementById("newType").value;
  const name = document.getElementById("newName").value.trim();
  const price = parseInt(document.getElementById("newPrice").value) || 0;
  const image = document.getElementById("newImage").value.trim() || "images/default.jpg";
  const inStock = document.getElementById("newStock").checked;

  if (!name) {
    alert("Введите название товара.");
    return;
  }

  const newProduct = { name, price, image, inStock };

  if (type === "oil") {
    oils.push(newProduct);
  } else {
    antifreezes.push(newProduct);
  }

  saveToLocalStorage();  // Сохраняем немедленно
  renderProducts();      // Обновляем каталог

  // Не перерисовываем панель сразу, а просто добавляем визуально
  const notice = document.createElement("p");
  notice.style.color = "green";
  notice.textContent = "✅ Товар добавлен и сохранён!";
  adminProducts.insertBefore(notice, adminProducts.firstChild);

  // Через секунду обновляем панель (чтобы не стиралось мгновенно)
  setTimeout(() => renderAdminPanel(), 1000);
};

  // Раздел редактирования существующих товаров
  const allProducts = [...oils, ...antifreezes];
  allProducts.forEach((p, i) => {
    const container = document.createElement("div");
    container.style.margin = "8px 0";
    container.style.padding = "8px";
    container.style.background = "#ffffffff";
    container.style.color = "#151730";
    container.style.borderRadius = "6px";

    // Определяем тип и локальный индекс
    const isOil = i < oils.length;
    const localIndex = isOil ? i : i - oils.length;
    const typeLabel = isOil ? "Масло" : "Антифриз";

    container.innerHTML = `
      <b>${typeLabel} — ${p.name}</b><br>
      Название: <input type="text" id="name${i}" value="${p.name}" style="width:320px;"><br>
      Цена: <input type="number" id="price${i}" value="${p.price}" style="width:150px;"> ₸<br>
      В наличии: <input type="checkbox" id="stock${i}" ${p.inStock ? "checked" : ""}><br>
      <button id="save${i}">💾 Сохранить</button>
      <button id="delete${i}">🗑 Удалить</button>
    `;

    adminProducts.appendChild(container);

    // Сохранение конкретного товара
    document.getElementById(`save${i}`).onclick = () => {
      const newName = document.getElementById(`name${i}`).value.trim();
      const newPrice = parseInt(document.getElementById(`price${i}`).value) || 0;
      const newStock = document.getElementById(`stock${i}`).checked;

      if (!newName) { alert("Название не может быть пустым."); return; }

      if (isOil) {
        oils[localIndex].name = newName;
        oils[localIndex].price = newPrice;
        oils[localIndex].inStock = newStock;
      } else {
        antifreezes[localIndex].name = newName;
        antifreezes[localIndex].price = newPrice;
        antifreezes[localIndex].inStock = newStock;
      }

      saveToLocalStorage();
      renderProducts();
      alert("Изменения применены.");
    };

    // Удаление конкретного товара
    document.getElementById(`delete${i}`).onclick = () => {
      if (!confirm(`Удалить товар "${p.name}"?`)) return;

      if (isOil) oils.splice(localIndex, 1);
      else antifreezes.splice(localIndex, 1);

      saveToLocalStorage();
      renderProducts();
      renderAdminPanel(); // обновляем список в админке
    };
  });
}

// Сохранение в localStorage (сериализация)
function saveToLocalStorage() {
  localStorage.setItem("oils", JSON.stringify(oils));
  localStorage.setItem("antifreezes", JSON.stringify(antifreezes));
}

// Сохранение изменений (кнопка в админке)
saveBtn.addEventListener("click", () => {
  // Собираем все поля, которые сейчас есть в админке (универсально)
  const allProducts = [...oils, ...antifreezes];
  allProducts.forEach((p, i) => {
    const priceInput = document.getElementById(`price${i}`);
    const nameInput = document.getElementById(`name${i}`);
    const stockInput = document.getElementById(`stock${i}`);

    if (priceInput) p.price = parseInt(priceInput.value) || 0;
    if (nameInput) p.name = nameInput.value.trim() || p.name;
    if (stockInput !== null && stockInput !== undefined) p.inStock = stockInput.checked;
  });

  saveToLocalStorage();
  renderProducts();
  alert("Изменения сохранены!");
});

// --- Загрузка сохранённых данных ---
window.addEventListener("load", () => {
  const savedOils = localStorage.getItem("oils");
  const savedAntifreezes = localStorage.getItem("antifreezes");

  if (savedOils) {
    try {
      const parsed = JSON.parse(savedOils);
      oils.length = 0;
      oils.push(...parsed);
    } catch (e) { console.error("Ошибка парсинга savedOils", e); }
  }

  if (savedAntifreezes) {
    try {
      const parsed = JSON.parse(savedAntifreezes);
      antifreezes.length = 0;
      antifreezes.push(...parsed);
    } catch (e) { console.error("Ошибка парсинга savedAntifreezes", e); }
  }

  // Рисуем каталог после загрузки данных
  renderProducts();

  // Если админ залогинен — показать панель
  if (localStorage.getItem("admin") === "true") {
    showAdminPanel();
  }
});

function toggleButton(button) {
  button.classList.toggle("active");
}
function updateButtonText(action, color) {
  const button = document.getElementById("buttonText");
  button.textContent = action;
  button.style.backgroundColor = color;
}
function toggleDropdown() {
  const dropdownContent = document.querySelector(".dropdown-content");
  dropdownContent.style.display =
    dropdownContent.style.display === "block" ? "none" : "block";
}

// -----------------------------//

function toggleButton1(button) {
  button.classList.toggle("active");
}
function updateButtonText1(action, color) {
  const button = document.getElementById("buttonText1");
  button.textContent = action;
  button.style.backgroundColor = color;
}
function toggleDropdown1() {
  const dropdownContent = document.querySelector("#dropdown-content");
  dropdownContent.style.display =
    dropdownContent.style.display === "block" ? "none" : "block";
}

// -----------------------------//

function toggleButton2(button) {
  button.classList.toggle("active");
}
function updateButtonText2(action, color) {
  const button = document.getElementById("buttonText2");
  button.textContent = action;
  button.style.backgroundColor = color;
}
function toggleDropdown2() {
  const dropdownContent = document.querySelector("#dropdown-content2");
  dropdownContent.style.display =
    dropdownContent.style.display === "block" ? "none" : "block";
}

// -----------------------------//

function toggleButton3(button) {
  button.classList.toggle("active");
}
function updateButtonText3(action, color) {
  const button = document.getElementById("buttonText3");
  button.textContent = action;
  button.style.backgroundColor = color;
}
function toggleDropdown3() {
  const dropdownContent = document.querySelector("#dropdown-content3");
  dropdownContent.style.display =
    dropdownContent.style.display === "block" ? "none" : "block";
}

// -----------------------------//

function toggleButton4(button) {
  button.classList.toggle("active");
}
function updateButtonText4(action, color) {
  const button = document.getElementById("buttonText4");
  button.textContent = action;
  button.style.backgroundColor = color;
}
function toggleDropdown4() {
  const dropdownContent = document.querySelector("#dropdown-content4");
  dropdownContent.style.display =
    dropdownContent.style.display === "block" ? "none" : "block";
}

// -----------------------------//

function toggleButton5(button) {
  button.classList.toggle("active");
}
function updateButtonText5(action, color) {
  const button = document.getElementById("buttonText5");
  button.textContent = action;
  button.style.backgroundColor = color;
}
function toggleDropdown5() {
  const dropdownContent = document.querySelector("#dropdown-content5");
  dropdownContent.style.display =
    dropdownContent.style.display === "block" ? "none" : "block";
}

// -----------------------------//

function toggleButton6(button) {
  button.classList.toggle("active");
}
function updateButtonText6(action, color) {
  const button = document.getElementById("buttonText6");
  button.textContent = action;
  button.style.backgroundColor = color;
}
function toggleDropdown6() {
  const dropdownContent = document.querySelector("#dropdown-content6");
  dropdownContent.style.display =
    dropdownContent.style.display === "block" ? "none" : "block";
}

// -----------------------------//

function toggleButton7(button) {
  button.classList.toggle("active");
}
function updateButtonText7(action, color) {
  const button = document.getElementById("buttonText7");
  button.textContent = action;
  button.style.backgroundColor = color;
}
function toggleDropdown7() {
  const dropdownContent = document.querySelector("#dropdown-content7");
  dropdownContent.style.display =
    dropdownContent.style.display === "block" ? "none" : "block";
}

// -----------------------------//
// FIXME: Tách hàm để rõ nghĩa cho người đọc và dễ bảo trì

const checkAll = document.getElementById("check-all");
const checkItems = document.querySelectorAll(".check-item");

checkAll.addEventListener("change", function () {
  checkItems.forEach((item) => {
    item.checked = checkAll.checked;
  });
});

checkItems.forEach((item) => {
  item.addEventListener("change", function () {
    checkAll.checked = [...checkItems].every((item) => item.checked);
  });
});

// -----------------------------//

document.getElementById("toggleButton").addEventListener("click", function () {
  const formElements = document.getElementById("formElements");
  if (formElements.classList.contains("hidden")) {
    formElements.classList.remove("hidden");
  } else {
    formElements.classList.add("hidden");
  }
});

// -----------------------------//

document.querySelector(".loc").addEventListener("click", function (e) {
  const button = e.currentTarget;
  const rect = button.getBoundingClientRect();

  const ripple = document.createElement("span");
  ripple.classList.add("ripple");

  const rippleX = e.clientX - rect.left;
  const rippleY = e.clientY - rect.top;

  ripple.style.left = `${rippleX - 50}px`;
  ripple.style.top = `${rippleY - 50}px`;

  button.appendChild(ripple);

  ripple.addEventListener("animationend", () => {
    ripple.remove();
  });
});

// -----------------------------//

document
  .querySelector(".dongbosanpham")
  .addEventListener("click", function (e) {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();

    const ripple = document.createElement("span");
    ripple.classList.add("ripple");

    const rippleX = e.clientX - rect.left;
    const rippleY = e.clientY - rect.top;

    ripple.style.left = `${rippleX - 50}px`;
    ripple.style.top = `${rippleY - 50}px`;

    button.appendChild(ripple);

    ripple.addEventListener("animationend", () => {
      ripple.remove();
    });
  });

// -----------------------------//

document.querySelector(".add-sanpham").addEventListener("click", function (e) {
  const button = e.currentTarget;
  const rect = button.getBoundingClientRect();

  const ripple = document.createElement("span");
  ripple.classList.add("ripple");

  const rippleX = e.clientX - rect.left;
  const rippleY = e.clientY - rect.top;

  ripple.style.left = `${rippleX - 50}px`;
  ripple.style.top = `${rippleY - 50}px`;

  button.appendChild(ripple);

  ripple.addEventListener("animationend", () => {
    ripple.remove();
  });
});

// -----------------------------//

const input = document.getElementById("finditem");

input.addEventListener("focus", () => {
  input.style.width = "500px"; // Tăng kích thước khi focus
});

input.addEventListener("blur", () => {
  input.style.width = "20%"; // Trở lại kích thước ban đầu khi blur
});

// -----------------------------//

const apiURL = "https://6752728bd1983b9597b6399b.mockapi.io/api/danhsach";

// Lấy bảng từ DOM
const tableBody = document.querySelector("#data-table tbody");

// Lấy dữ liệu từ MockAPI
// FIXME: Tách hàm để rõ nghĩa cho người đọc và dễ bảo trì
fetch(apiURL)
  .then((response) => response.json()) // Chuyển đổi dữ liệu JSON
  .then((data) => {
    // Lặp qua mỗi mục dữ liệu và chèn vào bảng
    data.forEach((user) => {
      const row = document.createElement("tr");

      //   FIXME: Tên field trong model phải đặt theo một quy chuẩn
      // FIXME: Tên hàm củng phải đặt theo một quy chuẩn (dòng 272, 272, ...)
      // TODO: Tham khảo link: https://viblo.asia/p/javascript-naming-conventions-1Je5Ea1A5nL
      row.innerHTML = `
        <td><input type="checkbox" class="checkbox" data-id="${user.masanpham}"></td>
        <th>${user.masanpham}</th>
        <th>${user.Hinhanh}</th>
        <th>${user.Tensanpham}</th>
        <th>${user.giaban}</th>
        <th>${user.Khohang}</th>
        <th>${user.Thutuhienthi}</th>
        <th>
            <div class="toggle-container">
                <button class="toggle-button"></button>
            </div>
        </th>
        <th>
            <div class="dropdown">
                <button class="dropdown-btn">Đang bán</button>
            </div>
        </th>
        <th>
            <i class="fas fa-info-circle" id="toggleChitiet" onclick="toggleChitiet()" ></i>&nbsp;
            <i class="far fa-edit" id="togglesua" onclick="togglesua()"></i>&nbsp; 
            <i class="fas fa-trash-alt" id="toggleXoa" onclick="toggleXoa()"></i>
        </th>
        `;

      // Thêm hàng vào bảng
      tableBody.appendChild(row);
    });
  })
  .catch((error) => console.log("Lỗi khi lấy dữ liệu:", error));

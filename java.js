// FIXME: Tách hàm để rõ nghĩa cho người đọc và dễ bảo trì
// Chuyển đổi trạng thái hoạt động của nút
function toggleButton(button) {
  button.classList.toggle("active");
}

// Cập nhật nút và màu nền
function updateButtonText(action, color) {
  const button = document.getElementById("buttonText");
  button.textContent = action;
  button.style.backgroundColor = color;
}

// Chuyển đổi chế độ hiển thị thả xuống
function toggleDropdown() {
  const dropdownContent = document.querySelector(".dropdown-content");
  dropdownContent.style.display =
    dropdownContent.style.display === "block" ? "none" : "block";
}

// Chức năng xử lý hiệu ứng gợn sóng khi nhấp vào nút
function addRippleEffect(event) {
  const button = event.currentTarget;
  const rect = button.getBoundingClientRect();

  const ripple = document.createElement("span");
  ripple.classList.add("ripple");

  const rippleX = event.clientX - rect.left;
  const rippleY = event.clientY - rect.top;

  ripple.style.left = `${rippleX - 50}px`;
  ripple.style.top = `${rippleY - 50}px`;

  button.appendChild(ripple);

  ripple.addEventListener("animationend", () => {
    ripple.remove();
  });
}

function fetchDataAndPopulateTable(apiURL) {
  const tableBody = document.querySelector("#data-table tbody");

  fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((user) => {
        const row = createTableRow(user);
        tableBody.appendChild(row);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
}

// FIXME: Tách hàm để rõ nghĩa cho người đọc và dễ bảo trì

function createTableRow(user) {
  const row = document.createElement("tr");
  //   FIXME: Tên field trong model phải đặt theo một quy chuẩn
  // FIXME: Tên hàm củng phải đặt theo một quy chuẩn (dòng 272, 272, ...)
  // TODO: Tham khảo link: https://viblo.asia/p/javascript-naming-conventions-1Je5Ea1A5nL
  row.innerHTML = `
    <th><input type="checkbox" class="checkbox" data-id="${user.masanpham}"></th>
    <th>${user.masanpham}</th>
    <th>${user.Hinhanh}</th>
    <th>${user.Tensanpham}</th>
    <th>${user.giaban}</th>
    <th>${user.Khohang}</th>
    <th>${user.Thutuhienthi}</th>
    <th><button class="toggle-button"></button></th>
    <th><div class="dropdown"><button class="dropdown-btn">Đang bán</button></div></th>
    <th>
      <i class="fas fa-info-circle" id="toggleChitiet" onclick="toggleChitiet()"></i>&nbsp;
      <i class="far fa-edit" id="togglesua" onclick="togglesua()"></i>&nbsp; 
      <i class="fas fa-trash-alt" id="toggleXoa" onclick="toggleXoa()"></i>
    </th>
  `;

  return row;
}

// Event listeners
document.getElementById("check-all").addEventListener("change", function () {
  const checkItems = document.querySelectorAll(".check-item");
  checkItems.forEach((item) => (item.checked = this.checked));
});

document.querySelectorAll(".check-item").forEach((item) => {
  item.addEventListener("change", function () {
    const checkAll = document.getElementById("check-all");
    checkAll.checked = [...document.querySelectorAll(".check-item")].every(
      (item) => item.checked
    );
  });
});

document.getElementById("toggleButton").addEventListener("click", function () {
  const formElements = document.getElementById("formElements");
  formElements.classList.toggle("hidden");
});

document
  .querySelectorAll(".loc, .dongbosanpham, .add-sanpham")
  .forEach((button) => {
    button.addEventListener("click", addRippleEffect);
  });

const input = document.getElementById("finditem");
input.addEventListener("focus", () => (input.style.width = "500px"));
input.addEventListener("blur", () => (input.style.width = "20%"));

// Fetch data and populate table
const apiURL = "https://6752728bd1983b9597b6399b.mockapi.io/api/danhsach";
fetchDataAndPopulateTable(apiURL);

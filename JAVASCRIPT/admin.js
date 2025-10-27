    document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach(item => {
        // 메뉴 제목 부분만 클릭으로 열고 닫기
        item.addEventListener("click", (e) => {
            // 클릭된 요소가 submenu 내부라면 — 작동하지 않도록 막음
            if (e.target.closest(".submenu-list")) return;

            // 다른 메뉴 닫기 (하나만 열리게)
            menuItems.forEach(i => {
                if (i !== item) i.classList.remove("active");
            });

            // 클릭한 메뉴 토글
            item.classList.toggle("active");
        });
    });

    // 서브메뉴 클릭 시 메뉴가 닫히지 않게 이벤트 중단
    const submenus = document.querySelectorAll(".submenu-list");
    submenus.forEach(submenu => {
        submenu.addEventListener("click", (e) => {
            e.stopPropagation(); // 상위 menu-item으로 이벤트 전달 차단
        });
    });
});

// 모달 열기 / 닫기
const modal = document.querySelector(".menu-modal");
const openBtn = document.querySelector(".btn-add");
const closeBtn = document.querySelector(".close-menu-modal");
const saveBtn = document.querySelector(".save-menu");

openBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// ↑↓ 버튼으로 순서 바꾸기
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("up") || e.target.classList.contains("down")) {
    const li = e.target.closest("li");
    const parent = li.parentNode;
    if (e.target.classList.contains("up") && li.previousElementSibling) {
      parent.insertBefore(li, li.previousElementSibling);
    } else if (e.target.classList.contains("down") && li.nextElementSibling) {
      parent.insertBefore(li.nextElementSibling, li);
    }
  }
});

// 저장 시 실제 반영 (콘솔 예시)
saveBtn.addEventListener("click", () => {
  const mainMenus = [...document.querySelectorAll(".main-menu-sort li")].map(li => li.textContent.trim());
  const subMenus = [...document.querySelectorAll(".submenu-sort li")].map(li => li.textContent.trim());

  console.log("새로운 메인 메뉴 순서:", mainMenus);
  console.log("새로운 서브 메뉴 순서:", subMenus);

  alert("순서가 저장되었습니다 (콘솔 확인)");
  modal.style.display = "none";
});
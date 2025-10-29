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

// 2025.10.28 수정

// 모달 열기/닫기
const modal = document.querySelector(".menu-modal");
const openBtn = document.querySelector(".btn-add");
const closeBtn = document.querySelector(".close-menu-modal");

openBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// 메뉴 헤더 클릭 → 아코디언 열기/닫기
document.querySelectorAll(".menu-header").forEach(header => {
  header.addEventListener("click", (e) => {
    if(e.target.closest("button")) return; // 버튼 클릭이면 토글 안함
    const submenu = header.nextElementSibling;
    if(submenu) {
      const current = getComputedStyle(submenu).display;
      submenu.style.display = current === "none" ? "block" : "none";
    }
  });
});

// ↑↓ 버튼 클릭 → 순서 변경 (메인 메뉴 + 서브메뉴)
document.querySelectorAll(".sort-btns button").forEach(button => {
  button.addEventListener("click", (e) => {
    e.stopPropagation(); // 버튼 클릭 시 menu-header 클릭 이벤트 방지
    const li = e.target.closest("li");
    const parent = li.parentNode;
    if(e.target.classList.contains("up") && li.previousElementSibling) {
      parent.insertBefore(li, li.previousElementSibling);
    } else if(e.target.classList.contains("down") && li.nextElementSibling) {
      parent.insertBefore(li.nextElementSibling, li);
    }
  });
});

// 저장 버튼 클릭 → 순서 출력 + 모달 닫기
 // DOM 로드 후 실행
  document.addEventListener("DOMContentLoaded", () => {
    const modal = document.querySelector(".menu-modal");
    const saveBtn = document.querySelector(".save-menu");

    if (!saveBtn || !modal) {
      console.error("저장 버튼 또는 모달을 찾을 수 없습니다.");
      return;
    }

    saveBtn.addEventListener("click", () => {
      alert("저장되었습니다");
      modal.style.display = "none";
    });
  });
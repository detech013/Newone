 // 캐시
  const popup = document.getElementById("popup");
  const box = document.querySelector(".password-box");
  const passwordInput = box.querySelector("input");
  const cancelBtn = document.getElementById("cancelBtn");
  const confirmBtn = document.getElementById("confirmBtn");

  // 기본 숨김 (CSS에도 display:none 해두는 것이 좋음)
  popup.style.display = "none";

  // 리스트 항목 클릭 시 팝업 열기 (열 때마다 초기화)
  document.querySelectorAll(".contact-list li").forEach(li => {
    li.addEventListener("click", () => {
      // 초기화
      passwordInput.value = "";
      box.classList.remove("error");

      // 팝업 보이기 (flex로 중앙정렬 가정)
      popup.style.display = "flex";
      // 입력 포커스
      passwordInput.focus();
    });
  });

  // 취소 버튼: 팝업 닫기 + 초기화
  cancelBtn.addEventListener("click", () => {
    popup.style.display = "none";
    passwordInput.value = "";
    box.classList.remove("error");
  });

  // 확인 버튼: 한 번만 리스너 등록 (중복 제거)
 confirmBtn.addEventListener("click", () => {
  const input = passwordInput.value.trim();
  const correctPassword = "1234";

  if (!input) {
    alert("비밀번호를 입력해 주세요.");
    return;
  }

  if (input === correctPassword) {
    alert("접근이 허용되었습니다");
    popup.style.display = "none";
    passwordInput.value = "";
    box.classList.remove("error");
  } else {
    box.classList.add("error");
    // ✅ focus 제거해서 빨간 테두리가 바로 보이도록
    passwordInput.blur();
    alert("비밀번호가 올바르지 않습니다.");
  }
});

  // (선택) overlay 클릭 시 닫기
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
      passwordInput.value = "";
      box.classList.remove("error");
    }
  });

  // (선택) 엔터로 확인
  passwordInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") confirmBtn.click();
  });
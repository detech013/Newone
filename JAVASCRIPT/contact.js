 // 취소 버튼 클릭 시 팝업 닫기
    document.getElementById("cancelBtn").addEventListener("click", function () {
      document.getElementById("popup").style.display = "none";
    });

    // 확인 버튼 클릭 시 동작 (비밀번호 예시 확인)
    document.getElementById("confirmBtn").addEventListener("click", function () {
      const input = document.querySelector(".password-box input").value.trim();
      const correctPassword = "1234"; // 예시용 비밀번호

      if (!input) {
        alert("비밀번호를 입력해 주세요.");
        return;
      }

      if (input === correctPassword) {
        alert("접근이 허용되었습니다!");
        // 페이지 이동 예시
        // location.href = "detail.html";
        document.getElementById("popup").style.display = "none";
      } else {
        alert("비밀번호가 올바르지 않습니다.");
      }
    });
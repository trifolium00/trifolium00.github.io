document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll(".link-text");

  links.forEach(link => {
    link.style.cursor = "pointer";  // 마우스 커서 모양 변경
    link.style.color = "blue";
    link.style.textDecoration = "underline";

    link.addEventListener("click", function() {
      const targetPage = this.dataset.page;  // data-page 속성 읽기
      window.location.href = targetPage;
    });
  });
});

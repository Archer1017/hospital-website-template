(function () {
  "use strict";

  var navToggle = document.querySelector(".nav-toggle");
  var mainNav = document.querySelector(".main-nav");
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      mainNav.classList.toggle("is-open");
      var open = mainNav.classList.contains("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  document.querySelectorAll(".accordion").forEach(function (root) {
    root.querySelectorAll(".accordion-trigger").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var item = btn.closest(".accordion-item");
        var wasOpen = item.classList.contains("is-open");
        root.querySelectorAll(".accordion-item").forEach(function (i) {
          i.classList.remove("is-open");
        });
        if (!wasOpen) item.classList.add("is-open");
      });
    });
  });

  document.querySelectorAll(".article-summary").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var item = btn.closest(".article-item");
      var open = item.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });

  var form = document.getElementById("appointment-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert(
        "【演示】表单校验通过，数据未发送或保存。\n\n实际部署时请连接后端或医院信息系统完成挂号。"
      );
    });
  }
})();

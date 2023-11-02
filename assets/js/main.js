let toggleBtn = document.querySelector(".toggle-btn");
let roots = document.querySelector(":root");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active");
  toggleBtn.getElementsByTagName("span")[0].classList.toggle("active");
  if (toggleBtn.classList.contains("active")) {
    document.documentElement.style.setProperty("--BG", "hsl(230, 17%, 14%)");

    document.documentElement.style.setProperty("--hover", "hsl(232, 19%, 15%)");

    document.documentElement.style.setProperty(
      "--heading-Text",
      "hsl(228, 34%, 66%)"
    );

    document.documentElement.style.setProperty("--Text", "hsl(0, 0%, 100%)");

    document.documentElement.style.setProperty(
      "--Card-BG",
      "hsl(228, 28%, 20%)"
    );
  } else {
    document.documentElement.style.setProperty("--BG", "hsl(0, 0%, 100%)");

    document.documentElement.style.setProperty(
      "--heading-Text",
      "hsl(228, 12%, 44%)"
    );

    document.documentElement.style.setProperty(
      "--hover",
      "hsl(228deg 6.11% 84.22%)"
    );

    document.documentElement.style.setProperty("--Text", "hsl(230, 17%, 14%)");

    document.documentElement.style.setProperty(
      "--Card-BG",
      "hsl(227, 47%, 96%)"
    );
  }
});

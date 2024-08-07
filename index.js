const togglebtn = document.querySelector(".toggle");
const nav = document.querySelector("nav");
const dropBtn = document.querySelectorAll(".dropbtn");

togglebtn.addEventListener("click", (e) => {
  togglebtn.classList.toggle("show");
  if (togglebtn.classList.contains("show")) {
    nav.classList.remove("hide");
  } else {
    nav.classList.add("hide");
    dropBtn.forEach((Btn) => {
      const child_img = Btn.querySelectorAll("img");
      Btn.nextElementSibling.style.height = "0";
      Btn.nextElementSibling.style.padding = "0";
      child_img.forEach((img) => {
        img.style.transform = "rotate(0deg)";
      });
    });
  }
});
let re = true;
dropBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const img = btn.querySelectorAll("img");
    const drop_container = btn.nextElementSibling;
    const pd = drop_container.style.padding;
    dropBtn.forEach((Btn) => {
      const child_img = Btn.querySelectorAll("img");
      Btn.nextElementSibling.style.height = "0";
      Btn.nextElementSibling.style.padding = "0";
      child_img.forEach((img) => {
        img.style.transform = "rotate(0deg)";
      });
    });
    if (pd !== "16px") {
      drop_container.style.padding = "16px";
      drop_container.style.height = "fit-content";
      img.forEach((img) => {
        img.style.transform = "rotate(180deg)";
      });
    }
  });
});

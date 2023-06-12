//to top

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

//to scrollButton

document.getElementById("scrollButton").addEventListener("click", () => {
  document.getElementById("scrollClass").scrollIntoView({ behavior: "smooth" });
});

//商品欄切換

const tabTitle = document.querySelectorAll(".tab-title li");
const tabInner = document.querySelectorAll(".tab-inner");

//tab內容大家都清除
tabInner.forEach(function (item) {
  item.style.display = "none";
});

//所有tab區域是active 抓出他data-tablink後 例如是"one" 就可以指定document.getElementById("one")將tab內容顯示
document.querySelectorAll(".tab-title li.active").forEach(function (item) {
  let tablink = item.querySelector("a").getAttribute("data-tablink");
  document.getElementById(tablink).style.display = "block";
});

//tab-title每個li做監聽 當click時
tabTitle.forEach(function (item) {
  item.addEventListener("click", function () {
    //抓出click那個元素的a的tablink，例如是"two"
    let tablink = item.querySelector("a").getAttribute("data-tablink");

    //先找到該父層將所有子層li 移除active的classname(藍色)
    item.parentNode.querySelectorAll("li").forEach(function (item) {
      item.classList.remove("active");
    });
    //在將click那個li加回active的classname(藍色)
    item.classList.add("active");
    //將剛剛抓出來的，例如是"two" >document.getElementById("two")的父層 <div class="tab_inner_wrap">...底下的tab內容都隱藏
    document
      .getElementById(tablink)
      .parentNode.querySelectorAll(".tab-inner")
      .forEach(function (item) {
        item.style.display = "none";
      });
    //因為剛剛是做全部底下的tab內容都隱藏，所以要再將剛剛抓出來的，例如是"two" tab內容秀出來
    document.getElementById(tablink).style.display = "block";
  });
});

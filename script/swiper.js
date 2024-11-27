const itemList = document.querySelectorAll(".swiper-box .item");
const pointList = document.querySelectorAll(".swiper-box .point");
const box = document.querySelector(".swiper-box .box");
const prevBtn = document.querySelector(".swiper-box .prev");
const nextBtn = document.querySelector(".swiper-box .next");

let _timer,
  currentIndex = 0;

// 移动函数
/**
 * 无缝轮播
 * 当轮播到最后一张时，瞬间移动到第一张，然后继续轮播
 */
const moveTo = (index) => {
  if (index < 0) {
    box.style.transition = "none";
    box.style.transform = `translateX(-${(itemList.length - 1) * 100}%)`;
    setTimeout(() => {
      box.style.transition = "1.5s";
      currentIndex = itemList.length - 2;
      moveTo(currentIndex);
    }, 0);
    return;
  } else if (index >= itemList.length) {
    box.style.transition = "none";
    box.style.transform = `translateX(0)`;
    setTimeout(() => {
      box.style.transition = "1.5s";
      currentIndex = 1;
      moveTo(currentIndex);
    }, 0);
    return;
  }

  box.style.transform = `translateX(-${index * 100}%)`;
  pointList.forEach((point) => point.classList.remove("active"));
  if (index === itemList.length - 1) {
    pointList[0].classList.add("active");
  } else {
    pointList[index % (itemList.length - 1)].classList.add("active");
  }
};
// 自动轮播
const intervalMove = () => {
  _timer && clearInterval(_timer);
  _timer = setInterval(() => {
    currentIndex++;
    moveTo(currentIndex);
  }, 4000);
};
intervalMove();
// 给每个指示器绑定点击事件
[...pointList].forEach((item, i) =>
  item.addEventListener("click", () => {
    currentIndex = i;
    moveTo(currentIndex);
    intervalMove();
  })
);
// 上一项
prevBtn.onclick = function () {
  currentIndex--;
  moveTo(currentIndex);
  intervalMove();
};
// 下一项
nextBtn.onclick = function () {
  currentIndex++;
  moveTo(currentIndex);
  intervalMove();
};

// 导航菜单逻辑
const setMenu = (num) => {
  const menuItem = document.querySelectorAll(".menu-item");
  menuItem.forEach((item) => {
    item.classList.remove("active");
  });
  menuItem[num].classList.add("active");
};

// 二级导航菜单
const setSubMenu = (num, subNum) => {
  const menuItem = document.querySelectorAll(".menu-item");
  menuItem.forEach((item) => {
    item.classList.remove("active");
  });
  const currentMenu = menuItem[num];
  currentMenu.classList.add("active");
  if (currentMenu.children.length >= 2) {
    const currentSubMenu = currentMenu.children[1];
    console.log(currentSubMenu.children);
    if (currentSubMenu.children.length) {
      [...currentSubMenu.children].forEach((item) => {
        item.classList.remove("active");
      });
      currentSubMenu.children[subNum].classList.add("active");
    }
  }
};

const playBtn = document.querySelector('.home-video-box .play-btn');
const video = document.querySelector('.home-video-box video');
playBtn.onclick = () => {
  video.play();
}

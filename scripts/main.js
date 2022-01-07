const subs = [
  {
    name: "Hello Roman",
    link: "https://www.youtube.com/c/helloroman",
    image: "./assets/images/helloroman.jpg",
  },
  {
    name: "Fireship",
    link: "https://www.youtube.com/c/Fireship",
    image: "./assets/images/fireship.jpg",
  },
  {
    name: "overment",
    link: "https://www.youtube.com/c/overment",
    image: "./assets/images/overment.jpg",
  },
  {
    name: "Pasja Informatyki",
    link: "https://www.youtube.com/c/Pasjainformatykitutoriale",
    image: "./assets/images/pasja-informatyki.jpg",
  },
  {
    name: "JavaScript Mastery",
    link: "https://www.youtube.com/c/JavaScriptMastery",
    image: "./assets/images/javascriptmastery.jpg",
  },
  {
    name: "DesignCourse",
    link: "https://www.youtube.com/c/DesignCourse",
    image: "./assets/images/designcourse.jpg",
  },
  {
    name: "freeCodeCamp.org",
    link: "https://www.youtube.com/c/Freecodecamp",
    image: "./assets/images/fcc.jpg",
  },
  {
    name: "Samuraj Programowania",
    link: "https://www.youtube.com/c/SamurajProgramowania",
    image: "./assets/images/samuraj.jpg",
  },
];

const videosData = [
  {
    name: "Nauka programowania – od czego zacząć? ⌨️ hello roman #3",
    link: "https://www.youtube.com/watch?v=FeZHLSBbniI",
    image: "https://i.ytimg.com/vi/FeZHLSBbniI/hqdefault.jpg",
    time: "20:12",
    channelName: "hello roman",
    channelLink: "https://www.youtube.com/c/helloroman",
    channelImage: "/assets/images/helloroman.jpg",
    info: "191 tys. wyświetleń ▪ 3 lata temu",
  },
  {
    name: "Nie zostaniesz programistą ⌨️ hello roman #1",
    link: "https://www.youtube.com/watch?v=g7zw2XCdVac",
    image: "https://i.ytimg.com/vi/g7zw2XCdVac/hqdefault.jpg",
    time: "6:26",
    channelName: "hello roman",
    channelLink: "https://www.youtube.com/c/helloroman",
    channelImage: "/assets/images/helloroman.jpg",
    info: "181 tys. wyświetleń ▪ 3 lata temu",
  },
  {
    name: "Ile czasu zajmuje nauka programowania? ⌨️ hello roman #58",
    link: "https://www.youtube.com/watch?v=1Jr6e5UmMUs",
    image: "https://i.ytimg.com/vi/1Jr6e5UmMUs/hqdefault.jpg",
    time: "24:53",
    channelName: "hello roman",
    channelLink: "https://www.youtube.com/c/helloroman",
    channelImage: "/assets/images/helloroman.jpg",
    info: "101 tys. wyświetleń ▪ 2 lata temu",
  },
  {
    name: "Kto może zostać programistą? ⌨️ hello roman #36",
    link: "https://www.youtube.com/watch?v=nBAlzlgRxYk",
    image: "https://i.ytimg.com/vi/nBAlzlgRxYk/hqdefault.jpg",
    time: "14:44",
    channelName: "hello roman",
    channelLink: "https://www.youtube.com/c/helloroman",
    channelImage: "/assets/images/helloroman.jpg",
    info: "100 tys. wyświetleń ▪ 3 lata temu",
  },
  {
    name: "Why do computers suck at math?",
    link: "https://www.youtube.com/watch?v=s9F8pu5KfyM",
    image: "https://i.ytimg.com/vi/s9F8pu5KfyM/hqdefault.jpg",
    time: "0:54",
    channelName: "Fireship",
    channelLink: "https://www.youtube.com/c/Fireship",
    channelImage: "/assets/images/fireship.jpg",
    info: "3,5 mln wyświetleń ▪ 6 miesięcy temu",
  },
  {
    name: "Why do computers use RGB for colors, and not RBY?",
    link: "https://www.youtube.com/watch?v=B1t4Fjlomi8",
    image: "https://i.ytimg.com/vi/B1t4Fjlomi8/hqdefault.jpg",
    time: "0:44",
    channelName: "Fireship",
    channelLink: "https://www.youtube.com/c/Fireship",
    channelImage: "/assets/images/fireship.jpg",
    info: "2 mln wyświetleń ▪ 5 miesięcy temu",
  },
  {
    name: "JavaScript Pro Tips - Code This, NOT That",
    link: "https://www.youtube.com/watch?v=Mus_vwhTCq0",
    image: "https://i.ytimg.com/vi/Mus_vwhTCq0/hqdefault.jpg",
    time: "12:37",
    channelName: "Fireship",
    channelLink: "https://www.youtube.com/c/Fireship",
    channelImage: "/assets/images/fireship.jpg",
    info: "1,9 mln wyświetleń ▪ 3 lata temu",
  },
  {
    name: "VS Code Top-Ten Pro Tips",
    link: "https://www.youtube.com/watch?v=u21W_tfPVrY",
    image: "https://i.ytimg.com/vi/u21W_tfPVrY/hqdefault.jpg",
    time: "9:36",
    channelName: "Fireship",
    channelLink: "https://www.youtube.com/c/Fireship",
    channelImage: "/assets/images/fireship.jpg",
    info: "1,6 mln wyświetleń ▪ 3 lata temu",
  },
  {
    name: "#git Czym jest Git? - Kurs gita po polsku #1/12",
    link: "https://www.youtube.com/watch?v=D6EI7EbEN4Q",
    image: "https://i.ytimg.com/vi/D6EI7EbEN4Q/hqdefault.jpg",
    time: "5:21",
    channelName: "overment",
    channelLink: "https://www.youtube.com/c/overment",
    channelImage: "/assets/images/overment.jpg",
    info: "141 tys. wyświetleń ▪ 3 lata temu",
  },
  {
    name: "#REST API Tutorial #1 - Czym jest REST API? | by Overment",
    link: "https://www.youtube.com/watch?v=P9b8-BrWdYs",
    image: "https://i.ytimg.com/vi/P9b8-BrWdYs/hqdefault.jpg",
    time: "5:00",
    channelName: "overment",
    channelLink: "https://www.youtube.com/c/overment",
    channelImage: "/assets/images/overment.jpg",
    info: "132 tys. wyświetleń ▪ 3 lata temu",
  },
  {
    name: "#git Jak zapisać zmiany - Kurs gita po polsku #2/12",
    link: "https://www.youtube.com/watch?v=4bXuEv2R3W4",
    image: "https://i.ytimg.com/vi/4bXuEv2R3W4/hqdefault.jpg",
    time: "5:41",
    channelName: "overment",
    channelLink: "https://www.youtube.com/c/overment",
    channelImage: "/assets/images/overment.jpg",
    info: "82 tys. wyświetleń ▪ 3 lata temu",
  },
  {
    name: "Poznaj GIT w 15 minut",
    link: "https://www.youtube.com/watch?v=LEystZRF8fQ",
    image: "https://i.ytimg.com/vi/LEystZRF8fQ/hqdefault.jpg",
    time: "7:44",
    channelName: "overment",
    channelLink: "https://www.youtube.com/c/overment",
    channelImage: "/assets/images/overment.jpg",
    info: "68 tys. wyświetleń ▪ 4 lata temu",
  },
  {
    name: "Tajemniczy ciąg Fibonacciego. Złota liczba. Boska proporcja",
    link: "https://www.youtube.com/watch?v=wb7kPaM8cfg",
    image: "https://i.ytimg.com/vi/wb7kPaM8cfg/hqdefault.jpg",
    time: "24:53",
    channelName: "Pasja Informatyki",
    channelLink: "https://www.youtube.com/c/Pasjainformatykitutoriale",
    channelImage: "/assets/images/pasja-informatyki.jpg",
    info: "3,5 mln wyświetleń ▪ 8 lata temu",
  },
  {
    name: "Przekleństwo liczb pierwszych. Hipoteza Riemanna",
    link: "https://www.youtube.com/watch?v=ptibpKiT-QM",
    image: "https://i.ytimg.com/vi/ptibpKiT-QM/hqdefault.jpg",
    time: "31:24",
    channelName: "Pasja Informatyki",
    channelLink: "https://www.youtube.com/c/Pasjainformatykitutoriale",
    channelImage: "/assets/images/pasja-informatyki.jpg",
    info: "2,6 mln wyświetleń ▪ 7 lata temu",
  },
  {
    name: "Kurs C++ odc. 0: Programowanie w C++, instalacja CodeBlocks",
    link: "https://www.youtube.com/watch?v=ErOzmh3BiXU",
    image: "https://i.ytimg.com/vi/ErOzmh3BiXU/hqdefault.jpg",
    time: "9:46",
    channelName: "Pasja Informatyki",
    channelLink: "https://www.youtube.com/c/Pasjainformatykitutoriale",
    channelImage: "/assets/images/pasja-informatyki.jpg",
    info: "2,2 mln wyświetleń ▪ 8 lata temu",
  },
  {
    name: "Kurs HTML odc.1: Tworzenie stron www. Pierwszy projekt, wiedza podstawowa",
    link: "https://www.youtube.com/watch?v=k2IydkL3EOs",
    image: "https://i.ytimg.com/vi/k2IydkL3EOs/hqdefault.jpg",
    time: "39:22",
    channelName: "Pasja Informatyki",
    channelLink: "https://www.youtube.com/c/Pasjainformatykitutoriale",
    channelImage: "/assets/images/pasja-informatyki.jpg",
    info: "1,8 mln wyświetleń ▪ 7 lata temu",
  },
];

const hamburger = document.getElementById("menu-btn");
const navMenu = document.querySelector(".nav-menu");
const navBar = document.querySelector(".nav-bar");
const videos = document.querySelector(".videos");

const subsList = document.querySelector(".subs-list");
const videosList = document.querySelector(".videos");

let flag = true;

const toggleMenu = () => {
  if (flag) {
    navMenu.classList.add("disable");
    navBar.classList.remove("disable");
    videos.classList.add("videos--left");
    flag = false;
  } else {
    navMenu.classList.remove("disable");
    navBar.classList.add("disable");
    videos.classList.remove("videos--left");
    flag = true;
  }
};

hamburger.addEventListener("click", toggleMenu);

subs.map((sub) => {
  subItem = document.createElement("a");

  subItem.innerHTML = `
  <a href="${sub.link}" class="menu__link" title="${sub.name}">
    <div class="menu__icon sub-image">
        <img src="${sub.image}" alt="${sub.name}">
    </div>
    <li className="menu__item">${
      sub.name.length > 18 ? sub.name.substring(0, 18) + "..." : sub.name
    }</li>
  </a>
  `;

  subsList.appendChild(subItem);
});

videosData.map((video) => {
  videoItem = document.createElement("div");

  videoItem.innerHTML = `
    <div class="video">
        <a
            href="${video.link}"
        >
            <div class="video__image">
            <div class="video__time">${video.time}</div>
                <img
                     src="${video.image}"
                      alt="${video.name}"
                />
            </div>
        </a>
    <div class="video__about">
        <a
         href="${video.channelLink}"
          title="${video.channelName}"
        >
      <div class="video__avatar">
        <img src="${video.channelImage}" alt="${video.channelName}" />
      </div>
    </a>
    <div class="video__desc">
      <a
        href="${video.link}"
        title="${video.name}"
      >
        <div class="video__title">
          ${video.name}
        </div>
      </a>
      <a
        href="${video.channelLink}"
        title="${video.channelName}"
      >
        <div class="video__channel" title="${video.channelName}">${video.channelName}</div>
      </a>
      <a
        href="${video.link}"
      >
        <div class="video__info">${video.info}</div>
      </a>
    </div>
  </div>
</div>
    `;

  videosList.appendChild(videoItem);
});

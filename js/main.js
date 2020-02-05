document.addEventListener(
  "DOMContentLoaded",
  function() {
    // Khai bao bien can su dung
    var wwdActive = document.getElementsByClassName("is-active");
    var wwdButton = document.getElementsByClassName("whatwedo__item-right");
    var wwdContent = document.getElementsByClassName("whatwedo__item-bottom");
    // var whatwedo_up = whatwedo_up[0];
    // var whatwedo_noidung = whatwedo_noidung[0];

    for (let i = 0; i < wwdContent.length; i++) {
      wwdButton[i].addEventListener("click", function() {
        for (let j = 0; j < wwdContent.length; j++) {
          if (j != i) {
            wwdButton[j].classList.remove("is-rotate");
            wwdContent[j].classList.remove("is-active");
          }
        }
        wwdButton[i].classList.toggle("is-rotate");
        wwdContent[i].classList.toggle("is-active");
      });
    }

    var menu = document.querySelector(".header__include-nav");
    var nav = document.querySelector(".nav");
    var search = document.querySelector(".search__nav");
    var searchlist = document.querySelector(".search__list");
    menu.addEventListener("click", function() {
      nav.classList.toggle("is-active");
      searchlist.classList.remove("is-active");
    });
    search.addEventListener("click", function() {
      searchlist.classList.toggle("is-active");
      nav.classList.remove("is-active");
    });

    // var comfortlink = document.getElementsByClassName("comfort__nav-link");

    // for (let i = 0; i < comfortlink.length; i++) {
    //   comfortlink[i].addEventListener("click", function() {
    //     for (let j = 0; j < comfortlink.length; i++) {
    //         if (j != i) {
    //             comfortlink[j].classList.remove("is-active");
    //         }
    //     }
    //     comfortlink[i].classList.add("is-active");

    //   });
    // }
  },
  false
);

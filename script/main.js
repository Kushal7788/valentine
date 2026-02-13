// Animation Timeline
const animationTimeline = () => {
  // Split chars that needs to be animated individually
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];
  const hbdName = document.getElementsByClassName("wish-hbd-name")[0];

  // Split text into spans by WORDS for chatbox (allows word-based wrapping)
  textBoxChars.innerHTML = textBoxChars.innerHTML
    .trim()
    .split(" ")
    .map(word => `<span class="word">${word}</span>`)
    .join(" ");

  // Split by characters for the wish text (shorter text, no wrapping needed)
  hbd.innerHTML = hbd.innerHTML
    .split("")
    .map(char => char === " " ? `<span>&nbsp;</span>` : `<span>${char}</span>`)
    .join("");

  hbdName.innerHTML = hbdName.innerHTML
    .split("")
    .map(char => char === " " ? `<span>&nbsp;</span>` : `<span>${char}</span>`)
    .join("");

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg",
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg",
  };

  const tl = new TimelineMax();

  tl.to(".container", 0.1, {
    visibility: "visible",
  })
    .from(".one", 0.7, {
      opacity: 0,
      y: 10,
    })
    .from(".two", 0.4, {
      opacity: 0,
      y: 10,
    })
    .to(
      ".one",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=5"
    )
    .to(
      ".two",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "-=1"
    )
    .from(".three", 0.7, {
      opacity: 0,
      y: 10,
      // scale: 0.7
    })
    .to(
      ".three",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=3"
    )
    .from(".four", 0.7, {
      scale: 0.2,
      opacity: 0,
    })
    .from(".fake-btn", 0.3, {
      scale: 0.2,
      opacity: 0,
    })
    .staggerTo(
      ".hbd-chatbox span",
      0.5,
      {
        visibility: "visible",
      },
      0.05
    )
    .to(".fake-btn", 0.1, {
      backgroundColor: "rgb(127, 206, 248)",
    })
    .to(
      ".four",
      0.5,
      {
        scale: 0.2,
        opacity: 0,
        y: -150,
      },
      "+=4"
    )
    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=3")
    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=3")
    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3 strong", 0.5, {
      scale: 1,
      x: 10,
      backgroundColor: "rgb(21, 161, 237)",
      color: "#fff",
    })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=3")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=2")
    .from(
      ".idea-5",
      0.7,
      {
        rotationX: 15,
        rotationZ: -10,
        skewY: "-5deg",
        y: 50,
        z: 10,
        opacity: 0,
      },
      "+=0.5"
    )
    .to(
      ".idea-5 span",
      0.7,
      {
        scale: 1.2,
      },
      "+=0.4"
    )
    .to(
      ".idea-5",
      0.7,
      {
        scale: 0.2,
        opacity: 0,
      },
      "+=5"
    )
    .staggerFrom(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: Expo.easeOut,
      },
      0.2
    )
    .staggerTo(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: Expo.easeOut,
      },
      0.2,
      "+=3"
    )
    // Love Letter Animation
    .to(".love-letter-section", 0.1, {
      visibility: "visible",
    })
    .fromTo(".love-letter-section", 0.8, {
      opacity: 0,
      scale: 0.5,
      rotation: -10,
    }, {
      opacity: 1,
      scale: 1,
      rotation: -2,
      ease: Back.easeOut.config(1.7),
    })
    .from(".letter-greeting", 0.5, {
      opacity: 0,
      x: -30,
    })
    .from(".letter-body", 0.7, {
      opacity: 0,
      y: 20,
    })
    .from(".letter-closing", 0.5, {
      opacity: 0,
      x: 30,
    })
    .from(".letter-signature", 0.5, {
      opacity: 0,
      scale: 0,
      ease: Elastic.easeOut.config(1, 0.5),
    })
    .to(".love-letter-section", 0.7, {
      opacity: 0,
      y: -50,
      scale: 0.8,
      visibility: "hidden",
    }, "+=12")
    .staggerFromTo(
      ".baloons img",
      2.5,
      {
        opacity: 0.9,
        y: 1400,
      },
      {
        opacity: 1,
        y: -1000,
      },
      0.2
    )
    .to(".photo-frame", 0.1, {
      visibility: "visible",
      opacity: 1,
    }, "-=2")
    .from(
      ".girl-dp",
      0.5,
      {
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45,
      }
    )
    .to(".frame-hearts", 0.3, {
      visibility: "visible",
      opacity: 1,
    })
    .from(".hat", 0.5, {
      x: -100,
      y: 350,
      rotation: -180,
      opacity: 0,
    })
    .staggerFrom(
      ".wish-hbd span",
      0.7,
      {
        opacity: 0,
        y: -50,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5),
      },
      0.1
    )
    .staggerFromTo(
      ".wish-hbd span",
      0.7,
      {
        scale: 1.4,
        rotationY: 150,
      },
      {
        scale: 1,
        rotationY: 0,
        color: "#ff69b4",
        ease: Expo.easeOut,
      },
      0.1,
      "party"
    )
    .staggerFrom(
      ".wish-hbd-name span",
      0.7,
      {
        opacity: 0,
        y: -50,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5),
      },
      0.1
    )
    .staggerFromTo(
      ".wish-hbd-name span",
      0.7,
      {
        scale: 1.4,
        rotationY: 150,
      },
      {
        scale: 1,
        rotationY: 0,
        color: "#ff69b4",
        ease: Expo.easeOut,
      },
      0.1
    )
    .from(
      ".wish h5",
      0.5,
      {
        opacity: 0,
        y: 10,
        skewX: "-15deg",
      }
    )
    .staggerTo(
      ".eight svg",
      2,
      {
        visibility: "visible",
        opacity: 0,
        scale: 20,
        repeat: 1,
        repeatDelay: 2,
      },
      0.5
    )
    .to(".six", 0.5, {
      opacity: 0,
      y: 30,
      zIndex: "-1",
    }, "+=7")
    .staggerFrom(".nine p:not(.forever-text):not(.last-smile)", 1, ideaTextTrans, 2)
    .from(".big-heart", 0.8, {
      scale: 0,
      opacity: 0,
      ease: Elastic.easeOut.config(1, 0.5),
    })
    .from(".forever-text", 0.7, {
      opacity: 0,
      y: 30,
      scale: 0.8,
    })
    .to(
      ".last-smile",
      0.5,
      {
        rotation: 0,
      },
      "+=1"
    );

  // tl.seek("currentStep");
  // tl.timeScale(2);

  // Restart Animation on click
  const replyBtn = document.getElementById("replay");
  replyBtn.addEventListener("click", () => {
    tl.restart();
  });
};

// Import the data to customize and insert them into page
const fetchData = () => {
  fetch("customize.json")
    .then((data) => data.json())
    .then((data) => {
      Object.keys(data).map((customData) => {
        if (data[customData] !== "") {
          if (customData === "imagePath") {
            document
              .getElementById(customData)
              .setAttribute("src", data[customData]);
          } else {
            document.getElementById(customData).innerText = data[customData];
          }
        }
      });
    });
};

// Run fetch and animation in sequence
const resolveFetch = () => {
  return new Promise((resolve, reject) => {
    fetchData();
    resolve("Fetch done!");
  });
};

resolveFetch().then(animationTimeline());

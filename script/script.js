// // COЗДАЕМ ELEMENT И ВСТАВЛЯЕМ ЕГО В КОНЕЦ "place"

const createElement = ({ tag, className, text, attribute, place }) => {
  const someELem = document.createElement(tag);

  className.map((elem) => {
    someELem.classList.add(elem);
  });

  if (attribute) {
    for (let key in attribute) someELem.setAttribute(key, attribute[key]);
  }

  if (text) {
    someELem.innerText = text;
  }

  place.append(someELem);

  return someELem;
};

const main = document.querySelector("main");

const section = createElement({
  tag: "section",
  className: ["section-demo"],
  place: main,
});

const blockFerst = createElement({
  tag: "div",
  className: ["block-demo"],
  place: section,
});

const blockSecond = createElement({
  tag: "div",
  className: ["block-demo"],
  place: section,
});

const Title = createElement({
  tag: "h2",
  className: ["block-demo__title"],
  text: "Демо-версия",
  place: blockFerst,
});

const Description = createElement({
  tag: "p",
  className: ["block-demo__description"],
  text: "За 18 лет деятельности было реализовано более 500 крупных, а так же, не менее 2500 средних и малых проектов. Используя знания и накопленный опыт мы можем предложить ",
  place: blockFerst,
});

const button = createElement({
  tag: "button",
  className: ["block-button__description"],
  text: "Попробовать бесплатно",
  place: blockFerst,
});

const IconBlock = createElement({
  tag: "span",
  className: ["icon-block"],
  place: button,
});

const IconImg = createElement({
  tag: "img",
  className: ["icon-block__img"],
  attribute: {
    src: "./images/arrow-up-right.svg",
    alt: "icon-arrow",
  },
  place: IconBlock,
});

const blockSecondImg = createElement({
  tag: "img",
  className: ["block__img"],
  attribute: {
    src: "./images/imageComputer.svg",
    alt: "image-computer",
  },
  place: blockSecond,
});

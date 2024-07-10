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

const blockFirst = createElement({
  tag: "div",
  className: ["block-first"],
  place: section,
});

const blockSecond = createElement({
  tag: "div",
  className: ["block-second"],
  place: section,
});

const wrapper = createElement({
  tag: "div",
  className: ["wrapper"],
  place: blockFirst,
});

const Title = createElement({
  tag: "h1",
  className: ["wrapper__title"],
  text: "Демо-версия",
  place: wrapper,
});

const Description = createElement({
  tag: "p",
  className: ["wrapper__description"],
  text: "За 18 лет деятельности было реализовано более 500 крупных, а так же, не менее 2500 средних и малых проектов. Используя знания и накопленный опыт мы можем предложить ",
  place: wrapper,
});

const buttonDemo = createElement({
  tag: "button",
  className: ["button"],
  text: "Попробовать бесплатно",
  attribute: { type: "button" },
  place: wrapper,
});

const IconBlock = createElement({
  tag: "div",
  className: ["button__icon"],
  place: buttonDemo,
});

const blockSecondBackground = createElement({
  tag: "div",
  className: ["block__img"],
  place: blockSecond,
});

const modal = createElement({
  tag: "div",
  className: ["modal"],
  place: main,
});

const wrapperButtonClose = createElement({
  tag: "div",
  className: ["wrapper-close"],
  place: modal,
});

const modalButtonCLose = createElement({
  tag: "button",
  className: ["wrapper-close__close"],
  attribute: { type: "reset" },
  place: wrapperButtonClose,
});

const modalTitle = createElement({
  tag: "h2",
  className: ["modal__title"],
  text: "Войти в систему",
  place: modal,
});

const modalForm = createElement({
  tag: "form",
  className: ["modal-form"],
  attribute: { name: "modal" },
  place: modal,
});

const modalInputContact = createElement({
  tag: "input",
  className: ["modal-form__inpyt"],
  attribute: {
    type: "text",
    placeholder: "Email/Телефон",
    name: "contact",
    required: "required",
  },
  place: modalForm,
});

const modalInputPassword = createElement({
  tag: "input",
  className: ["modal-form__inpyt"],
  attribute: {
    type: "password",
    placeholder: "Пароль",
    name: "password",
    required: "required",
  },
  place: modalForm,
});

const WrapperCheckbox = createElement({
  tag: "label",
  className: ["wrapper-checkbox"],
  attribute: {
    for: "modalRadio",
  },
  place: modalForm,
});

const modalCheckbox = createElement({
  tag: "input",
  className: ["wrapper-checkbox__checkbox"],
  attribute: {
    type: "checkbox",
    name: "savePassword",
    id: "modalRadio",
  },
  place: WrapperCheckbox,
});

const modalLabelCheckbox = createElement({
  tag: "span",
  className: ["wrapper-checkbox__checkbox-custom"],
  text: "Запомнить пароль",
  place: WrapperCheckbox,
});

const modalLinkRestore = createElement({
  tag: "a",
  className: ["modal-form__link"],
  text: "Восстановить",
  attribute: {
    href: "./index.html",
  },
  place: modalForm,
});

const modalButtonSignIn = createElement({
  tag: "button",
  className: ["modal-form__sign-in"],
  text: "Войти",
  attribute: {
    type: "submit",
  },
  place: modalForm,
});

const modalButtonSignUp = createElement({
  tag: "button",
  className: ["modal-form__sign-up"],
  text: "Зарегестрироваться",
  attribute: {
    type: "button",
  },
  place: modalForm,
});

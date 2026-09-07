import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForms } from "../components/PopupWithForms.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";
import { initialCards, validationConfig } from "../utils.js";

const profileForm = document.querySelector(".popup__form");
const galleryForm = document.querySelector(".popup__form_gallery");
const userInfo = new UserInfo({
  nameSelector: "#profile__name",
  jobSelector: "#profile__description",
});
const imagePopup = new PopupWithImage(".popup__gallery");
imagePopup.setEventListeners();

function createCard(item) {
  const card = new Card(item, "#card-template", ({ name, link }) => {
    imagePopup.open(name, link);
  });
  return card.generateCard();
}

const cardSection = new Section(
  {
    items: initialCards,
    renderer: (item) => cardSection.addItem(createCard(item)),
  },
  ".elements"
);
cardSection.renderItems();

const profileFormValidator = new FormValidator(validationConfig, profileForm);
const galleryFormValidator = new FormValidator(validationConfig, galleryForm);
profileFormValidator.setEventListener();
galleryFormValidator.setEventListener();

const profilePopup = new PopupWithForms(".dialog", (values) => {
  userInfo.setUserInfo(values);
  profilePopup.close();
});
profilePopup.setEventListeners();

const cardPopup = new PopupWithForms(".dialog_gallery", (values) => {
  cardSection.addItem(createCard(values), { prepend: true });
  cardPopup.close();
});
cardPopup.setEventListeners();

document.querySelector("#profile__button").addEventListener("click", () => {
  profilePopup.setInputValues(userInfo.getUserInfo());
  profileFormValidator.resetValidation();
  profilePopup.open();
});

document.querySelector("#profile__card").addEventListener("click", () => {
  galleryFormValidator.resetValidation();
  cardPopup.open();
});

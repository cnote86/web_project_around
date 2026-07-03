import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForms } from "../components/PopupWithForms.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";
import { initialCards, validationConfig } from "../utils.js";

const profileForm = document.querySelector(".popup__form");
const galleryForm = document.querySelector(".popup__form-gallery");
const nameInput = profileForm.querySelector("#input_popup-name");
const jobInput = profileForm.querySelector("#input_popup-job");
const titleInput = galleryForm.querySelector("#input_popup-title");
const linkInput = galleryForm.querySelector("#input_popup-link");

const user = new UserInfo(
  {
    nameSelector: "#profile__name",
    jobSelector: "#profile__description",
  }
);

const popupImage = new PopupWithImage(".popup__gallery");
popupImage.setEventListeners();

const createCard = (item) => {
  const card = new Card(item, "#card-template", ({ name, link }) => {
    popupImage.open(name, link);
  });

  return card.generateCard();
};

const section = new Section(
  {
    items: initialCards,
    renderer: createCard,
  },
  "elements"
);
section.renderer();

const handleProfileFormSubmit = (evt) => {
  evt.preventDefault();

  user.setUserInfo(
    {
      name: nameInput.value,
      job: jobInput.value,
    }
  );

  popupUser.close();
};
const popupUser = new PopupWithForms(".dialog", handleProfileFormSubmit);
popupUser.setEventListeners("#profile__button");

const handleGalleryFormSubmit = (evt) => {
  evt.preventDefault();

  section.addItem(
    createCard({
      name: titleInput.value,
      link: linkInput.value,
    })
  );

  popupAddImg.close();
  galleryFormValidator.resetValidation();
};

const popupAddImg = new PopupWithForms(".dialog_gallery", handleGalleryFormSubmit);
popupAddImg.setEventListeners("#profile__card");

document.querySelector("#profile__button").addEventListener("click", () => {
  const profileData = user.getUserInfo();

  nameInput.value = profileData.name;
  jobInput.value = profileData.job;
  profileFormValidator.resetValidation();
});

document.querySelector("#profile__card").addEventListener("click", () => {
  galleryFormValidator.resetValidation();
});

const profileFormValidator = new FormValidator(validationConfig, profileForm);
profileFormValidator.setEventListeners();

const galleryFormValidator = new FormValidator(validationConfig, galleryForm);
galleryFormValidator.setEventListeners();

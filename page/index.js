import { FormValidator } from "../components/FormValidator.js";
import { PopupWithForms } from "../components/PopupWithForms.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";

 const initialCards = [
  {
    name: "Yosemite Valley",
    link: "./images/Yosemite.jpg"
  },
  {
    name: "Zion National Park",
    link: "./images/Zion National Park.jpg"
  },
  {
    name: "Yellowstone",
    link: "./images/Yellow Stone.jpg"
  },
  {
    name: "Bryce Canyon",
    link: "./images/Bryce Canyon.jpg"
  },
  {
    name: "Arches",
    link: "./images/Arches.jpg"
  },
  {
    name: "Grand Cayon",
    link: "./images/Grand Cayon.jpg"
  }
];

//handles user data
const user = new UserInfo(
  {
    name: "Jacques Cousteau",
    job: "Explorer"
  }
)

// gallery session controller
const section = new Section({items: initialCards, renderer:()=>{} }, "elements");
section.renderer();


// popup for edit profile button
const handleProfileFormSubmit = (evt) => {
  evt.preventDefault();

  const inputName = document.querySelector("#input_popup-name");
  const inputJob = document.querySelector("#input_popup-job");

  user.setUserInfo(
    {
      name: inputName,
      job: inputJob
    }
  );

  const labelName = document.querySelector("#profile__name");
  const labelDesc = document.querySelector("#profile__description");

  labelName.textContent = inputName.value;
  labelDesc.textContent = inputJob.value;

  popupUser.close();
}
const popupUser = new PopupWithForms(".dialog", handleProfileFormSubmit);
popupUser.setEventListeners("#profile__button");

// popup for add image button
const handleGalleryFormSubmit = (evt) => {
  evt.preventDefault();

  const link = document.querySelector("#input_popup-link");
  const title = document.querySelector("#input_popup-title");

  section.addItem(
    {
      name: title.value,
      link: link.value
    }
  );


  popupAddImg.close();
}

// popup for expanded image
const popupAddImg = new PopupWithForms(".dialog_gallery", handleGalleryFormSubmit);
popupAddImg.setEventListeners("#profile__card");

// validators
const validForm1Cfg = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".button_popup-submit",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: ".form__error",
  errorClass: "form__error_visible",
};
const validForm1 = new FormValidator( validForm1Cfg, ".popup__form");
validForm1.enableValidation();

const validForm2Cfg = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".button_popup-submit",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: ".form__error",
  errorClass: "form__error_visible"
};
const validForm2 = new FormValidator( validForm2Cfg, ".popup__form-gallery" );
validForm2.enableValidation();

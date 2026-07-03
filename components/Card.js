export class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    return document
      .querySelector(this._templateSelector)
      .content
      .querySelector(".card")
      .cloneNode(true);
  }

  _setEventListeners() {
    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteCard();
    });

    this._imageElement.addEventListener("click", () => {
      this._handleImageClick();
    });

    this._likeButton.addEventListener("click", () => {
      this._handleLikeCard();
    });
  }

  _handleDeleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _handleLikeCard() {
    this._likeButton.classList.toggle("card__like-button_active");
  }

  _handleImageClick() {
    this._handleCardClick({
      name: this._name,
      link: this._link,
    });
  }

  generateCard() {
    this._cardElement = this._getTemplate();
    this._imageElement = this._cardElement.querySelector(".card__img");
    this._deleteButton = this._cardElement.querySelector(".card__delete-button");
    this._likeButton = this._cardElement.querySelector(".card__like-button");

    this._imageElement.src = this._link;
    this._imageElement.alt = this._name;
    this._cardElement.querySelector(".block").textContent = this._name;

    this._setEventListeners();

    return this._cardElement;
  }
}

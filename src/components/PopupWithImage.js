import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
    this._imageElement = this._modal.querySelector("#popupImage");
    this._captionElement = this._modal.querySelector("#popupText");
  }

  open(title, image) {
    this._captionElement.textContent = title;
    this._imageElement.src = image;
    this._imageElement.alt = title;
    super.open();
  }
}

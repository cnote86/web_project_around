import { Popup } from "./Popup.js";


export class PopupWithImage extends Popup{
  constructor (selector){
    super(selector);
  }

  open(title, image) {
    const popupImage = this._modal.querySelector("#popupImage");

    this._modal.querySelector("#popupText").textContent = title;
    popupImage.src = image;
    popupImage.alt = title;
    super.open();
  }
}

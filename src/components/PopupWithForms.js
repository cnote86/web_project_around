import { Popup } from "./Popup.js";

export class PopupWithForms extends Popup {
  constructor(selector, handleFormSubmit) {
    super(selector);
    this._handleFormSubmit = handleFormSubmit;
    this._formElement = this._modal.querySelector("form");
    this._inputs = Array.from(this._formElement.querySelectorAll("input"));
  }

  _getInputValues() {
    return Object.fromEntries(
      this._inputs.map((input) => [input.name, input.value])
    );
  }

  setInputValues(values) {
    this._inputs.forEach((input) => {
      input.value = values[input.name] ?? "";
    });
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", (event) => {
      event.preventDefault();
      if (this._formElement.checkValidity()) {
        this._handleFormSubmit(this._getInputValues());
      }
    });
  }

  close() {
    super.close();
    this._formElement.reset();
  }
}

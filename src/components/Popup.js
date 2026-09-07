export class Popup {
  constructor(selector) {
    this._selector = selector;
    this._modal = document.querySelector(selector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    if (this._modal.open) {
      return;
    }

    this._modal.showModal();
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    if (!this._modal.open) {
      return;
    }

    this._modal.close();
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    const buttonClose = this._modal.querySelector(".button_close");
    buttonClose.addEventListener("click", () => {
      this.close();
    });

    this._modal.addEventListener("click", (evt) => {
      const dialogRect = this._modal.getBoundingClientRect();
      const isOutsideDialog =
        evt.clientX < dialogRect.left ||
        evt.clientX > dialogRect.right ||
        evt.clientY < dialogRect.top ||
        evt.clientY > dialogRect.bottom;

      if (evt.target === this._modal && isOutsideDialog) {
        this.close();
      }
    });

    this._modal.addEventListener("cancel", (evt) => {
      evt.preventDefault();
      this.close();
    });
  }
}

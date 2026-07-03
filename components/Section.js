export class Section {
  constructor({ items, renderer }, selector) {
    this._items = items;
    this._renderer = renderer;
    this._selector = selector;
    this._galleryContainer = document.getElementById(this._selector);
  }

  renderer() {
    this._galleryContainer.textContent = "";
    this._items.forEach((item) => {
      this._galleryContainer.append(this._renderer(item));
    });
  }

  addItem(item) {
    this._galleryContainer.prepend(item);
  }
}

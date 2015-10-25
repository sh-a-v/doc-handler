export default itemHandler = {
  createItem(options) {
    let item = {
      id     : options.id,
      index  : options.index,
      lang   : options.lang,
      active : true,
      element: this._createItemElement(options)
    };

    return item;
  },

  removeItem(item) {

  },

  showItem(item) {
    item.active = true;
  },

  hideItem(item) {
    item.active = false;
  },

  applySettings(settings) {

  },

  prepareItem() {

  },

  showNextPage() {

  },

  showPreviosPage() {

  },

  showPage(pageNumber) {

  },

  showPageWithElement(element) {

  },

  _getItemTemplate() {
    return this._itemTemplate ? this._itemTemplate : this._itemTemplate = window.document.getElementById('item-template').innerHTML;
  },

  //_getItemsContainer

  _createItemElement(options) {
    let itemElement = this._getItemTemplate();

    return itemElement;
  }
}

export default DOMHelper = {
  getItemsContainer() {
    return this._itemsContainer ?
      this._itemsContainer :
      this._itemsContainer = window.document.getElementById('items-container');
  },

  getItemContainer(item) {
    return this[`_itemContainer${item.id}`] ?
      this[`_itemContainer${item.id}`] :
      this[`_itemContainer${item.id}`] = window.document.getElementById(`item-container-${item.id}`);
  },

  getItemContainerTemplate() {
    return this._itemContainerTemplate ?
      this._itemContainerTemplate :
      this._itemContainerTemplate = window.document.getElementById('item-container-template').innerHTML;
  },

  createItemContainer(item) {
    let itemContainerTemplate = this.getItemContainerTemplate();
    let itemsContainer = this.getItemsContainer();

    let itemContainerWrapper = window.document.createElement('div');
    itemContainerWrapper.innerHTML = itemContainerTemplate;

    let itemContainer = itemContainerWrapper.firstChild;
    itemContainer.setAttribute('id', `item-container-${item.id}`);

    itemsContainer.appendChild(itemContainer);

    return itemContainer;
  }
};

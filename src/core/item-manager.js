export default itemManager = {
  init(options) {

  },

  createItem(options) {
    let item = {
      id    : options.id,
      index : options.index,
      lang  : options.lang,
      active: true
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

  setSettingsClasses(settings) {

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

  }
}

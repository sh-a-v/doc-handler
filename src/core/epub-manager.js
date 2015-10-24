import _ from 'lodash';
import itemManager from 'core/item-manager';

export default epubManager = {
  get activeItem() {
    return _.findWhere(this.items, {active: true});
  },

  init() {
    this.items      = [];
    this.settings   = null;
  },

  setSettings(settings) {
    this.settings = settings;

    this.items.forEach(item => {
      itemManager.setSettingsClasses({item, settings});
    });
  },

  getItem(itemId) {
    return _.findWhere(this.items, {id: itemId});
  },

  loadItem(options) {
    let item = this.getItem(options.id);

    if (!item) {
      item = itemManager.createItem(options);
    }

    if (this.activeItem) {
      if (this.activeItem.id === item.id) {
        return;
      }

      itemManager.hideItem(this.activeItem);
    }

    itemManager.showItem(item);
  }
}

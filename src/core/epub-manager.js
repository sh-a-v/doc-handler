import _ from 'lodash';
import itemHandler from 'core/item-handler';

export default epubManager = {
  get _activeItem() {
    return _.findWhere(this.items, {active: true});
  },

  init() {
    this.items      = [];
    this.settings   = null;
  },

  setSettings(settings) {
    this.settings = settings;

    this.items.forEach(item => {
      itemHandler.applySettings({item, settings});
    });
  },

  loadItem(options) {
    let item = this._getItem(options.id);

    if (!item) {
      item = itemHandler.createItem(options);
    }

    if (this._activeItem) {
      if (this._activeItem.id === item.id) {
        return;
      }

      itemHandler.hideItem(this._activeItem);
    }

    itemHandler.showItem(item);
  },

  _getItem(itemId) {
    return _.findWhere(this.items, {id: itemId});
  },
}

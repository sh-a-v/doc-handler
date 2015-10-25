import { checkArgs } from 'core/tools';
import epubManager from 'core/epub-manager';
import itemManager from 'core/item-manager';


window.readerJS = {
  init(options, callback) {
    /*
    * options = null;
    *
    * callback params = null;
    * */

    epubManager.init();
    itemManager.init();
  },

  setSettings(options, callback) {
    /*
    * options = {
    *   theme     : 0   // [0..2]
    *   fontFamily: 0,  // [0..4]
    *   fontSize  : 0,  // [0..9]
    *   lineHeight: 0,  // [0..2]
    *   justify   : 0   // [0..1]
    * };
    *
    * callback params = null;
    * */

    checkArgs(options);
    epubManager.setSettings(options);
  },

  loadItem(options, callback) {
    /*
    * options = {
    *   id     : '',    // item id
    *   index  : 0,     // item index number
    *   content: '',    // raw or base64 item content
    *   lang   : 'en',  // item content lang or book lang
    *   encoded: false  // optional, true if base64
    * }
    *
    * callback params = null;
    * */

    checkArgs(options);
    epubManager.loadItem(options);
  },

  setItemMarkers(options, callback) {
    /*
    * options = {
    *   itemId : '',              // optional, active item by default
    *   markers: [
    *     {
    *       id     : ''           // marker id
    *       cfi    : ''           // marker cfi
    *       content: ''           // marker content
    *       color  : '#000000'    // optional, marker color (hex), #ffe270 by default
    *       style  : 'underline'  // optional, background by default
    *     }
    *   ]
    * };
    *
    * callback params = null;
    * */
  },

  createSelection(options, callback) {
    /*
    * options = {
    *   points: [        // points length: min 1, max 2
    *     {
    *       x: 100.32,   // x coordinate (dpi)
    *       y: 124.67
    *     },
    *     {              // optional
    *       x: 150.54,
    *       y: 174.72
    *     }
    *   ],
    *   sentence: false  // optional, word by default
    * };
    *
    * callback params = {
    *   start: {           // start selection params
    *     x: 100.32,       // x coordinate (dpi)
    *     y: 124.67
    *     page: 0
    *   },
    *   end: {             // end selection params
    *     x: 150.54,
    *     y: 174.72
    *     page: 2
    *   }
    * };
    * */
  },

  getSelectionParams(options, callback) {
    /*
    * options = null;
    *
    * callback params = {
    *   cfi: {
    *     start: '',
    *     end  : ''
    *   },
    *   text: ''
    * };
    * */
  },

  removeSelection(options, callback) {
    /*
    * options = null;
    *
    * callback params = null;
    * */
  },

  handleTap(options, callback) {
    /*
    * options = {
    *   point: {
    *     x: 100.32,  // x coordinate (dpi)
    *     y: 124.67
    *   }
    * };
    *
    * callback params = {
    *   image: {           // optional, if there is an image
    *     src: '',
    *     position: {
    *       top   : 0.0,   // top coordinate (dpi)
    *       right : 0.0,
    *       bottom: 0.0,
    *       left  : 0.0
    *     }
    *   },
    *
    *   link: {            // optional, if there is a link
    *     href: '',
    *     footnote: false  // true, if footnote
    *   }
    * };
    * */
  }
};


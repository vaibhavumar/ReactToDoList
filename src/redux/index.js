import store from './store/index';
import addToList from './actions/addListItem';
import removeFromList from './actions/removeListItem';

window.store = store;
window.addToList = addToList;
window.removeFromList = removeFromList;
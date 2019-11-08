import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';

import stocker from '../../components/Stocker/stocker';

const authDiv = $('#auth');
const stockDiv = $('#stock');
const logoutNavbar = $('#navbar-button-logout');
const machine = $('#machine');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // someone is logged in - we should NOT see auth component
      stockDiv.removeClass('hide');
      logoutNavbar.removeClass('hide');
      authDiv.addClass('hide');
      stocker.buildTheStocker(user.uid);
      machine.removeClass('hide');
    } else {
      // nobody logged in SHOW auth component
      stockDiv.addClass('hide');
      logoutNavbar.addClass('hide');
      authDiv.removeClass('hide');
      machine.addClass('hide');
    }
  });
};

export default { checkLoginStatus };

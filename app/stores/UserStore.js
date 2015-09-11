import Immutable from 'immutable';
import UserActions from 'actions/UserActions';
import alt from 'altInstance';

class UserStore {


  constructor() {
    this.user = Immutable.Map({});
    this.on('init', this.bootstrap);
    this.on('bootstrap', this.bootstrap);
    this.bindListeners({
      handleLoginAttempt: UserActions.MANUALLOGIN,
      handleLoginSuccess: UserActions.LOGINSUCCESS,
      handleLogoutAttempt: UserActions.LOGOUT,
      handleLogoutSuccess: UserActions.LOGOUTSUCCESS
    });
  }

  bootstrap() {
    if (!Immutable.Map.isMap(this.user)) {
      this.user = Immutable.fromJS(this.user);
    }
  }

  handleLoginAttempt() {
    this.user = this.user.set('isWaiting', true);
    this.emitChange();
  }

  handleLoginSuccess() {
    this.user = this.user.merge({ isWaiting: false, authenticated: true });
    this.emitChange();
  }

  handleLogoutAttempt() {
    this.user = this.user.set('isWaiting', true);
    this.emitChange();
  }

  handleLogoutSuccess() {
    this.user = this.user.merge({ isWaiting: false, authenticated: false });
    this.emitChange();
  }

}

// Export our newly created Store
export default alt.createStore(UserStore, 'UserStore');

UserStore.js
import Immutable from 'immutable';
import UserActions from 'actions/UserActions';
import alt from 'altInstance';


class UserStore {

  /*
   * The constructor of your store definition receives the alt instance as its first and only argument. All instance variables,
   * values assigned to `this`, in any part of the StoreModel will become part of state.
   */
  constructor() {
    // Instance variables defined anywhere in the store will become the state. You can initialize these in the constructor and
    // then update them directly in the prototype methods
    this.user = Immutable.Map({});

    // (lifecycleMethod: string, handler: function): undefined
    // on: This method can be used to listen to Lifecycle events. Normally they would set up in the constructor
    this.on('init', this.bootstrap);
    this.on('bootstrap', this.bootstrap);

    // (listenersMap: object): undefined
    // bindListeners accepts an object where the keys correspond to the method in your
    // StoreModel and the values can either be an array of action symbols or a single action symbol.
    // Remember: alt generates uppercase constants for us to reference
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

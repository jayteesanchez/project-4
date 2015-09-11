import alt from 'altInstance';
import UserWebAPIUtils from 'utils/UserWebAPIUtils';

class UserActions {

  manuallogin(data) {
    this.dispatch();
    UserWebAPIUtils.manuallogin(data)
      .then((response, textStatus) => {
        if (textStatus === 'success') {
          // Dispatch another event for successful login
          this.actions.loginsuccess(data.email);
        }
      }, () => {
        // Dispatch another event for a bad login
      });
  }

  loginsuccess(email) {
    this.dispatch(email);
  }

  // Leaving this here for future use
  register(data) {
    this.dispatch(data);
  }

  logout() {
    this.dispatch();
    UserWebAPIUtils.logout()
      .then((response, textStatus) => {
        if (textStatus === 'success') {
          // Dispatch another event for successful login
          this.actions.logoutsuccess();
        }
      }, () => {
        // Dispatch another event for a bad login
      });
  }

  logoutsuccess() {
    this.dispatch();
  }
}

export default alt.createActions(UserActions);

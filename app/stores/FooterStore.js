import alt from '../alt';
import FooterActions from '../actions/FooterActions';

class FooterStore {
  constructor() {
    this.bindActions(FooterActions);
    this.questions = [];
  }
}

export default alt.createStore(FooterStore);

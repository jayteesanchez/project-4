import Immutable from 'immutable';
import QuestionActions from 'actions/QuestionActions';
import { fromJSOrdered } from 'utils/immutableHelpers';
import alt from 'altInstance';

class QuestionStore {

  /*
   * The constructor of your store definition receives the alt instance as its first and only argument. All instance variables,
   * values assigned to `this`, in any part of the StoreModel will become part of state.
   */
  constructor() {
    // Instance variables defined anywhere in the store will become the state. You can initialize these in the constructor and
    // then update them directly in the prototype methods
    this.questions = Immutable.OrderedMap({});
    // Do not think we need an Immutable object here
    this.newQuestion = '';

    // (lifecycleMethod: string, handler: function): undefined
    // on: This method can be used to listen to Lifecycle events. Normally they would set up in the constructor
    this.on('init', this.bootstrap);
    this.on('bootstrap', this.bootstrap);
    // (listenersMap: object): undefined
    // bindListeners accepts an object where the keys correspond to the method in your
    // StoreModel and the values can either be an array of action symbols or a single action symbol.
    // Remember: alt generates uppercase constants for us to reference
    this.bindListeners({
      handleIncrement: QuestionActions.INCREMENT,
      handleDecrement: QuestionActions.DECREMENT,
      handleCreate: QuestionActions.CREATE,
      handleDestroy: QuestionActions.DESTROY,
      handleTyping: QuestionActions.TYPING
    });
  }

  bootstrap() {
    if (!Immutable.OrderedMap.isOrderedMap(this.questions)) {
      this.questions = fromJSOrdered(this.questions);
    }
    this.newquestion = '';
  }

  handleIncrement(id) {
    const question = this.questions.get(id);
    const votes = question.get('votes');
    this.questions = this.questions.set(id, question.set('votes', votes + 1));
    this.emitChange();
  }

  handleDecrement(id) {
    const question = this.questions.get(id);
    const votes = question.get('votes');
    this.questions = this.questions.set(id, question.set('votes', votes - 1));
    this.emitChange();
  }

  handleCreate(data) {
    const id = data.id;
    this.questions = this.questions.set(id, Immutable.fromJS(data));
    this.emitChange();
  }

  handleDestroy(id) {
    this.questions = this.questions.delete(id);
    this.emitChange();
  }

  handleTyping(text) {
    // Check if it already exists
    this.newQuestion = text;
    this.emitChange();
    // otherwise, it is unchanged.
  }

}

// Export our newly created Store
export default alt.createStore(QuestionStore, 'QuestionStore');

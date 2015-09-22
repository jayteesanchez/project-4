import alt from '../alt';
import HomeActions from '../actions/HomeActions';

class HomeStore {
  constructor() {
    this.bindActions(HomeActions);
    this.questions = [];
  }

  onGetQuestionsSuccess(data) {
    this.questions = data;
  }

  onGetQuestionsFail(errorMessage) {
    toastr.error(errorMessage);
  }

  onVoteFail(errorMessage) {
    toastr.error(errorMessage);
  }

  onChangeDisplayFail(errorMessage){
    toastr.error(errorMessage);
  }

  onDownVoteFail(errorMessage){
    toastr.error(errorMessage);
  }

  onRemoveQuestionFail(errorMessage){
    toastr.error(errorMessage);
  }
}

export default alt.createStore(HomeStore);

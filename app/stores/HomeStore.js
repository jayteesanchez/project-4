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

  onVoteSuccess(successMessage) {
    window.setTimeout(toastr.success('Vote Successful, Keep Going!'), 30000);
  }

  onVoteFail(errorMessage) {
    toastr.error(errorMessage);
  }

  onChangeDisplayFail(errorMessage){
    toastr.error(errorMessage);
  }

  onDownVoteSuccess(successMessage){
    window.setTimeout(toastr.error('You\'ve Successfully Downvoted the Question'), 30000);
  }

  onDownVoteFail(errorMessage){
    toastr.error(errorMessage);
  }

  onRemoveQuestionSuccess(successMessage){
    window.setTimeout(toastr.error('The Bad Question was Removed!'), 30000);
  }
  onRemoveQuestionFail(errorMessage){
    toastr.error(errorMessage);
  }
}

export default alt.createStore(HomeStore);

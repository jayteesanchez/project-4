import alt from '../alt';

class HomeActions {
  constructor() {
    this.generateActions(
      'getQuestionsSuccess',
      'getQuestionsFail',
      'vote1Fail',
      'vote2Fail',
      'voteSuccess',
      'changeDisplayFail',
      'downVoteSuccess',
      'downVoteFail',
      'removeQuestionSuccess'
    );
  }

  getQuestions() {
    $.ajax({ url: '/api/questions' })
      .done((data) => {
        this.actions.getQuestionsSuccess(data);
      })
      .fail(jqXhr => {
        this.actions.getQuestionsFail(jqXhr.responseJSON.message);
      });
  }

  vote1(id, count) {
    $.ajax({
      type: 'PUT',
      url: '/api/questions/' + id,
      data: { votes_choice_1: count + 1}
    })
      .done((data) => {
        this.actions.voteSuccess(data);
        this.actions.getQuestions();
      })
      .fail((jqXhr) => {
        this.actions.vote1Fail(jqXhr.responseJSON.message);
      });
  }

  vote2(id, count) {
    $.ajax({
      type: 'PUT',
      url: '/api/questions/' + id,
      data: { votes_choice_2: count + 1}
    })
      .done((data) => {
        this.actions.voteSuccess(data);
        this.actions.getQuestions();
      })
      .fail((jqXhr) => {
        this.actions.vote2Fail(jqXhr.responseJSON.message);
      });
  }

  changeDisplay(question) {
    var change = true;
    var id = question._id;
    if(question.display) var change = false;
    $.ajax({
      type: 'PUT',
      url: '/api/questions/' + id,
      data: { display: change }
    })
      .done(() => {
        this.actions.getQuestions();
      })
      .fail((jqXhr) => {
        this.actions.changeDisplayFail(jqXhr.responseJSON.message);
      });
  }

  downVote(id, count) {
    console.log(id, count);
    $.ajax({
      type: 'PUT',
      url: '/api/questions/' + id,
      data: { downVote: count + 1}
    })
      .done((res) => {
        this.actions.downVoteSuccess(res);
        this.actions.getQuestions();
      })
      .fail((jqXhr) => {
        this.actions.downVoteFail(jqXhr.responseJSON.message);
      });
  }

  removeQuestion(id) {
    console.log(id);
    $.ajax({
      type: 'DELETE',
      url: '/api/questions/' + id
    })
      .done((data) => {
        this.actions.removeQuestionSuccess(data);
        this.actions.getQuestions();
      })
      .fail((jqXhr) => {
        this.actions.removeQuestionsFail(jqXhr.responseJSON.message);
      });
  }
}

export default alt.createActions(HomeActions);

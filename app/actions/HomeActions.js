import alt from '../alt';

class HomeActions {
  constructor() {
    this.generateActions(
      'getQuestionsSuccess',
      'getQuestionsFail',
      'vote1Fail',
      'vote2Fail',
      'changeDisplayFail',
      'downVoteFail'
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
      .done(() => {
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
      .done(() => {
        this.actions.getQuestions();
      })
      .fail((jqXhr) => {
        this.actions.vote2Fail(jqXhr.responseJSON.message);
      });
  }

  changeDisplay(id, change) {
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
        console.log(res);
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
      .done(() => {
        this.actions.getQuestions();
      })
      .fail((jqXhr) => {
        this.actions.removeQuestionsFail(jqXhr.responseJSON.message);
      });
  }
}

export default alt.createActions(HomeActions);

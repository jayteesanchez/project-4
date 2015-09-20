import alt from '../alt';

class AddQuestionActions {
  constructor() {
    this.generateActions(
      'addQuestionSuccess',
      'addQuestionFail',
      'updateQuestion',
      'updateChoice1',
      'updateChoice1_img',
      'updateChoice2',
      'updateChoice2_img',
      'invalid'
    );
  }

  addQuestion(question, choice1, choice1_img, choice2, choice2_img) {
    $.ajax({
      type: 'POST',
      url: '/api/questions',
      data: {
        question:    question,
        choice1:     choice1,
        choice1_img: choice1_img,
        choice2:     choice2,
        choice2_img: choice2_img
      }
    })
      .done((data) => {
        this.actions.addQuestionSuccess(data.message);
      })
      .fail((jqXhr) => {
        this.actions.addQuestionFail(jqXhr.responseJSON.message);
      });
  }
}

export default alt.createActions(AddQuestionActions);

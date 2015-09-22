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
      'invalidQuestion',
      'invalidChoice1',
      'invalidChoice1_img',
      'invalidChoice2',
      'invalidChoice2_img'
    );
  }

  addQuestion(q, c1, c1_img, c2, c2_img) {
    console.log(q, c1, c1_img, c2, c2_img)
    $.ajax({
      type: 'POST',
      url: '/api/questions/',
      data: {
        question:    q,
        choice1:     c1,
        choice1_img: c1_img,
        choice2:     c2,
        choice2_img: c2_img
      }
    })
      .done((data) => {
        console.log(data)
        this.actions.addQuestionSuccess(data.message);
      })
      .fail((jqXhr) => {
        this.actions.addQuestionFail(jqXhr.responseJSON.message);
      });
  }
}

export default alt.createActions(AddQuestionActions);

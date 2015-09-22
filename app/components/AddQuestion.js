import React from 'react';
import AddQuestionStore from '../stores/AddQuestionStore';
import AddQuestionActions from '../actions/AddQuestionActions';

class AddQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = AddQuestionStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    AddQuestionStore.listen(this.onChange);
  }

  componentWillUnmount() {
    AddQuestionStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleSubmit(event) {
    event.preventDefault();
    var q = this.state.question.trim();
    var c1 = this.state.choice1;
    var c1_img = this.state.choice1_img;
    var c2 = this.state.choice2;
    var c2_img = this.state.choice2_img;

    if (!q) {
      AddQuestionActions.invalidQuestion();
      this.refs.questionTextField.getDOMNode().focus();
    }

    if (!c1) {
      AddQuestionActions.invalidChoice1();
    }

    if (!c1_img) {
      AddQuestionActions.invalidChoice1_img();
    }

    if (!c2) {
      AddQuestionActions.invalidChoice2();
    }

    if (!c2_img) {
      AddQuestionActions.invalidChoice2_img();
    }

    if (q && c1 && c1_img && c2 && c2_img) {
      AddQuestionActions.addQuestion(q, c1, c1_img, c2, c2_img);
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='row fadeInUp animated'>
          <div className='col-sm-8 col-sm-offset-2'>
            <div className='panel panel-default'>
              <div className='panel-heading'>Add your Question!</div>
              <div className='panel-body'>
                <form onSubmit={this.handleSubmit.bind(this)}>
                  <div className={'form-group ' + this.state.questionValidationState}>
                    <label className='control-label'>Question</label>
                    <input type='text' className='form-control' ref='questionTextField' value={this.state.question}
                           onChange={AddQuestionActions.updateQuestion} autoFocus/>
                    <span className='help-block'>{this.state.helpBlock}</span>
                  </div>
                  <div className={'form-group ' + this.state.choice1ValidationState}>
                    <label className='control-label'>Choice 1</label>
                    <input type='text' className='form-control' ref='choice1TextField' value={this.state.choice1}
                           onChange={AddQuestionActions.updateChoice1} />
                    <span className='help-block'>{this.state.helpBlock}</span>
                  </div>
                  <div className={'form-group ' + this.state.choice1_imgValidationState}>
                    <label className='control-label'>Choice 1 Image URL</label>
                    <input type='text' className='form-control' ref='choice1_imgTextField' value={this.state.choice1_img}
                           onChange={AddQuestionActions.updateChoice1_img} />
                    <span className='help-block'>{this.state.helpBlock}</span>
                  </div>
                  <div className={'form-group ' + this.state.choice2ValidationState}>
                    <label className='control-label'>Choice 2</label>
                    <input type='text' className='form-control' ref='choice2TextField' value={this.state.choice2}
                           onChange={AddQuestionActions.updateChoice2} />
                    <span className='help-block'>{this.state.helpBlock}</span>
                  </div>
                  <div className={'form-group ' + this.state.choice2_imgValidationState}>
                    <label className='control-label'>Choice 2 Image URL</label>
                    <input type='text' className='form-control' ref='choice2_imgTextField' value={this.state.choice2_img}
                           onChange={AddQuestionActions.updateChoice2_img} />
                    <span className='help-block'>{this.state.helpBlock}</span>
                  </div>
                  <button type='submit' className='btn btn-success flipInX animated'>Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddQuestion;

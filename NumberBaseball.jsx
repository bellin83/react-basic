const React = require('react');
const { Component } = require('react');

//랜덤하게 숫자 4개 뽑는 함수
function getNumbers() {

}

class NumberBaseball extends Component {
  state = {
    result: '',
    value: '',
    answer: getNumbers(),
    tries: [],
  };

  onSubmitForm = () => {

  };

  onChangeInput = () => {

  };

  render() {
    return (
      <>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
        </form>
        <div>시도: {this.state.tries.length}</div>
        <ul>
          {['사과', '바나나', '배', '감', '귤'].map((value) => {
            return (
              <li>{value}</li>
            );
          })}
        </ul>
      </>
    );
  }
}

module.exports = NumberBaseball;
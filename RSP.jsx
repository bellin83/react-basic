const React = require('react');
const { Component } = require('react');

// 클래스의 경우 -> constructor -> render -> ref -> componentDidMount
// -> (setState/props 바뀔 때 -> souldComponentUpdate -> render -> componentDidUpdate)
// 부모가 나를 없앴을 때 -> componentWillUnmount -> 소멸

class RSP extends Component {
  state = {
    result: '',
    imgCoord: 0,
    score: 0,
  };

  // 컴포넌트가 첫 렌더링 후
  componentDidMount() {
  }

  // 리렌더링 후
  componentDidUpdate(prevProps, prevState, snapshot) {
  }

  // 컴포넌트가 제거되기 직전
  componentWillUnmount() {
  }

  render() {
    const { result, score, imgCoord } = this.state;

    return (
      <>
        <div id="compoter" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }}></div>
        <div>
          <button id='rock' className='btn' onClick={() => onClickBtn('바위')}>바위</button>
          <button id='scissor' className='btn' onClick={() => onClickBtn('가위')}>가위</button>
          <button id='paper' className='btn' onClick={() => onClickBtn('보')}>보</button>
        </div>
        <div>{result}</div>
        <div>현재 {score}점</div>
      </>
    );

  }
}

module.exports = RSP;
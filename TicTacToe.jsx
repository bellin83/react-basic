const React = require('react');
const { useState, useReducer } = require('react');
const Table = require('./Table');

const initialState = {
  winner: '',
  turn: '0',
  tableData: [['','',''], ['','',''], ['','','']],
};

const reducer = (state, action) => {

};

const TicTacToe = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const [winner, setWinner] = useState('');
  // const [turn, setTurn] = useState('o');
  // const [tableData, setTableData] = useState[['','',''], ['','',''], ['','','']];

  return (
    <>
      <Table />
      {winner && <div>{winner}님의 승리</div>}
    </>
  );
};

module.exports = TicTacToe;

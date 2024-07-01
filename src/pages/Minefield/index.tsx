import React, { useState } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import params from './params';
import MineField from '../../../components/minefieldComponents/MineField';
import LevelSelection from '../../../components/minefieldComponents/screens/LevelSelection';
import Header from '../../../components/minefieldComponents/Header';
import { 
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
  invertFlag,
  flagsUsed
 } from './functions';

export default function Minefield(props) {
  const createState = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return {
      board: createMinedBoard(rows, cols, minesAmount()),
      won: false,
      lost: false,
      showLevelSelection: false,
    };
  };

  const minesAmount = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return Math.ceil(cols * rows * params.difficultLevel);
  };

  const [state, setState] = useState(createState);

  const onOpenField = (row, column) => { 
    const board = cloneBoard(state.board);
    openField(board, row, column);
    const lost = hadExplosion(board);
    const won = wonGame(board);

    if (lost) {
      showMines(board);
      Alert.alert("Que pena", "Você perdeu");
    }

    if (won) {
      Alert.alert("Parabéns", "Você venceu!");
    }

    setState({ ...state, board, lost, won });
  };

  const onSelectField = (row, column) => { 
    const board = cloneBoard(state.board);
    invertFlag(board, row, column);
    const won = wonGame(board);

    if (won) {
      Alert.alert("Parabéns", "Você venceu!");
    }

    setState({ ...state, board, won }); 
  };

  const onLevelSelected = level => { 
    params.difficultLevel = level;
    setState(createState()); 
  };

  const onCancelLevelSelection = () => { 
    setState(prevState => ({ ...prevState, showLevelSelection: false }));
  };

  const onFlagPress = () => {
    setState(prevState => ({ ...prevState, showLevelSelection: true }));
  };

  const onNewGame = () => {
    setState(createState());
  };

  return (
    <View style={styles.container}>
      <LevelSelection
        isVisible={state.showLevelSelection}
        onLevelSelected={onLevelSelected}
        onCancel={onCancelLevelSelection}
      />
      <Header
        flagsLeft={minesAmount() - flagsUsed(state.board)}
        onNewGame={onNewGame}
        onFlagPress={onFlagPress}
      />
      <View style={styles.board}>
        <MineField
          board={state.board}
          onOpenField={onOpenField}
          onSelectField={onSelectField}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "#EFF",
  },
  board: {
    alignItems: "center",
    backgroundColor: "#AAA"
  }
});

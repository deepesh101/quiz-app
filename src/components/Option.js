import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Questions from '../questions.json';
import {useStateValue} from '../stateProvider';

const Option = props => {
  const [{score}, dispatch] = useStateValue();
  const updateScore = Score => {
    dispatch({
      type: 'UPDATE_SCORE',
      score: Score,
    });
  };
  let correctAnswerIdx = Questions.questions[props.qnIndex].correctIndex;
  return (
    <View style={[styles.Option]}>
      <TouchableOpacity
        onPress={() => {
          props.optionIdx === correctAnswerIdx
            ? updateScore(1)
            : updateScore(0);
          if (props.qnIndex + 1 >= Questions.questions.length) {
            props.navigation.replace('CongratsScreen')
          } else {
            props.navigation.replace('QuestionScreen', {
              index: props.qnIndex + 1,
            });
          }
        }}
      >
        <Text style={styles.OptionText}>{props.value}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Option;

const styles = StyleSheet.create({
  Option: {
    borderColor: 'purple',
    borderWidth: 2,
    margin: 40,
    marginBottom: 3,
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EDECEC',
  },
  OptionText: {
    fontSize: 16,
  },
});

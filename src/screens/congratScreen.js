import React from 'react';
import {StyleSheet, Text, View, Linking} from 'react-native';
import {Divider} from 'react-native-elements';
import {Button} from 'react-native-elements';
import {useStateValue} from '../stateProvider';
const CongratScreen = props => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [{user, score}] = useStateValue();
  return (
    <View style={styles.cogratsScreen}>
      <Text style={styles.congratsText}>
        Congratulations {user}, You've scored {score} points
      </Text>
      <Divider width={100} />
      <Text style={styles.congratsText}>Liked it?</Text>
      <Button
        title="Give a ⭐ on github"
        type="outline"
        onPress={() => {
          Linking.openURL(
            'https://github.com/deepesh101/quiz-app',
          );
        }}
      />
      <Button title='Go Back to Home Page' style={{ marginTop: 50 }} onPress={() => props.navigation.replace('WelcomeScreen')}/>
    </View>
  );
};

export default CongratScreen;

const styles = StyleSheet.create({
  cogratsScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  congratsText: {
    fontSize: 26,
    textAlign: 'center',
  },
});

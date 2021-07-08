import React, { useState } from 'react'
import GoalItem from './GoalItem'
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'

const GoalInput = (props) => {
  const [enterdGoal, setEnterdGoal] = useState([])

  const goalInputHander = (enterdText) => {
    setEnterdGoal(enterdText)
  }

  const addGoalHander = () => {
    props.onAddGoal(enterdGoal)
    setEnterdGoal('');
  }

  return (
    <Modal visible={props.visible} animationType="slide">
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="目標を設定してください"
        style={styles.input}
        onChangeText={goalInputHander}
        value={enterdGoal.toString()}
      />
      <Button title="キャンセル" color="red" onPress={props.onCancel} />

      <Button title="追加" onPress={addGoalHander} />
    </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
})

export default GoalInput

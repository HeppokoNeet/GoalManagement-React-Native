import React, { useState } from 'react'
import GoalItem from './GoalItem'
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'

const GoalInput = (props) => {
  const [enterdGoal, setEnterdGoal] = useState([])

  const goalInputHander = (enterdText) => {
    setEnterdGoal(enterdText)
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

      <Button title="追加" onPress={props.onAddGoal.bind(this, enterdGoal)} />
    </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})

export default GoalInput

import React, { useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import styles from '../styles/styles'

function GoalSettingScreen ({ navigation }) {
  const [goalType, setGoalType] = useState('')
  const [goalTarget, setGoalTarget] = useState('')

  const handleSaveGoal = () => {
    if (!goalType || !goalTarget) {
      alert('Please provide goal type and target')
      return
    }

    console.log('Goal saved:', { goalType, goalTarget })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Set Your Fitness Goal</Text>
      <TextInput
        placeholder='Goal Type (e.g., Weight Loss, Muscle Gain)'
        value={goalType}
        onChangeText={setGoalType}
        style={styles.input}
      />
      <TextInput
        placeholder='Goal Target (e.g., Lose 10 lbs, Gain 5 lbs of Muscle)'
        value={goalTarget}
        onChangeText={setGoalTarget}
        style={styles.input}
      />
      <Button title='Save Goal' onPress={handleSaveGoal} />
      <Button title='Back to Profile' onPress={() => navigation.goBack()} />
    </View>
  )
}

export default GoalSettingScreen

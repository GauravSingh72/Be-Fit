import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import styles from '../styles/styles'

function GoalSettingScreen ({ navigation }) {
  const [goalType, setGoalType] = useState('')
  const [goalTarget, setGoalTarget] = useState('')
  const [savedGoals, setSavedGoals] = useState([])
  const [totalCalorieGoal, setTotalCalorieGoal] = useState('')

  const handleSaveGoal = () => {
    if (!goalType || !goalTarget) {
      alert('Please provide goal type and target')
      return
    }

    const newGoal = { goalType, goalTarget, totalCalorieGoal }
    setSavedGoals([...savedGoals, newGoal])
    setGoalType('')
    setGoalTarget('')
    setTotalCalorieGoal('')
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
      <TextInput
        placeholder='Total Calorie Goal'
        value={totalCalorieGoal}
        onChangeText={setTotalCalorieGoal}
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={handleSaveGoal}>
        <Text style={styles.buttonText}>Save Goal</Text>
      </TouchableOpacity>
      <ScrollView style={styles.logContainer}>
        {savedGoals.map((goal, index) => (
          <View key={index} style={styles.logItem}>
            <Text>
              Goal Type: {goal.goalType}
              {'\n'}Goal Target: {goal.goalTarget}
              {'\n'}Total Calories : {goal.totalCalorieGoal}
            </Text>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity
        style={[styles.button, styles.bottomButton]}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Back to Profile</Text>
      </TouchableOpacity>
    </View>
  )
}

export default GoalSettingScreen

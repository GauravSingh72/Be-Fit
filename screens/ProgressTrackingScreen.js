import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import styles from '../styles/styles'
import ProgressBar from 'react-native-progress/Bar'

function ProgressTrackingScreen ({ route }) {
  const { workouts, totalCalorieGoal } = route.params

  const totalCaloriesBurned = workouts.reduce(
    (total, workout) => total + parseInt(workout.duration) * 2,
    0
  )

  const goalCalories = totalCalorieGoal || 500
  const progressPercentage = (totalCaloriesBurned / goalCalories) * 100

  return (
    <ScrollView contentContainerStyle={styles.progressContainer}>
      <Text style={styles.heading}>Progress Tracking</Text>

      <View style={styles.progressContainer}>
        <Text style={styles.subHeading}>Total Calories Burned</Text>
        <Text>{totalCaloriesBurned} calories</Text>
        <ProgressBar
          progress={totalCaloriesBurned / goalCalories}
          width={null}
          color='#007bff'
          style={styles.progressBar}
        />
        <Text style={styles.progressText}>
          {progressPercentage.toFixed(2)}% towards goal
        </Text>
      </View>

      <View style={styles.progressContainer}>
        <Text style={styles.subHeading}>Logged Workouts</Text>
        <ScrollView contentContainerStyle={styles.logContainer}>
          {workouts.map((workout, index) => (
            <View key={index} style={styles.logItem}>
              <Text>
                {workout.activity} - {workout.duration} mins
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  )
}

export default ProgressTrackingScreen

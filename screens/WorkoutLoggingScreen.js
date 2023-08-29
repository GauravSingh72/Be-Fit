import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from '../styles/styles'

function WorkoutLoggingScreen () {
  const [workouts, setWorkouts] = useState([])
  const [meals, setMeals] = useState([])
  const [activity, setActivity] = useState('')
  const [duration, setDuration] = useState('')
  const [mealName, setMealName] = useState('')
  const [calories, setCalories] = useState('')

  const navigation = useNavigation()

  const handleAddWorkout = () => {
    if (!activity || !duration) {
      alert('Please provide activity and duration')
      return
    }

    const newWorkout = { activity, duration }
    setWorkouts([...workouts, newWorkout])
    setActivity('')
    setDuration('')
  }

  const handleAddMeal = () => {
    if (!mealName || !calories) {
      alert('Please provide meal name and calories')
      return
    }

    const newMeal = { mealName, calories }
    setMeals([...meals, newMeal])
    setMealName('')
    setCalories('')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Log Your Workout and Meals</Text>

      <Text style={styles.subHeading}>Workout Logging</Text>
      <TextInput
        placeholder='Activity (e.g., Running, Yoga)'
        value={activity}
        onChangeText={setActivity}
        style={styles.input}
      />
      <TextInput
        placeholder='Duration (minutes)'
        value={duration}
        onChangeText={setDuration}
        style={styles.input}
        keyboardType='numeric'
      />
      <TouchableOpacity style={styles.button} onPress={handleAddWorkout}>
        <Text style={styles.buttonText}>Add Workout</Text>
      </TouchableOpacity>
      <ScrollView style={styles.logContainer}>
        {workouts.map((workout, index) => (
          <View key={index} style={styles.logItem}>
            <Text>
              {workout.activity} - {workout.duration} mins
            </Text>
          </View>
        ))}
      </ScrollView>

      <Text style={styles.subHeading}>Diet Logging</Text>
      <TextInput
        placeholder='Meal Name (e.g., Breakfast, Lunch)'
        value={mealName}
        onChangeText={setMealName}
        style={styles.input}
      />
      <TextInput
        placeholder='Calories'
        value={calories}
        onChangeText={setCalories}
        style={styles.input}
        keyboardType='numeric'
      />
      <TouchableOpacity style={styles.button} onPress={handleAddMeal}>
        <Text style={styles.buttonText}>Add Meal</Text>
      </TouchableOpacity>
      <ScrollView style={styles.logContainer}>
        {meals.map((meal, index) => (
          <View key={index} style={styles.logItem}>
            <Text>
              {meal.mealName} - {meal.calories} calories
            </Text>
          </View>
        ))}
      </ScrollView>
      <Button title='Back to Profile' onPress={() => navigation.goBack()} />
    </View>
  )
}

export default WorkoutLoggingScreen

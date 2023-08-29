import React, { useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from '../styles/styles'

function UserProfileScreen () {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')

  const navigation = useNavigation()

  const handleSaveProfile = () => {
    console.log('Profile saved:', { name, age, gender })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>User Profile</Text>
      <TextInput
        placeholder='Name'
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder='Age'
        value={age}
        onChangeText={setAge}
        style={styles.input}
        keyboardType='numeric'
      />
      <TextInput
        placeholder='Gender'
        value={gender}
        onChangeText={setGender}
        style={styles.input}
      />
      <View style={styles.buttonContainer}>
        <Button title='Save Profile' onPress={handleSaveProfile} />
        <View style={styles.buttonGap} />
        <Button
          title='Set Fitness Goal'
          onPress={() => navigation.navigate('GoalSetting')}
        />
      </View>
      <View style={styles.workoutBtn} />
      <View>
        <Button
          title='Workout Logging'
          onPress={() => navigation.navigate('WorkoutLogging')}
        />
      </View>
    </View>
  )
}

export default UserProfileScreen

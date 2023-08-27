// UserProfileScreen.js
import React, { useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from '../style'

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
      />
      <TextInput
        placeholder='Gender'
        value={gender}
        onChangeText={setGender}
        style={styles.input}
      />
      <Button title='Save Profile' onPress={handleSaveProfile} />
      <Button
        title='Set Fitness Goal'
        onPress={() => navigation.navigate('GoalSetting')}
      />
    </View>
  )
}

export default UserProfileScreen

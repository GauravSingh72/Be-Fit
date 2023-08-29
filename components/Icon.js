import React from 'react'
import { Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons' 

const Icon = ({ name, color, size }) => {
  return <Ionicons name={name} color={color} size={size} />
}

export default Icon

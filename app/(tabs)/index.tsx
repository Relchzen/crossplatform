import { Image, StyleSheet, Platform, TextInput } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Counter from '@/components/Counter';
import { useState } from 'react';
import Profile from '../../components/Profile';

export default function HomeScreen() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  const [showProfile, setShowProfile] = useState(false)
  
  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleDecrement = () => {
    setCount(count - 1)
  }

  const handlePassValue = () => {
    setShowProfile(true)
  }

  return (
      <ThemedView style={styles.titleContainer}>
        {showProfile && <Profile name={name} age={count} />}
        <Counter value={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleInput={handlePassValue}
        />
        <TextInput
        style={styles.input}
        placeholder='input your name here'
        value={name}
        placeholderTextColor={'#ffffff'}
        onChangeText={(text) => setName(text)}
        />
      </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
    justifyContent: 'center',
    padding: 20,
    minHeight: '100%'
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  input: {
    width: '50%',
    height: 32,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    color: '#FFFFFF',
  }
});

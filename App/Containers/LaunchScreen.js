import React from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
// import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'
import RoundedButton from '../Components/RoundedButton.js'

import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends React.Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background}
          style={styles.backgroundImage}
          resizeMode='stretch' />

        <ScrollView style={styles.container}>
          <View style={styles.section} >
            <Text style={styles.sectionText}>
              {'Welcome'}
            </Text>
          </View>
          <RoundedButton text='Sign up with Facebook' styleType='facebook' />
          <RoundedButton text='Sign up with Email' />

          {/* <DevscreensButton /> */}
        </ScrollView>
      </View>
    )
  }
}

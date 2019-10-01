import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'

const Loading = (props) => (
  // We are using a spread operator (JS ES6) in order to apply default styles defined in this component and overriding them with any CSS objects passed into this component via the style prop.
  <View style={{ ...styles.activityIndicator, ...props.style }}>
    <ActivityIndicator animating={props.isLoading} color='#000000' />
    <Text style={styles.loadingText} children='Loading...' />
  </View>
)

const styles = StyleSheet.create({
  activityIndicator: {
    display: 'flex',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10
  }
})

export default Loading

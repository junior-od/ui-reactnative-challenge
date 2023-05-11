import React, {useEffect} from 'react';
import {View, Text, StyleSheet, useColorScheme, Image} from 'react-native';
import {colors} from '../../util/ui/Colors';

const appLogo = require('../../assests/app-logo.png');

const SplashScreen = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles(isDarkMode).containerStyle}>
      <View style={styles(isDarkMode).imageContainerStyle}>
        <Image source={appLogo} />
      </View>

      <Text style={styles(isDarkMode).firstTextStyle}>
        Designed by{' '}
        <Text style={styles(isDarkMode).secondTextStyle}>
          Peddle Technologies
        </Text>
      </Text>
    </View>
  );
};

const styles = (isDarkMode: Boolean) => {
  return StyleSheet.create({
    containerStyle: {
      flex: 1,
      backgroundColor: colors(isDarkMode).background,
      alignItems: 'center',
    },

    imageContainerStyle: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },

    firstTextStyle: {
      fontSize: 12,
      color: colors(isDarkMode).textGrey,
      fontWeight: '500',
      position: 'absolute',
      bottom: 45,
    },

    secondTextStyle: {
      fontSize: 12,
      color: colors(isDarkMode).textBlack,
      fontWeight: '500',
    },
  });
};

export default SplashScreen;

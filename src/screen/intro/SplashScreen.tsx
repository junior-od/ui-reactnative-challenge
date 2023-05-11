import React, {useEffect} from 'react';
import {View, Text, StyleSheet, useColorScheme} from 'react-native';
import {colors} from '../../util/ui/Colors';
import ImageText from '../../components/ImageText';
import {fontSizes} from '../../util/ui/Sizes';

const appLogo = require('../../assests/app-icon.png');

const SplashScreen = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles(isDarkMode).containerStyle}>
      <View style={styles(isDarkMode).imageContainerStyle}>
        <ImageText
          imageStyle={styles(isDarkMode).imageStyle}
          imageSource={appLogo}
          text={'Adproof'}
        />
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

    imageStyle: {
      width: 50,
      height: 50,
    },

    firstTextStyle: {
      fontSize: fontSizes.sm,
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

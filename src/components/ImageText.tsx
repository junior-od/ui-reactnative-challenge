import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  StyleProp,
  ViewStyle,
  TextStyle,
  Image,
  ImageSourcePropType,
  ImageStyle,
} from 'react-native';
import {colors} from '../util/ui/Colors';
import {contentSizes, fontSizes} from '../util/ui/Sizes';

type ImageTextProps = {
  containerStyle?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  textStyle?: StyleProp<TextStyle>;
  imageSource: ImageSourcePropType;
  text: string;
};

const ImageText = ({
  containerStyle,
  textStyle,
  imageSource,
  text,
  imageStyle,
}: ImageTextProps) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={[styles(isDarkMode).containerStyle, containerStyle]}>
      <Image style={imageStyle} source={imageSource} />
      <Text style={[styles(isDarkMode).textStyle, textStyle]}>{text}</Text>
    </View>
  );
};

const styles = (isDarkMode: Boolean) => {
  return StyleSheet.create({
    containerStyle: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    textStyle: {
      paddingHorizontal: contentSizes.sm,
      fontSize: fontSizes.xxl,
      color: colors(isDarkMode).textBlack,
      fontWeight: 'bold',
    },
  });
};

export default ImageText;

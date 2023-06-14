import {View, Text, StatusBar, Image} from 'react-native';
import React, {useEffect} from 'react';
import {colors, styles} from '../../utils';
import {IconGrab, IlusSplash} from '../../assets';
import {useNavigation} from '@react-navigation/native';

export default function SplashScreen() {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainScreen');
    }, 4000);
  }, [navigation]);
  return (
    <>
      <StatusBar backgroundColor={colors.primary} barStyle="dark-content" />
      <View style={styles.pageSplash}>
        <Image source={IconGrab} style={styles.iconSplash} />
      </View>
      <Image
        source={IlusSplash}
        style={styles.imageSplash}
        resizeMode="contain"
      />
    </>
  );
}

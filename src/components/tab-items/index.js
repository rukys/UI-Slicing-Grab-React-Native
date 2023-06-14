import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../utils';
import {
  IconNavAct,
  IconNavHome,
  IconNavInb,
  IconNavPay,
  IconNavProfile,
} from '../../assets';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Home') {
      return <IconNavHome />;
    }
    if (title === 'Activity') {
      return <IconNavAct />;
    }
    if (title === 'Payment') {
      return <IconNavPay />;
    }
    if (title === 'Inbox') {
      return <IconNavInb />;
    }
    if (title === 'Profile') {
      return <IconNavProfile />;
    }
    return <IconNavHome />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: active => ({
    fontSize: 10,
    color: active ? colors.black : colors.grey,
    marginTop: 4,
  }),
});

import {
  View,
  Text,
  Platform,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {
  IconBag,
  IconCrown,
  IconDate,
  IconDelivery,
  IconFood,
  IconGift,
  IconGrabpay,
  IconMart,
  IconMore,
  IconOffer,
  IconScan,
  IconSearch,
  IconTransport,
  ImgBanner01,
  ImgBanner02,
} from '../../assets';
import {colors, styles} from '../../utils';
import {Gap} from '../../components';

export default function HomeScreen() {
  const HEADER_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
  const menu = [
    {image: IconFood, label: 'Food'},
    {image: IconMart, label: 'Mart'},
    {image: IconDelivery, label: 'Express'},
    {image: IconTransport, label: 'Transport'},
    {image: IconBag, label: 'Shop'},
    {image: IconOffer, label: 'Offers'},
    {image: IconGift, label: 'GiftCards'},
    {image: IconMore, label: 'More'},
  ];
  return (
    <>
      <View style={{backgroundColor: colors.primary, height: HEADER_HEIGHT}} />
      <ScrollView style={styles.pageHome}>
        <Gap height={48} />
        <View style={styles.contentHome}>
          <View style={[styles.searchBarHome, styles.shadowProp]}>
            <TouchableOpacity>
              <IconSearch />
            </TouchableOpacity>
            <Gap width={16} />
            <Text style={styles.placeholderHome}>Starbucks</Text>
            <Gap width={16} />
            <View style={styles.dashHome} />
            <Gap width={16} />
            <TouchableOpacity>
              <IconScan />
            </TouchableOpacity>
          </View>
          <Gap height={16} />

          <View style={styles.containerMenuHome}>
            {menu.map(item => (
              <TouchableOpacity style={styles.menu}>
                <item.image />
                <Gap height={8} />
                <Text style={styles.labelMenu}>{item?.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <Gap height={16} />

          <View style={styles.containerPayHome}>
            <TouchableOpacity style={styles.payHome}>
              <Text>Activate</Text>
              <Gap height={5} />
              <Text style={styles.tileSubPay}>Grabpay</Text>
              <View style={styles.iconPayHome}>
                <IconGrabpay />
              </View>
            </TouchableOpacity>
            <Gap width={16} />
            <TouchableOpacity style={styles.payHome}>
              <Text>Use Points</Text>
              <Gap height={5} />
              <Text style={styles.tileSubPay}>758</Text>
              <View style={styles.iconPayHome}>
                <IconCrown />
              </View>
            </TouchableOpacity>
          </View>
          <Gap height={36} />

          <Text style={styles.titleNews}>Celebrate Mid-Autumn Festival</Text>
          <Gap height={16} />
          <View style={styles.containerNews}>
            <TouchableOpacity style={styles.news}>
              <Image
                source={ImgBanner01}
                style={styles.imageNews}
                resizeMode="contain"
              />
              <Gap height={5} />
              <Text>Order mooncakes to gift to enjoy</Text>
              <Gap height={8} />
              <View style={styles.flexRow}>
                <IconDate />
                <Gap width={8} />
                <Text style={styles.newsDate}>Until 21 Sep</Text>
              </View>
            </TouchableOpacity>
            <Gap width={16} />
            <TouchableOpacity style={styles.news}>
              <Image
                source={ImgBanner02}
                style={styles.imageNews}
                resizeMode="contain"
              />
              <Gap height={5} />
              <Text>Plus an Extra $20 OFF on Groceries</Text>
              <Gap height={8} />
              <View style={styles.flexRow}>
                <IconDate />
                <Gap width={8} />
                <Text style={styles.newsDate}>Until 31 Aug</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Gap height={50} />
        </View>
      </ScrollView>
    </>
  );
}

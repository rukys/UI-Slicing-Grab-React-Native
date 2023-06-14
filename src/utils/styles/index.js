import {StyleSheet} from 'react-native';
import {colors} from '../colors';
// import {fonts} from '../fonts';

export const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pageSplash: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconSplash: {
    height: 47,
    width: 128,
    marginTop: -100,
  },
  imageSplash: {
    position: 'absolute',
    bottom: -110,
    width: '100%',
  },
  pageHome: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  contentHome: {
    flex: 1,
    backgroundColor: colors.white,
  },
  searchBarHome: {
    flexDirection: 'row',
    marginTop: -20,
    borderRadius: 10,
    marginHorizontal: 16,
    backgroundColor: colors.white,
    elevation: 2,
    height: 56,
    padding: 16,
    alignItems: 'center',
  },
  shadowProp: {
    shadowColor: colors.darkGrey,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  shadowPropNavbar: {
    shadowColor: colors.black,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 3,
    shadowRadius: 3,
  },
  placeholderHome: {
    flex: 1,
    color: 'grey',
  },
  dashHome: {
    width: 0.5,
    height: 56,
    backgroundColor: colors.grey,
  },
  containerMenuHome: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginLeft: 21,
  },
  menu: {
    width: 75,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    marginBottom: 24,
  },
  labelMenu: {
    // fontFamily: 'Sanomat-SansRegular',
  },
  containerPayHome: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
  },
  titlePay: {},
  tileSubPay: {
    fontWeight: 'bold',
  },
  payHome: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.softGrey,
    borderRadius: 10,
    height: 56,
  },
  iconPayHome: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    marginBottom: 10,
    marginRight: 10,
  },
  iconPointHome: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    marginBottom: 5,
    marginRight: 5,
  },
  titleNews: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 16,
  },
  containerNews: {
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  news: {
    flex: 1,
  },
  newsDate: {
    fontSize: 12,
  },
  imageNews: {
    height: 170,
    width: 170,
    borderRadius: 10,
  },
  textTitleNews: {},
});

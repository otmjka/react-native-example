import search from '../../../assets/icons/search.png';
import shop from '../../../assets/icons/shop.png';
import face from '../../../assets/icons/face.png';
import more from '../../../assets/icons/more.png';
import home from '../../../assets/icons/home.png';

const commonProps = {
  style: {flexDirection: 'column'},
  iconStyle: {width: 36},
  labelStyle: {
    fontFamily: 'Montserrat-Regular',
  },
};

export const actions = [
  {
    ...commonProps,
    label: 'Главная',
    iconSource: home,
    color: 'grey',
  },
  {
    ...commonProps,
    label: 'Поиск',
    iconSource: search,
    color: 'grey',
  },
  {
    ...commonProps,
    label: 'Корзина',
    iconSource: shop,
    color: 'grey',
  },
  {
    ...commonProps,
    label: 'Профиль',
    iconSource: face,
    color: '#1fbfaf',
  },
  {
    ...commonProps,
    label: 'Еще',
    iconSource: more,
    color: 'grey',
  },
];

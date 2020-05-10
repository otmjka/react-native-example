import cameraSelected from '../../../icons/cameraSelected.png';
import search from '../../../icons/search.png';
import shop from '../../../icons/shop.png';
import face from '../../../icons/face.png';
import more from '../../../icons/more.png';
import home from '../../../icons/home.png';

export const actions = [
  {
    style: {flexDirection: 'column'},
    iconStyle: {width: 36},
    label: 'Главная',
    iconSource: home,
    color: 'grey',
  },
  {
    style: {flexDirection: 'column'},
    iconStyle: {width: 36},
    label: 'Поиск',
    iconSource: search,
    color: 'grey',
  },
  {
    style: {flexDirection: 'column'},
    iconStyle: {width: 36},
    label: 'Корзина',
    iconSource: shop,
    color: 'grey',
  },
  {
    style: {flexDirection: 'column'},
    iconStyle: {width: 36},
    label: 'Профиль',
    iconSource: face,
    color: '#1fbfaf',
  },
  {
    style: {flexDirection: 'column'},
    iconStyle: {width: 36},
    label: 'Еще',
    iconSource: more,
    color: 'grey',
  },
];

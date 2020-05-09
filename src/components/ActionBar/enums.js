import cameraSelected from '../../../icons/cameraSelected.png';
import search from '../../../icons/search.png';
import tags from '../../../icons/tags.png';
import collections from '../../../icons/collections.png';
import richText from '../../../icons/richText.png';
import home from '../../../icons/home.png';


export const actions = [
  {
    style: {flexDirection: 'column'},
    iconStyle: {width: 36},
    label: '1Главная',
    iconSource: home,
  },
  {
    style: {flexDirection: 'column'},
    iconStyle: {width: 36},
    label: 'Поиск',
    iconSource: search,
  },
  {
    style: {flexDirection: 'column'},
    iconStyle: {width: 25},
    label: 'Корзина',
    iconSource: tags,
  },
  {
    style: {flexDirection: 'column'},
    iconStyle: {width: 25},
    label: 'Профиль',
    iconSource: collections,
  },
  {
    style: {flexDirection: 'column'},
    iconStyle: {width: 25},
    label: 'Еще',
    iconSource: richText,
  },
];

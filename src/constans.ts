import {CategoryType} from './types';

export const categories: CategoryType[] = [
  {title: 'Star Wars', id: 'star-wars'},
  {title: 'Famous people', id: 'famous-people'},
  {title: 'Saying', id: 'saying'},
  {title: 'Humour', id: 'humour'},
  {title: 'Motivational', id: 'motivational'},
];

export const getCategoryTitle = (categories: CategoryType[], id: string | undefined) => {
  let currentCategory = categories.find(obj => obj.id === id);

  return currentCategory ? currentCategory.title : 'All';
};
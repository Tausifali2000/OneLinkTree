import { ICategory } from "./categories.interface";


 const CATEGORIES: ICategory[] = [
  {
    id: 1,
    name: 'Gaming',
    image: '/categories/gamingCube.jpg',
    route: '/gaming',
  },
  {
    id: 2,
    name: 'Entertainment',
    image: '/categories/gamingStreet.jpg',
    route: '/entertainment',
  },
  {
    id: 3,
    name: 'Utilities',
    image: '/categories/softwares2.jpg',
    route: '/utilities',
  },
  {
    id: 4,
    name: 'Anime',
    image: '/categories/animeSky.jpg',
    route: '/anime',
  },
];

export default CATEGORIES;

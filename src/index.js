import { swiper } from './modules/swiper';
import { search } from './modules/search';
import { render } from './modules/render';
import { range } from './modules/range';
import { database } from './modules/database';

swiper();
search();
render(database);
range()
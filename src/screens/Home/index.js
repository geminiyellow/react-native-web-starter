import { default as Home } from './container';
import { default as Sidebar } from './sidebar';

export const route = { path: '/', exact: true, main: Home, sidebar: Sidebar };
export default Home;

import Sidebar from './sidebar';

const { Container, Reducer } = require('./module').default;

export const route = { path: '/about', main: Container, sidebar: Sidebar };
export { Container, Reducer };

import { isWeb } from '../common';

const ReactRouter = isWeb ? require('react-router-dom') : require('react-router-native');

export const { Link, Route, Redirect, Switch } = ReactRouter;
export const Router = isWeb ? ReactRouter.BrowserRouter : ReactRouter.NativeRouter;

export default ReactRouter;

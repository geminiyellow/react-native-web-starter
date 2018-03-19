import { default as About } from './container';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from './model';

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });
const Container = connect(mapStateToProps, mapDispatchToProps)(About)

export const route = { path: '/', main: Container };
export default Container;

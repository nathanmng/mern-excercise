import { connect } from 'react-redux';
import { Login } from './Login';
import { setUsername } from '../../actions/userAction';
import './styles.scss';

const mapStateToProps = ({ userReducer }) => ({
  user: userReducer,
});

const mapDispatchToProps = (dispatch) => ({
  setUsername: (username) => dispatch(setUsername(username)),
  getUserInfo: (userInfo) => dispatch(getUserInfo(userInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

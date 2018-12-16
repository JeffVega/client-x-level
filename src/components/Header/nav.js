import React from 'react'
import './nav.css'
import {connect} from 'react-redux';
import {clearAuthToken} from '../../local-storage'
import {LogoutUser} from '../../action/Action_auth'
import {Link} from 'react-router-dom'
export class Nav extends React.Component{
  logOut() {
    console.log(this.props)
    this.props.dispatch(LogoutUser());
    clearAuthToken();
}

  render(){
    let loginLinks;

    if(this.props.loggedIn){
      loginLinks =(
        <nav className='listed-links'>
            <ul className="nav-links">
                <Link to="/cal">
                    <li>Home</li>
                </Link>
                  <Link to="/food">
                    <li>Food</li>
                          </Link>
                          <Link to="/workout">
                            <li>Workouts</li>
                          </Link>
                          <Link  onClick={() => this.logOut()}  to="/">
                    <li>Logout</li>
                          </Link>
            </ul>
        </nav>
      )}
      else {
        loginLinks =(
      <nav className="nav-bar">
          <ul className="nav-duo">
            <Link to="/signin">
            <li>Login</li>
            </Link>
            <Link to="/signup">
            <li>SignUp</li>
            </Link>
        </ul>
      </nav> 
      )
      
    }
return (
  <div>
    {loginLinks}

  </div>
        );
}
}
const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Nav);
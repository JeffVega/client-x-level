import React from 'react'
import {connect} from 'react-redux';
import {clearAuthToken} from '../../local-storage'
import {LogoutUser} from '../../action/Action_auth'
import {Link} from 'react-router-dom'
export class Nav extends React.Component{
  logOut() {
    
    this.props.dispatch(LogoutUser());
    clearAuthToken();
}

  render(){
    let loginLinks;

    if(this.props.loggedIn){
      loginLinks =(
        <nav className='nav'>
            <ul className="nav__list">
                <Link to="/dash">
                    <li>Home</li>
                </Link>
                  <Link to="/food">
                    <li>Food</li>
                  </Link>
                  <Link to="/workout">
                    <li>Workouts</li>
                  </Link>
                  <Link  className="loginNav__logout-link" onClick={() => this.logOut()}  to="/">
                     <li>Logout</li>
                  </Link>
            </ul>
        </nav>
      )}
      else {
        loginLinks =(
      <nav className="nav">
          <ul className="nav__list">
            {/* <div className="nav_mobile">
              <div></div>
              <div></div>
              <div></div>
            </div> */}
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
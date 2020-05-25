import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';
import { connect } from 'react-redux';

import { auth, createUserProfileDocument } from '../firebase';

import Home from '../pages/homepage';
import ShopPage from '../pages/shopPage/shop';
import Header from '../components/header';
import SignInAndSignUpPage from '../pages/user';
import { setCurrentUser } from '../redux/user/user-actions';

class Routes extends React.Component {
	unsubscribeFromAuth = null;

    componentDidMount() {
        const { setCurrentUser } = this.props
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if(userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                            id: snapShot.id,
                            ...snapShot.data()
                        })
                    })
                    
            }
            setCurrentUser(userAuth);
                

		})
	
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
    }
    
    render() {
        return (
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route path='/signin' component={SignInAndSignUpPage}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})
  

export default connect(null, mapDispatchToProps)(Routes);

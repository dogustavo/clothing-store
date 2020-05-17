import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';

import { auth, createUserProfileDocument } from '../firebase';

import Home from '../pages/homepage';
import ShopPage from '../pages/shopPage/shop';
import Header from '../components/header';
import SignInAndSignUpPage from '../pages/user';

class Routes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null
        }
	}
	
	unsubscribeFromAuth = null;

    componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if(userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    this.setState({
                        currentUser: {
                            id: snapShot.id,
                            ...snapShot.data()
                        }
                    })

                    console.log(this.state);
                    
                })
                
            }
            else {
                this.setState({ currentUser: userAuth });
            }
		})
	
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
    }
    
    render() {
        return (
            <BrowserRouter>
                <Header currentUser={ this.state.currentUser }/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route path='/signin' component={SignInAndSignUpPage}/>
                </Switch>
            </BrowserRouter>
        )
    }
}
  

export default Routes

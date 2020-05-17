import React from 'react';

import FormInput from '../../components/input';
import Button from '../../components/button';

import { auth, signInWithGoogle } from '../../firebase';

class Signin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async evt => {
        evt.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' })
        } catch (error) {
            console.log(error);
            
        }

    }

    handleChange = evt => {
        const { value, name } = evt.target;

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="sign-in">
                <h2 className='sign-in-title'>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={this.state.email}
                        label='email'
                        handleChange={this.handleChange} 
                        required
                    />
                    <FormInput 
                        name='password' 
                        type='password' 
                        value={this.state.password}
                        label='password'
                        handleChange={this.handleChange}  
                        required
                    />
                    <div className="buttons">
                        <Button type='submit'>Sign in</Button>
                        <Button onClick={signInWithGoogle} isGoogleSiginIn> Sign in with google</Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Signin;
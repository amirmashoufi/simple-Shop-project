import { useState } from 'react';
import { redirect, Link } from 'react-router-dom'; // Import useHistory hook
import classes from './Login.module.css';
import Header from './Headers/Header';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
         event.preventDefault();

        // Validate username and password
        if (username.trim() !== '' && password.trim() !== '') {
            console.log('Form submitted');
            window.location.href = '/home';

    //      await fetch('https://fir-foodp-default-rtdb.firebaseio.com/account.json', {
    //         method: 'POST',
    //           body: JSON.stringify({
    //             users: event.target.element.username.value
    //           }),
    //     }).then(response => {
    //         if (!response.ok) {
    //             throw new Error('error in sending information!')
    //         }
    //         console.log('information sended!')
    //     })
    //     } else {
    //         setError('Please enter username and password');
        }

     };

    return (
        <>
        <Header />
            <div className={classes.div}>
                <form >
                    <label className={classes.label1}><b>Username </b></label>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                        placeholder='Your username..' 
                    />
                    <label className={classes.label2}><b>Password </b></label>
                    <input  
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required  
                        placeholder='Your password..' 
                    />
                    <button onClick={handleSubmit}  type='submit' className={classes.btn}><b>Login</b></button>
                    {error && <p>{'Please enter username and password'}</p>}
                </form>
            </div>
            
        </>
    );
}

export default Login;




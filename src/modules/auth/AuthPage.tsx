import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthService } from '../../services/auth.service';

import useQueryParam from '../../hooks/useQuery';

import DEADLINE from '../../components/DEADLINE';
import Button from '../../components/Button';
import InputField from '../../components/InputField';
import SignInWithButton from './components/SignInWithButton';

export default function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const isSignup = useQueryParam('method') === 'signup' || false;
  const navigate = useNavigate();

  async function handleSignin() {
    await AuthService.signinWithEmailAndPassword(email, password);
    navigate('/dashboard');
  }

  async function handleSignup() {
    await AuthService.signupWithEmailAndPassword(email, password, username);
    navigate('/dashboard');
  }

  async function handleGoogleSignin() {
    await AuthService.signinWithGoogle();
    navigate('/dashboard');
  }

  async function handleGithubSignin() {
    await AuthService.signinWithGithub();
    navigate('/dashboard');
  }

  return (
    <>
      <div className='flex flex-col items-center justify-center w-full h-screen'>
        <DEADLINE className='text-white mb-16' />
        <h1 className='text-green-dark text-4xl'>{isSignup ? 'Sign Up' : 'Sign In'}</h1>
        <div
          className='
          bg-white
          shadow-2xl
          flex flex-col items-center justify-center
          w-full max-w-md p-8
          bg- rounded-md
          gap-4
          my-8
        '>
          {isSignup && (
            <InputField
              color='green'
              label='Username'
              id='username'
              name='username'
              type='text'
              placeholder='Username'
              required
              value={username}
              onChange={setUsername}
            />
          )}
          <InputField
            color='green'
            label='Email address'
            id='email'
            name='email'
            type='email'
            placeholder='Email address'
            required
            value={email}
            onChange={setEmail}
          />
          <InputField
            color='green'
            label='Password'
            id='password'
            name='password'
            type='password'
            placeholder='password'
            required
            value={password}
            onChange={setPassword}
          />
          {isSignup ? (
            <Button
              color='green'
              text='Sign Up'
              onClick={handleSignup}
            />
          ) : (
            <Button
              color='green'
              text='Sign In'
              onClick={handleSignin}
            />
          )}
        </div>

        <div className='flex gap-4'>
          {isSignup ? (
            <>
              <h1>Already Have An Account?</h1>
              <h1
                onClick={() => navigate('/auth')}
                className='text-green-dark cursor-pointer'>
                Sign In Here
              </h1>
            </>
          ) : (
            <>
              <h1>Don't Have An Account?</h1>
              <h1
                onClick={() => navigate('/auth?method=signup')}
                className='text-green-dark cursor-pointer'>
                Sign Up Here
              </h1>
            </>
          )}
        </div>

        <h1 className='text-green-dark my-8'>OR</h1>

        <div className='flex gap-4'>
          <SignInWithButton
            provider='Google'
            onClick={handleGoogleSignin}
            src='https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg'
          />
          <SignInWithButton
            provider='Github'
            onClick={handleGithubSignin}
            src='https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg'
          />
        </div>
      </div>
    </>
  );
}

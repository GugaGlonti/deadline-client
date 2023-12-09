import { useState } from 'react';
import Button from '../../components/Button';
import InputField from '../../components/InputField';
import { AuthService } from '../../services/auth.service';
import { useNavigate, useSearchParams } from 'react-router-dom';
import DEADLINE from '../../components/DEADLINE';

export default function AuthPage() {
  const params = useSearchParams();
  console.log('params', params);

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignin() {
    AuthService.loginWithEmailAndPassword(email, password);
    navigate('/dashboard');
  }

  async function handleGoogleSignin() {
    await AuthService.signinWithGoogle();
    navigate('/dashboard');
  }

  async function handleGithubSignin() {
    AuthService.signinWithGithub();
    navigate('/dashboard');
  }

  return (
    <>
      <div className='flex flex-col gap-16 items-center justify-center w-full h-screen'>
        <DEADLINE className='text-white mb-16' />
        <h1
          className='
          text-green-dark
          text-4xl'>
          Sign In
        </h1>
        <div
          className='
          bg-white
          shadow-2xl
          flex flex-col items-center justify-center
          w-full max-w-md p-8
          bg- rounded-md
          gap-4
        '>
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
          <Button
            color='green'
            text='Login'
            onClick={handleSignin}
          />
        </div>
        <div className='flex gap-4'>
          <Button
            color='green'
            text='Login with Google'
            onClick={handleGoogleSignin}
          />
          <Button
            color='green'
            text='Login with Github'
            onClick={handleGithubSignin}
          />
        </div>
      </div>
    </>
  );
}

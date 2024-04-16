'use client';
import { AuthContext } from '@/context/AuthProvaider/AuthProvaider';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import React, { useContext, useState } from 'react';

const LoginPage = () => {
  const { googleLogin, loginWithEmail } = useContext(AuthContext);
  const router = useRouter();
  const [uploading, setUploading] = useState(false);
  // handler google login
  const handleGoogleLogin = async () => {
    console.log('google login ');
    const data = await googleLogin();
    console.log(data);
    router.push('/');
  };

  const handlerFormSubmit = async e => {
    e.preventDefault();
    setUploading(true);
    try {
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      await loginWithEmail(email, password);
      router.push('/');
      setUploading(false);
    } catch (error) {
      console.log(error.message);
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form
          onSubmit={handlerFormSubmit}
          className="mt-8 space-y-6"
          action="#"
          method="POST"
        >
          {/* Login form fields */}
          <div>
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
          {/* End of login form fields */}

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>
          {/* Navigation to sign up page */}
          <div className="text-sm text-center mt-4">
            <p className="text-gray-600">Don't have an account?</p>
            <Link
              className="font-medium text-indigo-600 hover:text-indigo-500"
              href="/register"
            >
              Sign up here
            </Link>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {uploading ? (
                <span className="loading loading-spinner text-info"></span>
              ) : (
                ' Sign In'
              )}
            </button>
          </div>

          {/* End of navigation to sign up page */}
        </form>
        <div>
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

'use client';
import { AuthContext } from '@/context/AuthProvaider/AuthProvaider';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react';

const RegistarPage = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState(null);
  const { createUser, profileUpdate } = useContext(AuthContext);

  // handler set the image to state
  const handleFileChange = e => {
    setImage(e.target.files[0]);
  };

  // handler form submit
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      if (!image) {
        setError('Please select an image');
        return;
      }
      setUploading(true);
      const formData = new FormData();
      formData.append('image', image);
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMAGE_KEY}`,
        {
          method: 'POST',
          body: formData,
        }
      );
      const data = await response.json();
      const uploadedImageUrl = data.data.url;
      if (data.success) {
        setImageUrl(uploadedImageUrl);
        const result = await createUser(email, password);
        await profileUpdate(result?.user, name, imageUrl);
        router.push('/login');
      }
      console.log(data);
      setUploading(false);
    } catch (error) {
      setError('Failed to upload image');
      console.error('Error uploading image:', error);
      setUploading(false);
    }
    // Handle form submission here
    // You can access the form fields' values: name, email, password, imageUrl
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="label-text">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={name}
                onChange={e => setName(e.target.value)}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Name"
              />
            </div>
            <div>
              <label htmlFor="image" className="label-text">
                Image
              </label>
              <input
                id="image"
                name="image"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="label-text">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="label-text">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>
          {/* Navigation to sign up page */}
          <div className="text-sm text-center mt-4">
            <p className="text-gray-600">Don't have an account?</p>
            <Link
              className="font-medium text-indigo-600 hover:text-indigo-500"
              href="/login"
            >
              Sign In here
            </Link>
          </div>
          <div>
            <button
              disabled={uploading}
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {uploading ? (
                <span className="loading loading-spinner text-info"></span>
              ) : (
                ' Sign up'
              )}
            </button>
          </div>
          <div>
            <button
              onClick={() =>
                signIn('google', {
                  callbackUrl: 'http://yourwebsite.com/dashboard',
                })
              }
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign up with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistarPage;

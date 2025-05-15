import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useMountains } from '../components/MountainContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function UserProfile() {
    const [isLoading, setIsLoading] = useState(true);
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);
    const { isAuthenticated, setIsAuthenticated } = useMountains();
    const navigate = useNavigate();
    const currentUserEmail = localStorage.getItem('currentUser');
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const currentUser = users.find(user => user.email === currentUserEmail);
    useEffect(() => {
        if (!currentUserEmail) {
            setIsAuthenticated(false);
            setMessage('You need to log in to view this page');
            setIsError(true);
            navigate('/login');
        } else {
            setIsAuthenticated(true);
        }
    }, [currentUserEmail, setIsAuthenticated, navigate]);
    useEffect(() => {
        if (currentUser) {
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [currentUser]);
    const handleLogout = () => {
        localStorage.removeItem('currentUser');
        setIsAuthenticated(false);
        navigate('/login');
    };
    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-blue-100 to-purple-100">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }
    if (!currentUser) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-white">
                <div className="bg-white p-8 rounded-xl shadow-xl max-w-md w-full text-center">
                    <h2 className="text-2xl font-bold text-red-600 mb-4">User not found</h2>
                    <Link to="/login" className="text-blue-600 hover:text-blue-800 font-medium">
                        Go to Login Page
                    </Link>
                </div>
            </div>
        );
    }
    
    return (
        <div>
            <Header />
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-blue-100 to-purple-100 px-4 py-12">
                <div className="w-full max-w-md">
                    <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-gray-200 px-8 py-10">
                        <div className="text-center mb-6">
                            <div className="mx-auto h-24 w-24 rounded-full bg-gray-100 overflow-hidden border border-gray-300 shadow-md transform transition duration-300 hover:scale-105">
                                {currentUser.avatar ? (
                                    <img
                                        src={currentUser.avatar}
                                        alt="Profile"
                                        className="h-full w-full object-cover"
                                    />
                                ) : (
                                    <div className="h-full w-full flex items-center justify-center text-gray-400 text-2xl font-semibold">
                                        {currentUser.name.charAt(0).toUpperCase()}
                                    </div>
                                )}
                            </div>
                            <h3 className="mt-4 text-xl font-semibold text-gray-800">
                                {currentUser.name}
                            </h3>
                        </div>
                        {isError && (
                            <div className="mb-4 p-3 bg-red-100 text-red-700 border border-red-200 rounded-md">
                                {message}
                            </div>
                        )}
                        <div className="space-y-5">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={currentUser.name}
                                    readOnly
                                    className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm sm:text-sm"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={currentUser.email}
                                    readOnly
                                    className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm sm:text-sm"
                                />
                            </div>
                            <div className="pt-4">
                                <button
                                    onClick={handleLogout}
                                    className="w-full py-2 px-4 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-400 shadow-md"
                                >
                                    Sign Out
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

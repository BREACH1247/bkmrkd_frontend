import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'

const Account = () => {
	const navigate = useNavigate()
	const [showSignUp, setShowSignUp] = useState(false)
	const [showSignIn, setShowSignIn] = useState(true)
	const cardStyle = {
		borderRadius: '24px',
		background: 'linear-gradient(145deg, #d4cdb5, #fdf4d7)',
		boxShadow: '11px 11px 29px #c2bba5,-11px -11px 29px #ffffed',
	}

	const handleSignUp = async (e) => {
		e.preventDefault()
		try {
			const response = await axios.post(
				'http://43.205.231.10:5000/api/users/signup',
				{
					name: e.target.elements.name.value,
					email: e.target.elements.email.value,
					password: e.target.elements.password.value,
				}
			)
			console.log('Sign up successful:', response.data)
			Cookies.set('jwt', response.data.data.token)

			if (response.data.status === 'success') {
				navigate('/')
			}
		} catch (error) {
			console.error('Sign up failed:', error)
			alert(error.response.data.message)
		}
	}

	const handleSignIn = async (e) => {
		e.preventDefault()
		try {
			const response = await axios.post(
				'http://43.205.231.10:5000/api/users/login',
				{
					email: e.target.elements.email.value,
					password: e.target.elements.password.value,
				}
			)
			console.log('Sign in successful:', response.data)

			Cookies.set('jwt', response.data.data.token)

			const decoded = jwtDecode(response.data.data.token)

			console.log(decoded.user.name)

			localStorage.setItem('name', decoded.user.name)

			if (response.data.status === 'success') {
				window.location.href = '/'
			}
		} catch (error) {
			console.error('Sign in failed:', error)
			alert(error.response.data.message)
		}
	}

	return (
		<div className="container max-w-7xl mx-auto">
			<div className="flex items-center justify-center min-h-screen">
				<div className="p-8 w-96 " style={cardStyle}>
					{showSignUp && (
						<div>
							<h1 className="text-center mb-4">Sign Up</h1>
							<form onSubmit={handleSignUp}>
								<input
									className="block w-full mb-4 p-2 border rounded-lg"
									type="text"
									placeholder="Name"
									name="name"
								/>
								<input
									className="block w-full mb-4 p-2 border rounded-lg"
									type="email"
									placeholder="Email"
									name="email"
								/>
								<input
									className="block w-full mb-4 p-2 border rounded-lg"
									type="password"
									placeholder="Password"
									name="password"
								/>
								<button
									className="block w-full mb-4 p-2 bg-yellow-400 hover:bg-yellow-500 text-black rounded-full"
									type="submit"
								>
									Sign Up
								</button>
							</form>
							<button
								className="block w-full p-2 hover:bg-gray-300 text-blue-500 rounded-full"
								onClick={() => {
									setShowSignUp(false)
									setShowSignIn(true)
								}}
							>
								Sign In Instead
							</button>
						</div>
					)}
					{showSignIn && (
						<div>
							<h1 className="text-center mb-4">Sign In</h1>
							<form onSubmit={handleSignIn}>
								<input
									className="block w-full mb-4 p-2 border rounded-lg"
									type="email"
									placeholder="Email"
									name="email"
								/>
								<input
									className="block w-full mb-4 p-2 border rounded-lg"
									type="password"
									placeholder="Password"
									name="password"
								/>
								<button
									className="block w-full mb-4 p-2 bg-yellow-400 hover:bg-yellow-500 text-black rounded-full"
									type="submit"
								>
									Sign In
								</button>
							</form>
							<button
								className="block w-full p-2  hover:bg-gray-300 text-blue-500 rounded-full"
								onClick={() => {
									setShowSignIn(false)
									setShowSignUp(true)
								}}
							>
								Sign Up
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default Account

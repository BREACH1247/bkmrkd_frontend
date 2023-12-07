import React from 'react'
import { useCookies } from 'react-cookie';
import axios from 'axios';

const Dropdown = ({ setIsSignedIn}) => {
	
	const [cookies, removeCookie] = useCookies(['token']);
	const isSignedIn = !!cookies.token;
	const name = isSignedIn ? 'User' : '';
	const handleSignOut = async () => {
		try {
		  const response = await axios.post('http://43.205.231.10:5000/api/users/logout');
		  console.log('Sign out successful:', response.data);
	  
		  removeCookie('token', { path: '/' }); // remove the token cookie
		  setIsSignedIn(false); // set isSignedIn to false
	  
		  window.location.reload(); // refresh the page
		} catch (error) {
		  console.error('Sign out failed:', error);
		}
	  };
	  return(
	<div
		className="origin-top-left absolute right-0 mt-2 w-56 mr-3 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 border border-black z-50 inline-block text-left "
		style={{ backgroundColor: '#ece4c9' }}
	>
		<div
			className="py-1 border-0"
			role="menu"
			aria-orientation="vertical"
			aria-labelledby="options-menu"
		>
			{isSignedIn && (
				<div className="block px-4 py-2 text-sm font-semibold text-gray-700 border-b border-black">
					Hi, {name}
				</div>
			)}
			<a
				href="#"
				className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
				role="menuitem"
			>
				Help
			</a>
			<a
				href="#"
				className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
				role="menuitem"
			>
				Send Feedback
			</a>
			{!isSignedIn && (
				<a
					href="/account"
					onClick={() => {
						setIsSignedIn(true)
					}}
					className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
					role="menuitem"
				>
					Sign in
				</a>
			)}
			{isSignedIn && (
				<>
					<a
						href="#"
						className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
						role="menuitem"
					>
						Profile
					</a>
					<a
						href="account/"
						className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
						role="menuitem"
					>
						Account Settings
					</a>
					<a
						href="#"
						onClick= {handleSignOut}
						className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
						role="menuitem"
					>
						Sign out
					</a>
				</>
			)}
		</div>
	</div>
)
};

export default Dropdown

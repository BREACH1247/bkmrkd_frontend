import React from 'react'

const Dropdown = ({ isSignedIn, setIsSignedIn, name }) => (
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
				className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
				role="menuitem"
			>
				Help
			</a>
			<a
				href="#"
				className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
				role="menuitem"
			>
				Send Feedback
			</a>
			{!isSignedIn && (
				<a
					href="#"
					onClick={() => {
						setIsSignedIn(true)
					}}
					className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
					role="menuitem"
				>
					Sign in
				</a>
			)}
			{isSignedIn && (
				<>
					<a
						href="#"
						className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
						role="menuitem"
					>
						Profile
					</a>
					<a
						href="#"
						className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
						role="menuitem"
					>
						Account Settings
					</a>
					<a
						href="#"
						onClick={() => setIsSignedIn(false)}
						className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
						role="menuitem"
					>
						Sign out
					</a>
				</>
			)}
		</div>
	</div>
)

export default Dropdown

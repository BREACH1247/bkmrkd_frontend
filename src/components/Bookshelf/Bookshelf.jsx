
import React from 'react'
import { Link } from 'react-router-dom';
import lock from '../../assets/lock.png'

const Bookshelf = () => {

	const stacks = [
		[
			{
				imageUrl:
					'https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg',
			},
			{ imageUrl: 'https://i.huffpost.com/gen/1039678/original.jpg' },
			{
				imageUrl:
					'https://cdn.rickriordan.com/wp-content/uploads/2023/02/11223837/PERCY-CHALICE-FINALcover2.21-final.jpg',
			},
			{
				imageUrl:
					'https://marketplace.canva.com/EAD7YHrjZYY/1/0/1003w/canva-blue-illustrated-stars-children%27s-book-cover-haFtaSNXXF4.jpg',
			},
			{
				imageUrl:
					'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781668016138/holly-9781668016138_hr.jpg',
			},
		],
		[
			{
				imageUrl:
					'https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg',
			},
			{ imageUrl: 'https://i.huffpost.com/gen/1039678/original.jpg' },
			{
				imageUrl:
					'https://cdn.rickriordan.com/wp-content/uploads/2023/02/11223837/PERCY-CHALICE-FINALcover2.21-final.jpg',
			},
			{
				imageUrl:
					'https://marketplace.canva.com/EAD7YHrjZYY/1/0/1003w/canva-blue-illustrated-stars-children%27s-book-cover-haFtaSNXXF4.jpg',
			},
			{
				imageUrl:
					'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781668016138/holly-9781668016138_hr.jpg',
			},
		],
		[
			{
				imageUrl:
					'https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg',
			},
			{ imageUrl: 'https://i.huffpost.com/gen/1039678/original.jpg' },
			{
				imageUrl:
					'https://cdn.rickriordan.com/wp-content/uploads/2023/02/11223837/PERCY-CHALICE-FINALcover2.21-final.jpg',
			},
			{
				imageUrl:
					'https://marketplace.canva.com/EAD7YHrjZYY/1/0/1003w/canva-blue-illustrated-stars-children%27s-book-cover-haFtaSNXXF4.jpg',
			},
			{
				imageUrl:
					'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781668016138/holly-9781668016138_hr.jpg',
			},
		],
		[
			{
				imageUrl:
					'https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg',
			},
			{ imageUrl: 'https://i.huffpost.com/gen/1039678/original.jpg' },
			{
				imageUrl:
					'https://cdn.rickriordan.com/wp-content/uploads/2023/02/11223837/PERCY-CHALICE-FINALcover2.21-final.jpg',
			},
			{
				imageUrl:
					'https://marketplace.canva.com/EAD7YHrjZYY/1/0/1003w/canva-blue-illustrated-stars-children%27s-book-cover-haFtaSNXXF4.jpg',
			},
			{
				imageUrl:
					'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781668016138/holly-9781668016138_hr.jpg',
			},
		],
		[
			{
				imageUrl:
					'https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg',
			},
			{ imageUrl: 'https://i.huffpost.com/gen/1039678/original.jpg' },
			{
				imageUrl:
					'https://cdn.rickriordan.com/wp-content/uploads/2023/02/11223837/PERCY-CHALICE-FINALcover2.21-final.jpg',
			},
			{
				imageUrl:
					'https://marketplace.canva.com/EAD7YHrjZYY/1/0/1003w/canva-blue-illustrated-stars-children%27s-book-cover-haFtaSNXXF4.jpg',
			},
			{
				imageUrl:
					'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781668016138/holly-9781668016138_hr.jpg',
			},
		],
		[
			{
				imageUrl:
					'https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg',
			},
			{ imageUrl: 'https://i.huffpost.com/gen/1039678/original.jpg' },
			{
				imageUrl:
					'https://cdn.rickriordan.com/wp-content/uploads/2023/02/11223837/PERCY-CHALICE-FINALcover2.21-final.jpg',
			},
			{
				imageUrl:
					'https://marketplace.canva.com/EAD7YHrjZYY/1/0/1003w/canva-blue-illustrated-stars-children%27s-book-cover-haFtaSNXXF4.jpg',
			},
			{
				imageUrl:
					'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781668016138/holly-9781668016138_hr.jpg',
			},
		],
		
	]
	const lockedContainers = [1, 4];
	const stacksData = stacks.map((cards, index) => ({
	bookshelf: `Bookshelf ${index + 1}`,
	bookCount: 10,
	books: cards,
	isLocked: lockedContainers.includes(index),
	}));

	const StackText = ({ bookshelf, bookCount, isLocked }) => (
	<div
	className="stack-text"
	style={{
		position: 'absolute',
		top: '165px',
		textAlign: 'left',
		zIndex: 1,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '100%', 
		paddingRight: '10px'
	}}
	>
		<div>
		<h2 className="text-black" style={{ fontSize: '16px' , fontFamily: "'Roboto Mono', monospace", fontWeight: 700 }}>
			{bookshelf}
		</h2>
		<p className=" text-gray-600" style={{ fontSize: '14px' , fontWeight: 600 }}>
		{bookCount} books
		</p>
		</div>
		{isLocked && <img src={lock} alt="Locked" style={{ width: '15px', height: '15px'}} />} 
	</div>
	);

	return (
		
	<div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-10 gap-y-6 pb-2">
		{stacksData.map((stack, stackIndex) => (
			<Link
			to={`/bookshelf/${stackIndex + 1}`} 
			key={stackIndex}
			className="card-link"
			style={{ textDecoration: 'none' }}
		>
		<a href="/bookshelf" key={stackIndex} className="card-link" style={{ textDecoration: 'none' }}>
			<div
			className="relative"
			style={{
				width: '100%',
				height: '204px',
				position: 'relative',
				cursor: 'pointer',
				display: 'flex',
				marginRight: '100px',
			}}
			>
			<div style={{ position: 'relative' }}>
				{stack.books.map((card, cardIndex) => (
				<div
					className="max-w-xs"
					key={cardIndex}
					style={{
					position: 'absolute',
					top: '0',
					width: '120px',
					height: '160px',
					left: `${cardIndex * 70}px`,
					zIndex: 100 - cardIndex,
					}}
				>
					<div className="">
					<img
						src={card.imageUrl}
						alt="Card"
						className="w-full h-full object-cover rounded-lg"
						style={{ width: '120px', height: '160px' }}
					/>
					</div>
				</div>
				))}
			</div>
			<StackText bookshelf={stack.bookshelf} bookCount={stack.bookCount} isLocked={stack.isLocked} />
			</div>
	</a>
	</Link>
		))}

</div>
	);
};

export default Bookshelf;
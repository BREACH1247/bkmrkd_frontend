import React, { useState } from 'react'

const BookshelfCards = () => {

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
		// Add more stacks as needed
	]
	const StackText = ({ title, books }) => (
		<div
			style={{
				position: 'absolute',
				top: '175px',
				left: '15px',
				textAlign: 'left',
				
			}}
		>
			<h2 className="text-sm font-medium" style={{ fontSize: '16px' }}>
				{title}
			</h2>
			<p className="text-xs text-gray-500" style={{ fontSize: '14px' }}>
				{books} books
			</p>
		</div>
	)
	return (
		<div className="max-w-full flex flex-wrap items-start justify-between px-5.7 mt-8 mb-6">
			{stacks.map((cards, stackIndex) => (
				<div
					key={stackIndex}
					className="relative mr-2 mb-4" 
					style={{
						width: '30%',
						height: '200px',
					}}
						>

						<StackText title="Comfort Reads" books={15} />
				
					<div style={{ position: 'relative' }}>
						{cards.map((card, cardIndex) => (
							<a href="#" key={cardIndex} style={{ textDecoration: 'none' }}>
								<div
									className="max-w-xs"
									style={{
										position: 'absolute',
										top: '0',
										width: '140px',
										height: '150px',
										left: `${cardIndex * 70}px`,
										zIndex: 100 - cardIndex,
									}}
								>
									<div className="p-4">
										<img
											src={card.imageUrl}
											alt="Card"
											className="w-full h-full object-cover rounded-lg" // Adjusted border radius
											style={{ width: '140px', height: '150px' }}
										/>
									</div>
								</div>
							</a>
						))}
						{stackIndex === 0 && (
							<div
								style={{
									position: 'absolute',
									top: '175px',
									left: '15px',
									textAlign: 'left',
									zIndex: 999,
								}}
							>
								<h2
									className="text-sm font-medium"
									style={{ fontSize: '16px' }}
								>
									Comfort Reads
								</h2>
								<p
									className="text-xs text-gray-500"
									style={{ fontSize: '14px' }}
								>
									15 books
								</p>
							</div>
						)}
						{stackIndex === 1 && (
							<div
								style={{
									position: 'absolute',
									top: '175px',
									left: '15px',
									textAlign: 'left',
									zIndex: 999,
								}}
							>
								<h2
									className="text-sm font-medium"
									style={{ fontSize: '16px' }}
								>
									Comfort Reads
								</h2>
								<p
									className="text-xs text-gray-500"
									style={{ fontSize: '14px' }}
								>
									15 books
								</p>
							</div>
						)}
					</div>
				</div>
			))}
		</div>
	)
}

export default BookshelfCards

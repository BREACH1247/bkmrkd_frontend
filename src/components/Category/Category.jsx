import React from 'react';
import pages from '../../assets/pages.png';
import cluster2 from '../../assets/cluster2.png';
import notes from '../../assets/notes.png';
import lock from '../../assets/lock.png';

const Category = () => {
    const categories = [
        { name: 'Fantasy', bookCount: 25 },
        { name: 'Science Fiction', bookCount: 32 },
        { name: 'Romance', bookCount: 18 },
        { name: 'Mystery', bookCount: 27 },
        { name: 'Thriller', bookCount: 21 },
    ];

    const tags = ['Romance', 'Horror', 'Fiction', 'Mystery', 'Adventure', 'Sci-Fi', 'Fantasy', 'Thriller'];
    const colors = ['bg-yellow-400', 'bg-red-400', 'bg-green-400', 'bg-blue-400'];

    const StackText = ({ category, bookCount }) => (
        <div className="flex justify-center mt-4 mb-4">
            <h1>{category}</h1>
            <h2>{bookCount} books</h2>
            <img src={lock} alt="Locked" className="w-4 h-4 ml-2" />
        </div>
    );

    const slicedTags = tags.slice(0, 5);
    const remainingTags = tags.length > 5 ? tags.slice(5) : [];

    function getRandomColor() {
        return colors[Math.floor(Math.random() * colors.length)];
    }

    return (
        <div className="mt-8">
            {categories.map((category, index) => (
                <div key={index}>
                    <StackText category={category.name} bookCount={category.bookCount} />
                    <div className="flex justify-center flex-wrap mb-4">
                        <img
                            src={pages}
                            alt="pages"
                            className="hover:scale-105 hover:cursor-pointer transition-transform transform"
                        />
                        <img
                            src={cluster2}
                            alt="cluster"
                            className="hover:scale-105 mx-4 hover:cursor-pointer transition-transform transform"
                        />
                        <img
                            src={notes}
                            alt="notes"
                            className="hover:scale-105 hover:cursor-pointer transition-transform transform"
                        />
                    </div>
                    <div className="flex justify-center flex-wrap mt-4">
                        {slicedTags.map((tag, index) => (
                            <div
                                key={index}
                                className={`rounded-full p-2 m-2 border-1 border-black ${getRandomColor()}`}
                            >
                                {tag}
                            </div>
                        ))}

                        {tags && tags.length > 5 && (
                            <div
                                className={`tag-box rounded-full p-2 m-2  border-1 border-black ${getRandomColor()}`}
                                title={tags.slice(5).join(', ')}
                            >
                                +{tags.length - 5}
                            </div>
                        )}

                        {remainingTags.map((tag, index) => (
                            <div key={index} className="hidden">
                                {tag}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Category;

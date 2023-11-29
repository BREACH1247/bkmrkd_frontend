// CardGrid.jsx

import React from "react";
import Card from "./Card";

const CardGrid = () => {
  // Sample data for five cards
  const cardsData = [
    { imageUrl: "https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg", rating: "4.5" },
    { imageUrl: "https://i.huffpost.com/gen/1039678/original.jpg", rating: "4.2" },
    { imageUrl: "https://cdn.rickriordan.com/wp-content/uploads/2023/02/11223837/PERCY-CHALICE-FINALcover2.21-final.jpg", rating: "3.8" },
    { imageUrl: "https://marketplace.canva.com/EAD7YHrjZYY/1/0/1003w/canva-blue-illustrated-stars-children%27s-book-cover-haFtaSNXXF4.jpg", rating: "4.1" },
    { imageUrl: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781668016138/holly-9781668016138_hr.jpg", rating: "4.7" },
    { imageUrl: "https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_568,c_scale/jackets/9781526635259.jpg", rating: "4.7" },
    { imageUrl: "https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_568,c_scale/jackets/9781526635259.jpg", rating: "4.7" },
    { imageUrl: "https://marketplace.canva.com/EAD7YHrjZYY/1/0/1003w/canva-blue-illustrated-stars-children%27s-book-cover-haFtaSNXXF4.jpg", rating: "4.1" },
    { imageUrl: "https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg", rating: "4.5" },
    { imageUrl: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781668016138/holly-9781668016138_hr.jpg", rating: "4.7" },
    { imageUrl: "https://i.huffpost.com/gen/1039678/original.jpg", rating: "4.2" },
    { imageUrl: "https://cdn.rickriordan.com/wp-content/uploads/2023/02/11223837/PERCY-CHALICE-FINALcover2.21-final.jpg", rating: "3.8" },
];

  return (
    <div className="flex flex-wrap justify-center md:px-32">
      {cardsData.map((card, index) => (
        <Card key={index} imageUrl={card.imageUrl} rating={card.rating} />
      ))}
    </div>
  );
};

export default CardGrid;

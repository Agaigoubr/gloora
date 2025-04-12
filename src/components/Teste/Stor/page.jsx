import React from 'react';

const ProductCard = ({ discount, image, category, title, price, oldPrice, hasIcons }) => {
  return (
    <div className="relative w-[280px] h-[333px] bg-[#F7F7F7] rounded-[29px] overflow-hidden shadow-sm">
      {/* Discount badge */}
      <div className="absolute top-2 left-2 w-[80px] h-[40px] bg-black rounded-full flex items-center justify-center">
        <span className="text-white text-sm font-semibold">{discount}</span>
      </div>






      {/* Product Image */}
      <div
        className="w-full h-[180px] bg-center bg-contain bg-no-repeat mt-[50px]"
        style={{ backgroundImage: `url(${image})` }}
      />



 





      {/* Optional icons */}
      {hasIcons && (
        <div className="absolute bottom-[95px] left-1/2 transform -translate-x-1/2 flex gap-3">
          <button className="w-9 h-9 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-200 transition">
        
          </button>
          <button className="w-9 h-9 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-200 transition">
          
          </button>
          <button className="w-9 h-9 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-200 transition">
           
          </button>
        </div>

      
      ) }
      
     
    
    </div>
  );
};

const ProductGrid = () => {
  const products = [
    {
      discount: '-52%',
      image: '/images/bag.png',
      category: 'Accessories',
      title: 'Gloora Bag for Makeup',
      price: '$19.00',
      oldPrice: '$30.00',
      hasIcons: true,
    },
    {
      discount: '-26%',
      image: '/images/wrinkle.png',
      category: 'Face Care',
      title: 'Wrinkle Remover',
      price: '$19.00',
      oldPrice: '$30.00',
      hasIcons: false,
    },
    {
      discount: '-30%',
      image: '/images/retinol.png',
      category: 'Face Care',
      title: 'Retinol Gloora',
      price: '$19.00',
      oldPrice: '$30.00',
      hasIcons: false,
    },
    {
      discount: '-12%',
      image: '/images/buddy.png',
      category: 'Face Care',
      title: 'Buddy Care',
      price: '$19.00',
      oldPrice: '$30.00',
      hasIcons: false,
    },
    {
      discount: '-52%',
      image: '/images/bag.png',
      category: 'Accessories',
      title: 'Gloora Bag for Makeup',
      price: '$19.00',
      oldPrice: '$30.00',
      hasIcons: true,
    },
    {
      discount: '-26%',
      image: '/images/wrinkle.png',
      category: 'Face Care',
      title: 'Wrinkle Remover',
      price: '$19.00',
      oldPrice: '$30.00',
      hasIcons: false,
    },
  ];

  return (
    <div className="flex flex-wrap gap-6 justify-center py-10">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};

export default ProductGrid;

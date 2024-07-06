import React from "react";

const CategoryCard = ({ category }) => {
  const { image, name, description } = category;

  return (
    <div className="max-w-xs overflow-hidden cursor-pointer bg-white rounded-lg shadow-lg dark:bg-gray-800">
      {/* Image container */}
      <div className="relative">
        {/* Image with hover effect */}
        <img
          className="object-cover w-full h-48 transform hover:scale-110 transition-transform duration-300"
          src={image}
          alt={name}
        />
        {/* Overlay for hover effect */}
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-40 transition-opacity duration-300"></div>
        {/* Category name */}
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold text-white uppercase text-center pointer-events-none">
          {name}
        </h1>
      </div>

      {/* Description */}
      <div className="px-4 py-2">
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default CategoryCard;


const CategoryCard = ({category}) => {
    const {image, name, description} = category;
  return (
    <div className="max-w-xs overflow-hidden cursor-pointer bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <div className="px-4 py-2">
        <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">{name}</h1>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{description}</p>
      </div>

      <img
        className="object-cover w-full h-48 mt-2 transform hover:scale-110 transition-transform duration-300"
        src={image}
        alt="NIKE AIR"
      />
    </div>
  );
};

export default CategoryCard;

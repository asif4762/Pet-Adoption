import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import Dropdown from "./DropDown";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Categories = () => {
  const [all, setAll] = useState();

  useEffect(() => {
    fetch("pets.json")
      .then((res) => res.json())
      .then((data) => setAll(data));
  }, []);

  return (
    <div className="py-10">
      <div className="flex justify-center items-center space-x-10 mb-10">
        <h1 className="text-center text-4xl font-bold text-gray-800">All Categories</h1>
        <div className="text-center">
          <Dropdown />
        </div>
      </div>

      <div className="mx-auto max-w-screen-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {all ? (
            all.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))
          ) : (
            <div className="col-span-3 flex items-center justify-center">
              <AiOutlineLoading3Quarters className="animate-spin text-4xl text-gray-500" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Categories;

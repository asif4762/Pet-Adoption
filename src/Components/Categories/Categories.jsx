import CategoryCard from "./CategoryCard";
import Dropdown from "./DropDown";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../Hooks/useAxiosCommon";

const Categories = () => {

  const axiosCommon = useAxiosCommon();
  const {data: pets, isLoading, isError} = useQuery({
    queryKey: ['pets'],
    queryFn: async () =>{
      const res = await axiosCommon.get('/pets')
      return res.data;
    }
  })

  console.log(pets);

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
          {isLoading ? (
            <div className="col-span-3 flex items-center justify-center">
              <AiOutlineLoading3Quarters className="animate-spin text-4xl text-gray-500" />
            </div>
          ) : (
            pets.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Categories;

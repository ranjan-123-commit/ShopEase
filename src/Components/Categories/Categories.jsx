 import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Men",
    image: "https://dummyjson.com/image/300x300?text=Men",
    path: "/men",
  },
  {
    name: "Women",
    image: "https://dummyjson.com/image/300x300?text=Women",
    path: "/women",
  },
  {
    name: "Electronics",
    image: "https://dummyjson.com/image/300x300?text=Electronics",
    path: "/electronics",
  },
  {
    name: "Jewelry",
    image: "https://dummyjson.com/image/300x300?text=Jewelry",
    path: "/jewelry",
  },
];

const Categories = () => {
  return (
    <section className="px-8 py-10">

      <h2 className="mb-6 text-2xl font-bold">
        Shop By Category
      </h2>

      <div className="grid grid-cols-2 gap-5 md:grid-cols-4">

        {categories.map((category) => (
          <Link
            key={category.name}
            to={category.path}
            className="group overflow-hidden rounded-lg bg-gray-100"
          >
            <img
              src={category.image}
              alt={category.name}
              className="h-52 w-full object-cover transition duration-300 group-hover:scale-105"
            />

            <h3 className="py-4 text-center text-lg font-semibold">
              {category.name}
            </h3>
          </Link>
        ))}

      </div>
    </section>
  );
};

export default Categories;
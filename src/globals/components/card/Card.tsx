import React from "react";

const Card = () => {
  return (
    <>
      <div className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1588099768531-a72d4a198538?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NnwxMTM4MTU1NXx8ZW58MHx8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
          alt="AirMax Pro"
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">Nike Airmax v2</h1>
          <p className="mt-2 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            debitis?
          </p>
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            Shop Now →
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;

import React from 'react';

const InfoBoxFull = () => {
  return (
    <div className="mx-auto flex flex-col md:flex-row items-center p-5 md:p-8 lg:p-12 bg-gray-100 mb-10">
      <div className="image-container mb-8 md:mb-0 md:order-2 w-full md:w-1/2 flex justify-left md:justify-end">
        <img
          className="image w-64 md:w-72 lg:w-96"
          src="https://us.solvias.com/wp-content/uploads/2023/11/Fiber-Optic-probes.png"
          alt="Fiber Optic Probes"
        />
      </div>
      <div className="text-container md:order-1 w-full md:w-1/2">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Ligands & Fiber-Optic Products</h2>
        <p className="text-gray-700">
          Secure your drug development process with our advanced monitoring
          technologies, high-quality process sampling equipment, and extensive
          ligand and catalyst portfolio.
        </p>
        <button className="bg-transparent border-2 border-[#BBCB34] text-[#004F3A] text-lg py-2 px-5 mt-4 transition duration-500 ease-in-out hover:bg-[#004F3A] hover:border-[#004F3A] hover:text-white">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default InfoBoxFull;

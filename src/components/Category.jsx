import React from "react";
import './Category.css'
import categoryImage from '../assets/categoryImage.png'

const Category = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h4 className="text-start">Kategori Belajar</h4>
        </div>
        <div className="col-6 text-end">
          <button className="allButton bg-transparent">
            Lihat Semua
          </button>
        </div>
      </div>
      <div className="categories d-flex flex-row justify-content-start overflow-auto gap-3">
        <div className="category text-center">
          <img src={categoryImage} />
          <p>UI/UX Design</p>
        </div>
        <div className="category text-center">
          <img src={categoryImage} />
          <p>Product Management</p>
        </div>
        <div className="category text-center">
          <img src={categoryImage} />
          <p>Web Development</p>
        </div>
        <div className="category text-center">
          <img src={categoryImage} />
          <p>Android Development</p>
        </div>
        <div className="category text-center">
          <img src={categoryImage} />
          <p>IOS Development</p>
        </div>
        <div className="category text-center">
          <img src={categoryImage} />
          <p>Data Science</p>
        </div>
      </div>
    </div>
  );
};

export default Category;

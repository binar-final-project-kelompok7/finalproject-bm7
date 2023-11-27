import React from "react";
import "./Filter.css";
const Filter = () => {
  return (
    <>
      <form action="" className="filter">
        <h1>Filter</h1>
        <div className="isiFilter">
          <div>
            <input type="checkbox" id="palingbaru" />
            <label htmlFor="palingbaru">Paling Baru</label>
          </div>
          <div>
            <input type="checkbox" id="palingpopuler" />
            <label htmlFor="palingpopuler">Paling Populer</label>
          </div>
          <div>
            <input type="checkbox" id="promo" />
            <label htmlFor="promo">Promo</label>
          </div>
        </div>
        <h1>Kategori</h1>
        <div className="isiFilter">
          <div>
            <input type="checkbox" id="UI/UXDesign" />
            <label htmlFor="UI/UXDesign">UI/UX Design</label>
          </div>
          <div>
            <input type="checkbox" id="WebDevelopment" />
            <label htmlFor="WebDevelopment">Web Development</label>
          </div>
          <div>
            <input type="checkbox" id="AndroidDevelopment" />
            <label htmlFor="AndroidDevelopment">Android Development</label>
          </div>
          <div>
            <input type="checkbox" id="DataScience" />
            <label htmlFor="DataScience">Data Science</label>
          </div>
          <div>
            <input type="checkbox" id="BusinessIntelligence" />
            <label htmlFor="BusinessIntelligence">Business Intelligence</label>
          </div>
        </div>
        <h1>Level Kesulitan</h1>
        <div className="isiFilter">
          <div>
            <input type="checkbox" id="SemuaLevel" />
            <label htmlFor="SemuaLevel">Semua Level</label>
          </div>
          <div>
            <input type="checkbox" id="BeginnerLevel" />
            <label htmlFor="BeginnerLevel">Beginner Level</label>
          </div>
          <div>
            <input type="checkbox" id="IntermediateLevel" />
            <label htmlFor="IntermediateLevel">Intermediate Level</label>
          </div>
          <div>
            <input type="checkbox" id="AdvancedLevel" />
            <label htmlFor="AdvancedLevel">Advanced Level</label>
          </div>
        </div>
        <button>Hapus Filter</button>
      </form>
    </>
  );
};

export default Filter;

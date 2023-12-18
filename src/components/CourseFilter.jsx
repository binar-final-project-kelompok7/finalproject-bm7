import React from "react";

const CourseFilter = ({ filterOptions, handleCheckboxChange, handleClearFilters }) => {
  return (
    <form className="filter" onClick={(e) => e.stopPropagation()}>
      <h1>Filter</h1>
      <div className="isiFilter">
        <div>
          <input type="checkbox" id="palingbaru" checked={filterOptions.palingbaru} onChange={() => handleCheckboxChange("palingbaru")} />
          <label htmlFor="palingbaru">Paling Baru</label>
        </div>
        <div>
          <input type="checkbox" id="palingpopuler" checked={filterOptions.palingpopuler} onChange={() => handleCheckboxChange("palingpopuler")} />
          <label htmlFor="palingpopuler">Paling Populer</label>
        </div>
        <div>
          <input type="checkbox" id="promo" checked={filterOptions.promo} onChange={() => handleCheckboxChange("promo")} />
          <label htmlFor="promo">Promo</label>
        </div>
      </div>
      <h1>Kategori</h1>
      <div className="isiFilter">
        <div>
          <input type="checkbox" id="UI/UXDesign" checked={filterOptions.UIUXDesign} onChange={() => handleCheckboxChange("UIUXDesign")} />
          <label htmlFor="UI/UXDesign">UI/UX Design</label>
        </div>
        <div>
          <input type="checkbox" id="WebDevelopment" checked={filterOptions.WebDevelopment} onChange={() => handleCheckboxChange("WebDevelopment")} />
          <label htmlFor="WebDevelopment">Web Development</label>
        </div>
        <div>
          <input type="checkbox" id="AndroidDevelopment" checked={filterOptions.AndroidDevelopment} onChange={() => handleCheckboxChange("AndroidDevelopment")} />
          <label htmlFor="AndroidDevelopment">Android Development</label>
        </div>
        <div>
          <input type="checkbox" id="DataScience" checked={filterOptions.DataScience} onChange={() => handleCheckboxChange("DataScience")} />
          <label htmlFor="DataScience">Data Science</label>
        </div>
        <div>
          <input type="checkbox" id="BusinessIntelligence" checked={filterOptions.BusinessIntelligence} onChange={() => handleCheckboxChange("BusinessIntelligence")} />
          <label htmlFor="BusinessIntelligence">Business Intelligence</label>
        </div>
      </div>
      <h1>Level Kesulitan</h1>
      <div className="isiFilter">
        <div>
          <input type="checkbox" id="BeginnerLevel" checked={filterOptions.BeginnerLevel} onChange={() => handleCheckboxChange("BeginnerLevel")} />
          <label htmlFor="BeginnerLevel">Beginner Level</label>
        </div>
        <div>
          <input type="checkbox" id="IntermediateLevel" checked={filterOptions.IntermediateLevel} onChange={() => handleCheckboxChange("IntermediateLevel")} />
          <label htmlFor="IntermediateLevel">Intermediate Level</label>
        </div>
        <div>
          <input type="checkbox" id="AdvancedLevel" checked={filterOptions.AdvancedLevel} onChange={() => handleCheckboxChange("AdvancedLevel")} />
          <label htmlFor="AdvancedLevel">Advanced Level</label>
        </div>
      </div>
      <button type="button" onClick={handleClearFilters}>
        Hapus Filter
      </button>
    </form>
  );
};

export default CourseFilter;

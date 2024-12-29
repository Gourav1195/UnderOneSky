import React from "react";

const Bar = ({ filterItem, menuList }) => {
  return (
    <>
      <nav className="bar" >
        <div className="btn-group" >
          {menuList.map((curElem) => {
            return (
              <button
                className="btn-group__item darkmode-bg" 
                
                onClick={() => filterItem(curElem)}>
                {curElem}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Bar;
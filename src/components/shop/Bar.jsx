import React from "react";

const Bar = ({ filterItem, menuList }) => {
  return (
    <>
      <nav className="pt-[50px] text-center">
        <div className="rounded-[1rem] capitalize">
          {menuList.map((curElem) => {
            return (
              <button
                className="border-none px-[3rem] py-[1.5rem] bg-transparent cursor-pointer 
                          m-0 text-[17px] shadow-[inset_0_0_0_-15px_rebeccapurple] 
                          transition-all duration-300 ease-out capitalize 
                          first:rounded-tl-[1rem] first:rounded-bl-[1rem] 
                          last:rounded-tr-[1rem] last:rounded-br-[1rem] 
                          hover:text-[rebeccapurple] hover:shadow-[inset_0_-20px_0_-15px_rebeccapurple] 
                          focus:text-[rebeccapurple] focus:shadow-[inset_0_-20px_0_-15px_rebeccapurple] 
                          focus:outline-none"
                onClick={() => filterItem(curElem)}
                key={curElem}
              >
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
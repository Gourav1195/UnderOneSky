import React from "react";


const ShopCard = ({ ShopData }) => {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {ShopData.map((curElem) => {
          const { id, name, category, image, description, price } = curElem;
          return (
            <>
              <div className="max-w-sm mx-auto" key={id}>
                <div className="shadow-lg rounded-lg overflow-hidden border" style={{ backgroundColor: 'var(--bg-color)', borderColor: 'var(--font-color)' }}>
                  <div className="p-4">
                    <span className="inline-block text-xs font-semibold rounded-full px-2 py-1 mr-2" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--font-color)' }}>{id}</span>
                    <span className="text-sm" style={{ color: 'var(--font-color)' }}>{category}</span>
                    <h2 className="mt-2 text-xl font-bold" style={{ color: 'var(--font-color)' }}>{name}</h2>
                    <span className="mt-2 block text-sm leading-relaxed" style={{ color: 'var(--font-color)' }}>
                      {description}
                    </span>
                    <div className="mt-2 hover:opacity-80 cursor-pointer" style={{ color: 'var(--font-color)' }}>Read</div>
                    <p className="mt-2 text-lg font-semibold" style={{ color: 'var(--font-color)' }}>{price}</p>
                  </div>
                  <img src={image} alt="images" className="w-full h-48 object-cover" />
                  <span className="block p-4 text-center text-sm hover:opacity-80 cursor-pointer" style={{ color: 'var(--font-color)' }}>
                    Order Now
                  </span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default ShopCard;
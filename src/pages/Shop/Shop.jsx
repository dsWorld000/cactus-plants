import React, { useContext } from "react";
import "./Shop.css";
import Care from "../Care/Care";
import { StoreContext } from "../../context/StoreContex";
import CactusItem from "../../components/cactusItem/CactusItem";

const Shop = () => {
  const { cactus_item_list } = useContext(StoreContext);

  return (
    <>
      <section className="shop section" id="shop">
        <h2 className="section__title">THE BEST PLANTS</h2>
        <div className="shop__container container grid">
          {cactus_item_list.map((cactus, index) => {
            return (
              <CactusItem
                key={index}
                image={cactus.image}
                id={cactus.id}
                title={cactus.title}
                price={cactus.price}
              />
            );
          })}
        </div>
      </section>
      <Care />
    </>
  );
};

export default Shop;

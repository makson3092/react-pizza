import React from "react";
import Categories from "../../components/Categories";
import Sort from "../../components/Sort";
import PizzaBlock from "../../components/PizzaBlock/PizzaBlock";
import Skeleton from "../../components/PizzaBlock/Skeleton";
// import Load from "./components/Header/SkeletonLoad";
// import pizzaItems from "./assets/pizza.json";

export const Home = () => {
  const [pizzaItems, setPizzaItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://645540afa74f994b33564b2b.mockapi.io/items")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setPizzaItems(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
          : pizzaItems.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </>
  );
};

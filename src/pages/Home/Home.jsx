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
  const [categoryId, setCategoryId] = React.useState(1);
  const [sortType, setSortType] = React.useState({
    name: "популярності",
    sortProperty: "rating",
  });

  React.useEffect(() => {
    setIsLoading(true);

    const category = categoryId > 1 ? `category=${categoryId}` : "";
    const sortBy = sortType.sortProperty.replace("-", "");
    const order = sortType.sortProperty.includes("-") ? "asc" : "desc";

    fetch(
      `https://645540afa74f994b33564b2b.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setPizzaItems(data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          onChangeCategories={(id) => setCategoryId(id)}
        />
        <Sort value={sortType} onChangeSort={(id) => setSortType(id)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
          : pizzaItems.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
};

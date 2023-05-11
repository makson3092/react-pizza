import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux/es/exports";

import { setCategoryId, setCurrentPage } from "../../redux/slices/filterSlice";
import Categories from "../../components/Categories";
import Sort from "../../components/Sort";
import PizzaBlock from "../../components/PizzaBlock/PizzaBlock";
import Skeleton from "../../components/PizzaBlock/Skeleton";
import Pagination from "../../components/Pagination";
import { AppContext } from "../../App";

export const Home = () => {
  const dispatch = useDispatch();
  const { categoryId, sort, currentPage } = useSelector(
    (state) => state.filterReducer
  );

  const { searchValue } = React.useContext(AppContext);
  const [pizzaItems, setPizzaItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  // const [currentPage, setCurrentPage] = React.useState(1);

  const onChangeCategory = (id) => {
    console.log(`Chandge_Category_Update "${id}"`);
    dispatch(setCategoryId(id));
  };

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  React.useEffect(() => {
    setIsLoading(true);

    const category = categoryId > 1 ? `category=${categoryId}` : "";
    const sortBy = sort.sortProperty.replace("-", "");
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const search = searchValue ? `&search=${searchValue}` : "";

    // fetch(
    //   `https://645540afa74f994b33564b2b.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    // )
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     setPizzaItems(data);
    //     setIsLoading(false);
    //   });

    axios
      .get(
        // `https://645540afa74f994b33564b2b.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
        `https://645540afa74f994b33564b2b.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
      )
      .then((res) => {
        console.log(res);
        setPizzaItems(res.data);
        setIsLoading(false);
      });

    window.scrollTo(0, 0);
    // }, [categoryId, sort.sortProperty, searchValue, currentPage]);
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  const pizzas = pizzaItems.map((obj) => <PizzaBlock key={obj.id} {...obj} />);
  const sleleton = [...new Array(8)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategories={onChangeCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? sleleton : pizzas}</div>
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};

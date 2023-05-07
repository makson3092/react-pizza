import React from "react";

function Categories() {
  const [actCategories, setActCategories] = React.useState(1);

  const onClickCategories = (index) => {
    setActCategories(index);
  };

  const categories = [
    { id: 1, title: "Все" },
    { id: 2, title: "Мясні" },
    { id: 3, title: "Вегетеріанська" },
    { id: 4, title: "Гриль" },
    { id: 5, title: "Гострі" },
    { id: 6, title: "Закриті" },
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((menu) => (
          <li
            key={menu.id}
            onClick={() => onClickCategories(menu.id)}
            className={actCategories === menu.id ? "active" : ""}
          >
            {menu.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Categories;

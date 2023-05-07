import React from "react";

function Categories({ value, onChangeCategories }) {
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
        {categories.map((categoryName) => (
          <li
            key={categoryName.id}
            onClick={() => onChangeCategories(categoryName.id)}
            className={value === categoryName.id ? "active" : ""}
          >
            {categoryName.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Categories;

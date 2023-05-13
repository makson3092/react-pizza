import React from "react";
import { Link } from "react-router-dom";

import emptyImg from "../../assets/img/empty-cart.png";

export const CartEmpty = () => {
  return (
    <>
      <div class="cart cart--empty">
        <h2>
          Корзина пуста <icon>😕</icon>
        </h2>
        <p>
          Ймовірніше за все, ви не замовляли ще піцу.
          <br />
          Щоб замовити піцу, перейди на головну сторінку.
        </p>
        <img src={emptyImg} alt="Empty cart" />
        <Link to="/" class="button button--black">
          <span>Повернутися назад</span>
        </Link>
      </div>
    </>
  );
};

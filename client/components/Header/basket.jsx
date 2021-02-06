import React from "react";

const handlerClick = (e) => {
  e.target.closest(".wrapper").classList.remove("show");
};

export const Basket = React.memo(() => {
  // let wishlist = [];
  // let goodsBasket = {};

  // Рендер товаров в корзине

  // const getCookie = name => {
  //     let matches = document.cookie.match(new RegExp(
  //         "(?:^|; )" + name.replace(/([\.$?*|\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  //     ));
  //     return matches ? decodeURIComponent(matches[1]) : undefined;
  // };

  // const cookieQuery = get => {
  //     if (get) {
  //         if (getCookie('goodsBasket')) {
  //             goodsBasket = JSON.parse(getCookie('goodsBasket'));
  //         };
  //     } else {
  //         document.cookie = `goodsBasket=${JSON.stringify(goodsBasket)};max-age=86400e3`;
  //     }
  // };

  // const storageQuery = (get) => {

  //     if (get) {
  //         if (localStorage.getItem('wishlist')) {
  //             const wishlistStorage = JSON.parse(localStorage.getItem('wishlist'));
  //             wishlistStorage.forEach(id => wishlist.push(id));
  //         }
  //     } else {
  //         localStorage.setItem('wishlist', JSON.stringify(wishlist));
  //     };
  // };

  // const toggleWishlist = (id, elem) => {
  //     if (wishlist.includes(id)) {
  //         wishlist.splice(wishlist.indexOf(id), 1);
  //         elem.classList.remove('active');
  //     } else {
  //         wishlist.push(id);
  //         elem.classList.add('active');
  //     };
  //     storageQuery();
  // };
  return (
    <div className='cart' onClick={handlerClick}>
      <div className='cart_body'>
        <div className='contant'>
          <div className='contant_body'>
            <div className='cart_head'>
              <div className='cart_title'>Корзина</div>
              <div className='cart_total'>
                Общая сумма: <span>0</span> руб
              </div>
            </div>
            <div className='cart_wrapper'>
              <div id='cart-empty'>Ваша корзина пока пуста!</div>
            </div>
            <button className='btn_primary cart_confirm'>Оформить заказ</button>
            <div className='cart_close' onClick={handlerClick}></div>
          </div>
        </div>
      </div>
    </div>
  );
});

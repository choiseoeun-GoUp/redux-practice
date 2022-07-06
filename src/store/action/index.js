// 장바구니에 아이템의 수량을 변경할 수 있도록
// action객체를 생성하는 함수(액션 생성자)를 만들어서 사용하자

// 액션의 타입을 미리 변수로 선언
export const ADD_CART = "ADD_CART";
export const REMOVE_CART = "REMOVE_CART";
export const SET_QUANTITY = "SET_QUANTITY";

// 액션 생성자
export const addCart = (itemId) => {
  return {
    type: ADD_CART,
    payload: {
      quantity: 1,
      itemId,
    },
  };
};

export const removeCart = (itemId) => {
  return {
    type: REMOVE_CART,
    payload: {
      itemId,
    },
  };
};

export const setQuantity = (itemId, quantity) => {
  return {
    type: SET_QUANTITY,
    payload: {
      quantity: quantity,
      itemId,
    },
  };
};

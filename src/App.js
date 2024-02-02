import { useReducer, useState } from "react";
import Meals from "./components/Meals/Meals";
import cartDataContext from './store/Context'
import MealFilterBar from "./components/MealFilterBar/MealFilterBar";
import Cart from "./components/Cart/Cart";

// 模拟一组食物数据
const MEALS_DATA = [
  {
    id: '1',
    title: '汉堡包',
    desc: '百分百纯牛肉配搭爽脆酸瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡！',
    price: 12,
    img: '/img/meals/1.png'
  },
  {
    id: '2',
    title: '双层吉士汉堡',
    desc: '百分百纯牛肉与双层香软芝，加上松软面包及美味酱料，诱惑无人能挡！',
    price: 20,
    img: '/img/meals/2.png'
  },
  {
    id: '3',
    title: '巨无霸',
    desc: '两块百分百纯牛肉，搭配生菜、洋葱等新鲜食材，口感丰富，极致美味！',
    price: 24,
    img: '/img/meals/3.png'
  }, {
    id: '4',
    title: '麦辣鸡腿汉堡',
    desc: '金黄脆辣的外皮，鲜嫩幼滑的鸡腿肉，多重滋味，一次打动您挑剔的味蕾！',
    price: 21,
    img: '/img/meals/4.png'
  }, {
    id: '5',
    title: '板烧鸡腿堡',
    desc: '原块去骨鸡排嫩滑多汁，与翠绿新鲜的生菜和香浓烧鸡酱搭配，口感丰富！',
    price: 22,
    img: '/img/meals/5.png'
  }, {
    id: '6',
    title: '麦香鸡',
    desc: '清脆爽口的生菜，金黄酥脆的鸡肉。营养配搭，好滋味的健康选择！',
    price: 14,
    img: '/img/meals/6.png'
  }, {
    id: '7',
    title: '吉士汉堡包',
    desc: '百分百纯牛肉与香软芝士融为一体配合美味番茄醬丰富口感一咬即刻涌现！',
    price: 12,
    img: '/img/meals/7.png'
  }
];

const cartDataReducer = (state, action) => {
  const meal = action.meal
  const updatedCartData = { ...state };
  switch (action.type) {
    case 'ADD': {
      if (updatedCartData.items.indexOf(meal) === -1) {
        meal.amount = 1;
        updatedCartData.items.push(meal);
      } else {
        meal.amount += 1;
      }
      updatedCartData.totalAmount += 1;
      updatedCartData.totalPrice += meal.price;
      return updatedCartData
    }
    case 'SUB': {
      meal.amount -= 1;
      if (meal.amount === 0) {
        updatedCartData.items.splice(updatedCartData.items.indexOf(meal), 1);
      }
      updatedCartData.totalAmount -= 1;
      updatedCartData.totalPrice -= meal.price;
      return updatedCartData
    }
    case 'CLEAR': {
      updatedCartData.items.forEach(items => items.amount = 0);
      updatedCartData.items = [];
      updatedCartData.totalAmount = 0;
      updatedCartData.totalPrice = 0;
      return updatedCartData
    }
    default:
      return state
  }

}


function App() {

  const [cartData, cartDataDispatch] = useReducer(cartDataReducer, {
    totalAmount: 0,
    totalPrice: 0,
    items: []
  });
  const [FilteredMeal, setFilteredMeal] = useState(MEALS_DATA)

  return (
    <>
      <cartDataContext.Provider value={{ ...cartData, cartDataDispatch }}>
        <MealFilterBar MEALS_DATA={MEALS_DATA} setFilteredMeal={setFilteredMeal} />
        <Meals MEALS_DATA={FilteredMeal} />
        <Cart />
      </cartDataContext.Provider>
    </>
  );
}

export default App;

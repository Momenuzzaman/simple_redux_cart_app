import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import NotificationUi from './components/UI/NotificationUi';
import { fetchCartData, sendCartData } from './store/cart-action';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector(state => state.ui.cartVisible);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);
  return (
    <>
      {notification && (
        <NotificationUi
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>

  );
}

export default App;

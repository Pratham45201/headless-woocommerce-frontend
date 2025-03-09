import axios from "axios";

const Cart = async () => {
  const { items, totals, headers } = await axios.get(
    `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/wc/store/v1/cart`
  );

  console.log(headers);

  return (
    <div>
      {items?.length ? (
        <div>
          {items.map((item, index) => {
            <div>
              <h1>{item?.name}</h1>
              <p>{item?.prices?.price}</p>
              <p>{items?.quantity}</p>
            </div>;
          })}
          <p>
            Total: {totals?.currency_symbol}
            {totals?.total_price}
          </p>
        </div>
      ) : (
        <p>No products added to cart</p>
      )}
    </div>
  );
};

export default Cart;

import Product from "../../../components/Product";

const Products = ({ products }) => {
  return (
    <div className="flex flex-wrap -mx-2 overflow-hidden">
      {products?.length
        ? products.map((product) => {
            const img = product?.images?.[0] ?? {};
            return <Product key={product?.id} product={product} img={img} />;
          })
        : null}
    </div>
  );
};

export default Products;

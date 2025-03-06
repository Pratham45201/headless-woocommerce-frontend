import Link from "next/link";
import Image from "@/components/Image";

const Products = ({ products }) => {
  console.log(products[0]);
  return (
    <div className="flex flex-wrap -mx-2 overflow-hidden">
      {products.length
        ? products.map((product) => {
            const img = product?.images?.[0] ?? {};
            console.log(img);
            return (
              <div
                key={product?.id}
                className="my-2 px-2 w-full overflow-hidden sm:w-1/2 md:w-1/3 xl:w-1/4"
              >
                <Link href={product?.permalink ?? "/"}>
                  <Image
                    sourceUrl={img?.src ?? ""}
                    altText={img?.alt ?? ""}
                    title={img?.title ?? ""}
                    width="380"
                    height="380"
                  />
                  {product?.name}
                </Link>
              </div>
            );
          })
        : null}
      <div className="my-2 px-2 w-full overflow-hidden sm:w-1/2 md:w-1/3 xl:w-1/4"></div>
    </div>
  );
};

export default Products;

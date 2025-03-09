"use client";

import Link from "next/link";
import Image from "../components/Image";
import DOMPurify from "isomorphic-dompurify";
import axios from "axios";

const Product = ({ product, img }) => {

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
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(product?.price_html ?? ""),
          }}
        />
      </Link>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;

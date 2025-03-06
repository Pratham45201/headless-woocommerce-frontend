import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import axios from "axios";
import {
  HEADER_FOOTER_ENDPOINT,
  GET_PRODUCTS_ENDPOINT,
} from "@/utils/constants/endpoints";
import Products from "./products/page";

export default async function Home() {
  const { header, footer } = await axios.get(HEADER_FOOTER_ENDPOINT);
  const { data } = await axios.get(GET_PRODUCTS_ENDPOINT);
  return (
    <div>
      <Header header={header} />
      <main className="container mx-auto p-4">
        <Products products={data.products ?? []} />
      </main>
      <Footer footer={footer} />
    </div>
  );
}

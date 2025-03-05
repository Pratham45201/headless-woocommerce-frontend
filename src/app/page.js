import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import axios from "axios";
import { HEADER_FOOTER_ENDPOINT } from "@/utils/constants/endpoints";

export const revalidate = 1;

export default async function Home(props) {
  const { header, footer } = await axios.get(HEADER_FOOTER_ENDPOINT);

  return (
    <div>
      <Header header={header} />
      <main>
        <div className="text-green-600">Hello world</div>
      </main>
      <Footer footer={footer} />
    </div>
  );
}

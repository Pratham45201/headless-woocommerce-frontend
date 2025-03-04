import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { HEADER_FOOTER_ENDPOINT } from "@/utils/constants/endpoints";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <div className="text-green-600">Hello world</div>
      </main>
      <Footer />
    </div>
  );
}

export async function getInitialProps() {
  const { data } = await axios.get(HEADER_FOOTER_ENDPOINT);
  return {
    props: data || {},
    revalidate: 1,
  };
}

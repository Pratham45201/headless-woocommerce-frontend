import axios from "axios";
import { GET_PRODUCTS_ENDPOINT } from "../utils/constants/endpoints";
import Products from "./(pages)/products/page";
import next from "next";
import { revalidatePath } from "next/cache";

// export const dynamic = "force-dynamic";
// export const revalidate = 600;

export default async function Home() {
  const { data } = await axios.get(GET_PRODUCTS_ENDPOINT);
  return (
    <div>
      <main className="container mx-auto p-4">
        <Products products={data?.products ?? []} />
      </main>
    </div>
  );
}

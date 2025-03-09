import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const wooApi = new WooCommerceRestApi({
  url: process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL,
  consumerKey: process.env.WC_CONSUMER_KEY,
  consumerSecret: process.env.WC_CONSUMER_SECRET,
  version: "wc/v3",
});

export async function GET(request) {
  // Basic response body
  const responseData = {
    success: false,
    products: [],
  };

  try {
    // Getting data from woo store
    console.log(wooApi.headers);
    const response = await wooApi.get("products");
    console.log(response.headers);
    const { data } = response;
    responseData.success = true;
    responseData.products = data;
    return Response.json(responseData);
  } catch (error) {
    console.log(error);
    return Response.json(
      { success: false, error: error.message },
      { status: response.status }
    );
  }
}

import Stripe from "stripe";
const STRIPE_API_KEY = "sk_test_51OSN16ANgGxe9GO4oG50Sr0VHCDnNA1klJNjt0VHS9s8v4WNHI1sKznhaVPPZzPOlcADrQPcOONH1ChTQsFTZX5000RMBnTvWl";
const HOSTNAME = "http://localhost:5173";
const API_VERSION = "2023-10-16";
const stripe = new Stripe(STRIPE_API_KEY, {
  apiVersion: API_VERSION
});
const POST = async ({ request }) => {
  try {
    const { items } = await request.json();
    let lineItems = [];
    await items.forEach((item) => {
      lineItems.push({
        price: item.stripe_id,
        quantity: 1
      });
    });
    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: "payment",
      success_url: `${HOSTNAME}/payment-success`,
      cancel_url: `${HOSTNAME}/payment-canceled`
    });
    return new Response(
      JSON.stringify({
        url: session.url
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  } catch (e) {
    return new Response(
      JSON.stringify({
        message: "Something went wrong while trying to checkout",
        error: e
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
};
export {
  POST
};

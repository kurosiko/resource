import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import { Header } from "~/components/routed_components/header";
import LongAgo from "/static/images/long_ago.png?jsx"
export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.dev/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  return (
    <>
      <Header/>
      <div class="p-5 max-w-screen">
        <div class="flex max-w-full">
          <div class="w-50 min-w-50">
            <LongAgo/>
            <div class="*:flex *:flex-auto text-center *:content-center *:justify-center *:flex-col border border-gray-500/50 *:p-3 *:gap-5 my-5 divide-gray-500/50">
              <label class="bg-gray-500 text-white font-semibold">Search Products</label>
              <ul>
              <li>Free</li>
              <li>Discount</li>
              <li>Limited</li>
              <li>New</li>
              </ul>
              <label class="bg-gray-500/30 font-semibold">Products Format</label>
              <ul>
              <li>Face</li>
              <li>Ahoge</li>
              </ul>
            </div>
          </div>
          <div class="px-5 w-full max-w-full">
            <Slot/>
          </div>
        </div>  
      </div>      
    </>
  )
});

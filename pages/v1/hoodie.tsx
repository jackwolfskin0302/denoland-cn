/* Copyright 2020 the Deno authors. All rights reserved. MIT license. */

import React, { useState } from "react";
import Head from "next/head";

import Footer from "../../components/Footer";
import Header from "../../components/Header";

const V1Hoodie = () => {
  const [size, setSize] = useState("M");

  return (
    <>
      <Head>
        <title>Deno 1.0 Hoodie</title>
        <meta
          name="description"
          content="A limited edition, premium quality Deno 1.0 hoodie that you can order to help support the Deno project."
        />
      </Head>
      <Header />
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-8 mb-16">
        <h1 className="text-3xl tracking-tight font-bold text-5xl leading-10">
          Deno 1.0 Hoodie
        </h1>
        <p className="text-gray-500 mt-3 leading-tight">
          Limited Time, Premium Quality
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          <div>
            <img src="/v1_hoodie_mock.png" alt="deno hoodie" />
          </div>
          <div>
            <p className="text-gray-900">
              Help support the Deno project by pre-ordering a limited time,
              special edition Deno v1.0 hoodie. This black zip-up hoodie
              features the v1.0 artwork by the famed Tokyo-based hacker/artist{" "}
              <a className="link" href="https://github.com/hashrock">
                hashrock
              </a>
              .
            </p>
            <p className="text-gray-900 mt-4">
              To be clear: this is a pre-order. We have not yet had these
              manufactured. The image above is a photoshopped mock-up. We will
              be taking orders until May 21st, after which this limited edition
              hoodie will never again be sold. We expect to ship these out in
              July.
            </p>
            <p className="text-gray-900 font-bold text-2xl leading-tight mt-4">
              $100
            </p>
            <p className="text-gray-500 mt-1 leading-tight">$15 shipping</p>
            <form
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_top"
            >
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input
                type="hidden"
                name="hosted_button_id"
                value="FRK9AR6WRLBBJ"
              />
              <input type="hidden" name="currency_code" value="USD" />
              <input type="hidden" name="on0" value="Sizes" />

              <div className="mt-4 w-full">
                <label htmlFor="size" className="text-sm">
                  Size
                </label>
                <div className="mt-1">
                  <div className="rounded-md shadow-sm">
                    <select
                      id="size"
                      name="os0"
                      className="block form-select w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      value={size}
                      onChange={({ target: { value: newSize } }) =>
                        setSize(newSize)
                      }
                    >
                      {["S", "M", "L", "XL", "XXL"].map((v) => (
                        <option key={v} value={v}>
                          {v}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <img src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" />
              <div className="mt-2">
                <span className="block w-full rounded-md shadow-sm">
                  <button
                    name="submit"
                    type="submit"
                    className="flex w-full justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:shadow-outline-indigo active:bg-gray-700 transition duration-150 ease-in-out"
                  >
                    Purchase with PayPal
                  </button>
                </span>
              </div>
              <div className="mt-6">
                <h4 className="text-gray-500">Size chart (in inches)</h4>
                {/* Gildan Heavy Blend Adult Full Zip Hooded Sweatshirt 18600 */}
                <table className="table-auto mt-1 overflow-x-auto w-full rounded">
                  <thead>
                    <tr>
                      <th className="border px-4 py-2">Size</th>
                      <th className="border px-4 py-2">Width</th>
                      <th className="border px-4 py-2">Length</th>
                      <th className="border px-4 py-2">Sleeve Center Back</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2">S</td>
                      <td className="border px-4 py-2">19.25</td>
                      <td className="border px-4 py-2">27</td>
                      <td className="border px-4 py-2">33.5</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">M</td>
                      <td className="border px-4 py-2">21.25</td>
                      <td className="border px-4 py-2">28</td>
                      <td className="border px-4 py-2">34.5</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">L</td>
                      <td className="border px-4 py-2">23.25</td>
                      <td className="border px-4 py-2">29</td>
                      <td className="border px-4 py-2">35.5</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">XL</td>
                      <td className="border px-4 py-2">25.25</td>
                      <td className="border px-4 py-2">30</td>
                      <td className="border px-4 py-2">36.5</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">XXL</td>
                      <td className="border px-4 py-2">27.25</td>
                      <td className="border px-4 py-2">31</td>
                      <td className="border px-4 py-2">37.5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default V1Hoodie;

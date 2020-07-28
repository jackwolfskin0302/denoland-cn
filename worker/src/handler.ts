/* Copyright 2020 the Deno authors. All rights reserved. MIT license. */

import { handleRegistryRequest } from "./registry";

const REMOTE_URL = "https://deno-website2.now.sh";

export async function handleRequest(request: Request) {
  const accept = request.headers.get("accept");
  const isHtml = accept && accept.indexOf("html") >= 0;

  const url = new URL(request.url);

  if (url.pathname.startsWith("/typedoc")) {
    return Response.redirect(
      "https://doc.deno.land/https/github.com/denoland/deno/releases/latest/download/lib.deno.d.ts",
      301
    );
  }

  const isRegistryRequest =
    url.pathname.startsWith("/std") || url.pathname.startsWith("/x");

  if (isRegistryRequest && !isHtml) {
    return handleRegistryRequest(url);
  }

  return proxyFile(url, REMOTE_URL, request);
}

function proxyFile(url: URL, remoteUrl: string, request: Request) {
  const init = {
    method: request.method,
    headers: request.headers,
  };
  const urlR = remoteUrl + url.pathname;
  console.log(`Proxy ${url} to ${urlR}`);
  const modifiedRequest = new Request(urlR, init);
  console.log("modifiedRequest", modifiedRequest.url);
  return fetch(modifiedRequest);
}

// Copyright 2022 the Deno authors. All rights reserved. MIT license.

/** @jsx h */
import { h } from "preact";
import { render } from "$gfm";

export function Markdown(
  { source, baseUrl }: { source: string; baseUrl?: string },
) {
  const html = render(source, { allowIframes: false, baseUrl });
  return (
    <div
      class="markdown-body"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

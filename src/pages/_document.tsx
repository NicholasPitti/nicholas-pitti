import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body className="antialiased" style={{ color:'#fff', backgroundColor:'#111828'}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

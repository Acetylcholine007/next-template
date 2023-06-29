import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="application-name" content="Next Template" />
        <meta name="description" content="Next Template" />
        <meta name="keywords" content="Next Template" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <div id="drawer-target" />
        <div id="modal-target" />
        <div id="snackbar-target" />
      </body>
    </Html>
  );
}

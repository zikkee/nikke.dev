import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            <meta name="description" content="a teen who enjoys system administration and coding" />
            <meta name="keywords" content="nikke, nikke.dev, nikkedev, zikke, zikkee, N1kkee" />
            <meta name="theme-color" content="#000000" />
            <script defer data-domain="nikke.dev" src="https://analytics.nikke.dev/js/script.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

import Document, { Html, Head, Main, NextScript } from 'next/document';

const setInitialTheme = `
    function getUserPreference() {
      if(window.localStorage.getItem('theme')) {
        return window.localStorage.getItem('theme')
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light'
    }
    document.body.dataset.theme = getUserPreference();
  `;

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap"
            rel="stylesheet"
          />
          <link href="https://css.gg/eye.css" rel="stylesheet" />
          <link href="https://css.gg/git-fork.css" rel="stylesheet" />
          <link href="https://css.gg/moon.css" rel="stylesheet" />
          <link href="https://css.gg/sun.css" rel="stylesheet" />
          <link href="https://css.gg/log-off.css" rel="stylesheet"></link>
        </Head>
        <body>
          <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

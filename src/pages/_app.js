import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <main>
      <header></header>
      <Component {...pageProps} />
    </main>
  );
}

import ContentWrapper from '@/components/layout/ContentWrapper';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <ContentWrapper>
        <Component {...pageProps} />
      </ContentWrapper>
      <Footer />
    </>
  );
}

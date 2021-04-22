import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../styles/Layout.module.css';
import Footer from './Footer';
import Header from './Header';
import Showcase from './Showcase';

type LayoutProps = {
  title?: string;
  description?: string;
  keywords?: string;
};

const Layout: React.FC<LayoutProps> = ({
  title,
  description,
  keywords,
  children,
}) => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <Header />
      {router.pathname === '/' && <Showcase />}
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: 'tech-talks | Find your favourite talks',
  description:
    'A place where you find talks and podcasts related to latest techs',
  keywords:
    'tech, talks, podcast, development, web, software, node, react, next',
};

export default Layout;

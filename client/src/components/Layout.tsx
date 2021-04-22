import Head from 'next/head';
import styles from '../styles/Layout.module.css';

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
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>

      <div className={styles.container}>{children}</div>
    </div>
  );
};

Layout.defaultProps = {
  title: 'Tech Talks | Find your favourite talks',
  description:
    'A place where you find talks and podcasts related to latest techs',
  keywords:
    'tech, talks, podcast, development, web, software, node, react, next',
};

export default Layout;

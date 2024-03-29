import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/404.module.css';

const NotFoundPage = () => {
  return (
    <Layout title='Page Not Found'>
      <div className={styles.error}>
        <h1>
          <span className='material-icons'>warning</span> 404
        </h1>
        <h4>Sorry there is nothing here</h4>
        <Link href='/'>Go back Home</Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

const TalkPage = () => {
  const router = useRouter();

  return (
    <Layout>
      <h1>{router.query.slug}</h1>
    </Layout>
  );
};

export default TalkPage;

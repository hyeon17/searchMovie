import Content from '@/components/Content';
import { Helmet } from 'react-helmet-async';

function FavoritePage() {
  
  return (
    <>
      <Helmet>
        <title>Favorite | MOVIEFLIX</title>
        <meta name="description" content="즐겨찾기" />
      </Helmet>
      <Content content={''} favorite={true} item={true} />
    </>
  );
}

export default FavoritePage;

import Content from '@/components/Content';
import { Helmet } from 'react-helmet-async';

function FavoritePage() {
  // const { getFid } = useFavoriteStore();
  // const { data, error, isLoading } = useSearchMovieId(getFid());
  // todo: 여기서 로컬스토리지 값 가져와서 가공 후 content에 넘김, 또한 조건문을 통해 로컬스토리지에 값이 있다면 true or false 반환해서 item에 넘겨줌
  //const itemList = JSON.parse(localStorage.getItem('fid') || '[]');
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

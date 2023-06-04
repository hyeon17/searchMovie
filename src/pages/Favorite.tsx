import { useSearchMovieId } from '@/apis';
import Content from '@/components/Content';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

function FavoritePage() {
  const [content, setContent] = useState<any[]>([]);
  const itemList = JSON.parse(localStorage.getItem('fid') || '[]');
  const items: any[] = [];

  itemList.forEach((item: any) => {
    const { data: res, isSuccess, refetch } = useSearchMovieId(item.imdbID);
    // 첫 데이터가 들어간뒤에 렌더링이 되고 나서 다음 데이터는 들어가지 않음
    if (isSuccess) {
      items.push(res?.data);
    }
  });

  useEffect(() => {
    if (items) {
      setContent(items);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Favorite | MOVIEFLIX</title>
        <meta name="description" content="즐겨찾기" />
      </Helmet>
      <Content content={content} favorite={true} item={true} />
    </>
  );
}

export default FavoritePage;

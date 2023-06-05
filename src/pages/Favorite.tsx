import Content from '@/components/Content';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

function FavoritePage() {
  const [content, setContent] = useState<any[]>([]);
  const itemList = JSON.parse(localStorage.getItem('fid') || '[]');
  const items: any[] = [];

  itemList.map((item: any) => {
    items.push(item);
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

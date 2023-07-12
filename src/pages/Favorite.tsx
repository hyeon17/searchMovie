import Content from '@/components/Content';
import MetaTag from '@/components/MetaTag';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function FavoritePage() {
  const location = useLocation();
  const [content, setContent] = useState<any[]>([]);
  const itemList = JSON.parse(localStorage.getItem('fid') || '[]');
  const items: any[] = [];

  itemList.map((item: any) => {
    items.push(item);
  });

  useEffect(() => {
    if (items.length > 0) {
      setContent(items);
    }
  }, []);

  const metaTagProps = {
    title: 'Favorite | MOVIEFLIX',
    content: '즐겨찾기',
    keywords: '영화, 검색, movie, search, MOVIEFLIX',
    description: '즐겨찾기',
    url: location.pathname,
  };

  return (
    <>
      <MetaTag props={metaTagProps} />
      <Content content={content} favorite={true} item={true} />
    </>
  );
}

export default FavoritePage;

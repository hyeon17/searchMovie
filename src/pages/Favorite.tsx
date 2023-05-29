import React from 'react';
import Content from '@/components/Content';
import { useFavoriteStore } from '@/store/favoriteStore';
import { useSearchMovieId } from '@/apis';
import { Helmet } from 'react-helmet-async';

function FavoritePage() {
  // const { getFid } = useFavoriteStore();
  // const { data, error, isLoading } = useSearchMovieId(getFid());
  // todo: 여기서 로컬스토리지 값 가져와서 가공 후 content에 넘김, 또한 조건문을 통해 로컬스토리지에 값이 있다면 true or false 반환해서 item에 넘겨줌
  return (
    <>
      <Helmet>
        <title>Favorite | MOVIEFLIX</title>
      </Helmet>
      <Content content={''} loading={false} favorite={true} item={false} />
    </>
  );
}

export default FavoritePage;

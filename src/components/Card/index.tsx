import { useState } from 'react';
import * as S from '@/styles/Card.styles';
import ExclamationCircleOutlined from '@ant-design/icons/ExclamationCircleOutlined';
import HeartOutlined from '@ant-design/icons/HeartOutlined';
import HeartFilled from '@ant-design/icons/HeartFilled';
import { useIdStore } from '@/store/idStore';
import { useModalStore } from '@/store/modalStore';

function Card({ image, title, description, style, icon, data }: any) {
  const [ ,setHeart] = useState(false);
  const { setOpen } = useModalStore();
  const { setId } = useIdStore();

  const isHeart = (imdbID: number) => {
    const storedData = localStorage.getItem('fid');
    if (storedData) {
      const data = JSON.parse(storedData);
      const existingItem = data.find((item: any) => item.imdbID === imdbID);
      return existingItem ? existingItem.heart : false;
    }
    return false;
  };

  const useHandleHeart = (items: any) => {
    const storedData = localStorage.getItem('fid');
    const isData = storedData ? JSON.parse(storedData) : [];
    const newData = { imdbID: items.imdbID, Poster: items.Poster, Title: items.Title, Year: items.Year, heart: true };

    const existingIndex = isData.findIndex((item: any) => item.imdbID === items.imdbID);
    if (existingIndex !== -1) {
      isData.splice(existingIndex, 1);
      setHeart(false);
    } else {
      isData.push(newData);
      setHeart(true);
    }
    localStorage.setItem('fid', JSON.stringify(isData));
  };

  const handleClickCard = (imdbID: number) => {
    setId(imdbID);
    setOpen();
  };

  return (
    <S.CardContainer style={style} cover={image}>
      <S.CardDescription title={title} description={description} />
      {icon && (
        <S.CardIcon>
          <div onClick={() => handleClickCard(data.imdbID)}>
            <ExclamationCircleOutlined />
          </div>
          <S.CardHeart onClick={() => useHandleHeart(data)}>
            {isHeart(data.imdbID) ? <HeartFilled /> : <HeartOutlined />}
          </S.CardHeart>
        </S.CardIcon>
      )}
    </S.CardContainer>
  );
}

export default Card;

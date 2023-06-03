import { useState } from 'react';
import * as S from '@/styles/Card.styles';
import ExclamationCircleOutlined from '@ant-design/icons/ExclamationCircleOutlined';
import HeartOutlined from '@ant-design/icons/HeartOutlined';
import HeartFilled from '@ant-design/icons/HeartFilled';
import { useIdStore } from '@/store/idStore';
import { useModalStore } from '@/store/modalStore';

function Card({ image, title, description, style, icon, data }: any) {
  const [heart, setHeart] = useState(false);
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

  const useHandleHeart = (imdbID: number) => {
    const storedData = localStorage.getItem('fid');
    let data = storedData ? JSON.parse(storedData) : [];
    const newData = { imdbID, heart: true };

    const existingIndex = data.findIndex((item: any) => item.imdbID === imdbID);
    if (existingIndex !== -1) {
      data.splice(existingIndex, 1);
      setHeart(false);
    } else {
      data.push(newData);
      setHeart(true);
    }
    localStorage.setItem('fid', JSON.stringify(data));
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
          <S.CardHeart onClick={() => useHandleHeart(data.imdbID)}>
            {isHeart(data.imdbID) ? <HeartFilled /> : <HeartOutlined />}
          </S.CardHeart>
        </S.CardIcon>
      )}
    </S.CardContainer>
  );
}

export default Card;

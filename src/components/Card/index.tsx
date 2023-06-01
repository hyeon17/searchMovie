import { useState, useEffect } from 'react';
import * as S from '@/styles/Card.styles';
import { HeartOutlined, HeartFilled, ExclamationCircleOutlined } from '@ant-design/icons';
import { useIdStore } from '@/store/idStore';
import { useModalStore } from '@/store/modalStore';

function Card({ image, title, description, style, icon, data }: any) {
  const [heart, setHeart] = useState(false);
  const { setOpen } = useModalStore();
  const { setId } = useIdStore();
  const [item, setItem] = useState<number[]>([]);

  useEffect(() => {
    const storedId = localStorage.getItem('fid');
    if (storedId) {
      setItem(JSON.parse(storedId));
    }
  }, []);

  useEffect(() => {
    if (item.length > 0) {
      localStorage.setItem('fid', JSON.stringify(item));
    }
  }, [item]);

  const useHandleHeart = (imdbID: number) => {
    const storedId = localStorage.getItem('fid');
    if (storedId) {
      alert('현재 즐겨찾기는 1개만 가능합니다.');
      return;
    }
    setHeart(!heart);
    setItem((prev) => [...prev, imdbID]);
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
            {heart ? <HeartFilled /> : <HeartOutlined />}
          </S.CardHeart>
        </S.CardIcon>
      )}
    </S.CardContainer>
  );
}

export default Card;

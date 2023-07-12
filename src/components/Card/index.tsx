import * as S from '@/styles/Card.styles';
import ExclamationCircleOutlined from '@ant-design/icons/ExclamationCircleOutlined';
import HeartOutlined from '@ant-design/icons/HeartOutlined';
import HeartFilled from '@ant-design/icons/HeartFilled';
import { useIdStore } from '@/store/idStore';
import { useModalStore } from '@/store/modalStore';
import { useHeartStore } from '@/store/heartStore';
import { ReactElement } from 'react';
import { IFavoriteMovie, Movie } from '@/types/searchMovie';

interface ICardProps {
  image: ReactElement;
  title: string;
  description: string | ReactElement;
  style?: React.CSSProperties;
  icon?: boolean;
  data?: Movie;
}

function Card({ image, title, description, style, icon, data }: ICardProps) {
  const { setIsHeart } = useHeartStore();
  const { setOpen } = useModalStore();
  const { setId } = useIdStore();

  const isHeart = (imdbID?: string) => {
    const storedData = localStorage.getItem('fid');
    if (storedData) {
      const data = JSON.parse(storedData);
      const existingItem = data.find((item: IFavoriteMovie) => item.imdbID === imdbID);
      return existingItem ? existingItem.heart : false;
    }
    return false;
  };

  const heartHandler = (items: Movie) => {
    const storedData = localStorage.getItem('fid');
    const isData = storedData ? JSON.parse(storedData) : [];
    const newData = { imdbID: items.imdbID, Poster: items.Poster, Title: items.Title, Year: items.Year, heart: true };

    const existingIndex = isData.findIndex((item: IFavoriteMovie) => item.imdbID === items.imdbID);
    if (existingIndex !== -1) {
      isData.splice(existingIndex, 1);
      alert('즐겨찾기에서 삭제되었습니다.');
      setIsHeart(false);
    } else {
      isData.push(newData);
      alert('즐겨찾기에 추가되었습니다.');
      setIsHeart(true);
    }
    localStorage.setItem('fid', JSON.stringify(isData));
  };

  const handleClickCard = (imdbID: string) => {
    setId(imdbID);
    setOpen();
  };

  return (
    <S.CardContainer style={style} cover={image}>
      <S.CardDescription title={title} description={description} />
      {icon && data && (
        <S.CardIcon>
          <div onClick={() => handleClickCard(data.imdbID)}>
            <ExclamationCircleOutlined />
          </div>
          <S.CardHeart onClick={() => heartHandler(data)}>
            {isHeart(data.imdbID) ? <HeartFilled /> : <HeartOutlined />}
          </S.CardHeart>
        </S.CardIcon>
      )}
    </S.CardContainer>
  );
}

export default Card;

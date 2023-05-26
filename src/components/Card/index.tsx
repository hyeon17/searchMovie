import * as S from '@/styles/Card.styles';

function Card({ image, title, description, style }: any) {
  return (
    <S.CardContainer style={style} cover={image}>
      <S.CardDescription title={title} description={description} />
    </S.CardContainer>
  );
}

export default Card;

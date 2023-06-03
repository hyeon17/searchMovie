import * as S from '@/styles/Content.styles';
import Card from '@/components/Card';
import noImg from '@/assets/no_image.png';

function Container({ content }: any) {
  const highImg = (data: any) => {
    return data?.replace('SX300', 'SX1080');
  };

  return (
    <S.PageContainer>
      {Array.isArray(content.Search) ? (
        content.Search.map((data: any) => (
          <S.CardWrapper key={data.imdbID}>
            <Card
              style={{ width: 270 }}
              image={
                data.Poster === 'N/A' ? (
                  <img src={noImg} alt="NoImage" />
                ) : (
                  <img src={highImg(data.Poster)} alt="poster" />
                )
              }
              title={data.Title}
              description={data.Year}
              icon={true}
              data={data}
            />
          </S.CardWrapper>
        ))
      ) : content === undefined ? (
        <></>
      ) : (
        content.map((data: any) => (
          <S.CardWrapper key={data.imdbID}>
            <Card
              style={{ width: 270 }}
              image={
                data.Poster === 'N/A' ? (
                  <img src={noImg} alt="NoImage" />
                ) : (
                  <img src={highImg(data.Poster)} alt="poster" />
                )
              }
              title={data.Title}
              description={data.Year}
              icon={true}
              data={data}
            />
          </S.CardWrapper>
        ))
      )}
    </S.PageContainer>
  );
}

export default Container;

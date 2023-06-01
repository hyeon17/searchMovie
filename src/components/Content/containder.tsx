import * as S from '@/styles/Content.styles';
import Card from '@/components/Card';
import noImg from '@/assets/no_image.png';

function Container({ content }: any) {
  const highImg = (data: any) => {
    return data?.replace('SX300', 'SX1080');
  };
  console.log(content);
  return (
    <S.PageContainer>
      {Array.isArray(content.Search) ? (
        content.Search.map((data: any, idx: number) => (
          <S.CardWrapper key={idx}>
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
      ) : content.Search.imdbID === undefined ? (
        <></>
      ) : (
        <S.CardWrapper key={content.Search.imdbID}>
          <Card
            style={{ width: 270 }}
            image={
              content.Search.Poster === 'N/A' ? (
                <img src={noImg} alt="NoImage" />
              ) : (
                <img src={highImg(content.Search.Poster)} alt="poster" />
              )
            }
            title={content.Search.Title}
            description={content.Search.Year}
            icon={true}
            data={content.Search}
          />
        </S.CardWrapper>
      )}
    </S.PageContainer>
  );
}

export default Container;

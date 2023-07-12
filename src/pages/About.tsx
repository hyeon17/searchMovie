import * as S from '@/styles/Page.styles';
import GithubOutlined from '@ant-design/icons/GithubOutlined';
import Card from '@/components/Card';
import profile from '@/assets/profile.png';
import MetaTag from '@/components/MetaTag';
import { useLocation } from 'react-router-dom';

function AboutPage() {
  const location = useLocation();
  const metaTagProps = {
    title: 'About | MOVIEFLIX',
    content: 'https://github.com/hyeon17',
    keywords: '영화, 검색, movie, search, MOVIEFLIX',
    description: 'https://github.com/hyeon17',
    url: location.pathname,
  };
  
  return (
    <S.PageContainer>
      <MetaTag props={metaTagProps} />
      <Card
        image={<img src={profile} alt="profile" />}
        title={'Jang Hyeon Jun'}
        description={
          <a href="https://github.com/hyeon17">
            <GithubOutlined /> GitHub
          </a>
        }
        icon={false}
        style={{ height: 510 }}
      />
    </S.PageContainer>
  );
}

export default AboutPage;

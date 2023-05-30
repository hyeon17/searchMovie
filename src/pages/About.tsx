import * as S from '@/styles/Page.styles';
import { GithubOutlined } from '@ant-design/icons';
import Card from '@/components/Card';
import { Helmet } from 'react-helmet-async';
import profile from '@/assets/profile.png';

function AboutPage() {
  return (
    <S.PageContainer>
      <Helmet>
        <title>About | MOVIEFLIX</title>
        <meta name="description" content="https://github.com/hyeon17" />
      </Helmet>
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

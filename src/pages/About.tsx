import * as S from '@/styles/Page.styles';
import { GithubOutlined } from '@ant-design/icons';
import Card from '@/components/Card';

function AboutPage() {
  return (
    <S.PageContainer>
      <Card
        image={<img src="../../public/profile.png" alt='profile' />}
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

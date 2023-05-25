import React from 'react';
import * as S from '@/styles/Page.styles';
import { GithubOutlined } from '@ant-design/icons';
function AboutPage() {
  return (
    <S.PageContainer>
      <S.CardContainer cover={<img src="../../public/profile.png" />}>
        <S.CardDescription
          title="Jang Hyeon Jun"
          description={
            <a href="https://github.com/hyeon17">
              <GithubOutlined /> GitHub
            </a>
          }
        />
      </S.CardContainer>
    </S.PageContainer>
  );
}

export default AboutPage;

import { Helmet } from 'react-helmet-async';
import defaultImg from '@/assets/title.png';

interface MetaTagProps {
  title: string;
  content: string;
  keywords: string;
  description: string;
  url: string;
}

function MetaTag({ props }: { props: MetaTagProps }) {
  const { title, content, keywords, description, url } = props;
  const Url = 'https://inspiring-cactus-b0f41b.netlify.app' + url;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={content} />
      <meta name="keywords" content={keywords} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={defaultImg} />
      <meta property="og:url" content={Url} />
    </Helmet>
  );
}

export default MetaTag;

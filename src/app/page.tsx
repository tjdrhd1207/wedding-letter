import { H1 } from "@/components/Text";
import Wrapper from "@/components/Wrapper";
import BGImgContainer from "@/container/BGImgContainer";
import Main from "@/container/main/Main";
import GalleryWrap from "@/container/gallery/GalleryWrap";
import Sub from "@/container/sub/Sub";
import LetterContent from "@/container/letter-content/LetterContent";
import Layout from "@/container/Layout";

export default function Home() {
  return (
    <div>
      <Layout>
        <Wrapper>
          <BGImgContainer>
            <Main />
          </BGImgContainer>
          <Sub />
        </Wrapper>
        <Wrapper>
          <LetterContent></LetterContent>
        </Wrapper>
      </Layout>
    </div>
  );
}

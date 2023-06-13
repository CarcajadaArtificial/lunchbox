import Header from "../components/Header.tsx";
import Layout from "../components/Layout.tsx";
import Main from "../components/Main.tsx";
import Text from "../components/Text.tsx";
import { TEXT_TYPES } from "../src/types/enums.ts";

export default function Home() {
  return (
    <div>
      <Header>
        <Text type={TEXT_TYPES.PARAGRAPH}>asdf</Text>
      </Header>
      <Main>
        <Layout>
          <Text type={TEXT_TYPES.SMALL}>asdf</Text>
          <Text type={TEXT_TYPES.PARAGRAPH}>asdf</Text>
          <Text type={TEXT_TYPES.SUBHEADING}>asdf</Text>
          <Text type={TEXT_TYPES.HEADING}>asdf</Text>
          <Text type={TEXT_TYPES.TITLE}>asdf</Text>
          <Text type={TEXT_TYPES.DISPLAY}>asdf</Text>
        </Layout>
      </Main>
    </div>
  );
}

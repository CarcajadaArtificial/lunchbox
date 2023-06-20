import Header from '../components/Header.tsx';
import Layout from '../components/Layout.tsx';
import Main from '../components/Main.tsx';
import Text from '../components/Text.tsx';
import Navigation from '../components/Navigation.tsx';
import Button from '../components/Button.tsx';
import Footer from '../components/Footer.tsx';
import Link from '../components/Link.tsx';
import { LAYOUT_TYPES, TEXT_TYPES, BUTTON_TYPES } from '../src/types/enums.ts';

export default function Home() {
  return (
    <div>
      <Navigation>
        <Text type={TEXT_TYPES.PARAGRAPH}>
          Test Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Text>
        <div class="flex justify-end">
          <Button>Button</Button>
        </div>
      </Navigation>
      <Header>
        <div>
          <Text type={TEXT_TYPES.TITLE}>Fresh Lunchbox</Text>
          <Text type={TEXT_TYPES.PARAGRAPH}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias laudantium error pariatur
            similique, iure voluptatum ea ipsam velit, accusamus quam consectetur dolores quaerat facere
            aliquam soluta? Dolorem iure hic corporis?
          </Text>
        </div>
      </Header>
      <Main>
        <Layout type={LAYOUT_TYPES.LEFT}>
          <div>
            <Text type={TEXT_TYPES.DISPLAY}>asdfghjkl</Text>
            <Text type={TEXT_TYPES.PARAGRAPH}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias laudantium error
              pariatur similique, iure voluptatum ea ipsam velit, accusamus quam consectetur dolores
              quaerat facere aliquam soluta? Dolorem iure hic corporis?
            </Text>
            <Text type={TEXT_TYPES.PARAGRAPH}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias laudantium error
              pariatur similique, iure voluptatum ea ipsam velit, accusamus quam consectetur dolores
              quaerat facere aliquam soluta? Dolorem iure hic corporis?
            </Text>
            <Text type={TEXT_TYPES.TITLE}>asdfghjkl</Text>
            <Text type={TEXT_TYPES.PARAGRAPH}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias laudantium error
              pariatur similique, iure voluptatum ea ipsam velit, accusamus quam consectetur dolores
              quaerat facere aliquam soluta? Dolorem iure hic corporis?
            </Text>
            <Text type={TEXT_TYPES.PARAGRAPH}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias laudantium error
              pariatur similique, iure voluptatum ea ipsam velit, accusamus quam consectetur dolores
              quaerat facere aliquam soluta? Dolorem iure hic corporis?
            </Text>
            <Text type={TEXT_TYPES.HEADING}>asdfghjkl</Text>
            <Text type={TEXT_TYPES.PARAGRAPH}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias laudantium error
              pariatur similique, iure voluptatum ea ipsam velit, accusamus quam consectetur dolores
              quaerat facere aliquam soluta? Dolorem iure hic corporis?
            </Text>
            <Text type={TEXT_TYPES.PARAGRAPH}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias laudantium error
              pariatur similique, iure voluptatum ea ipsam velit, accusamus quam consectetur dolores
              quaerat facere aliquam soluta? Dolorem iure hic corporis?
            </Text>
            <Text type={TEXT_TYPES.SUBHEADING}>asdfghjkl</Text>
            <Text type={TEXT_TYPES.PARAGRAPH}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias laudantium error
              pariatur similique, iure voluptatum ea ipsam velit, accusamus quam consectetur dolores
              quaerat facere aliquam soluta? Dolorem iure hic corporis?
            </Text>
            <Text type={TEXT_TYPES.PARAGRAPH}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias laudantium error
              pariatur similique, iure voluptatum ea ipsam velit, accusamus quam consectetur dolores
              quaerat facere aliquam soluta? Dolorem iure hic corporis?
            </Text>
            <Text type={TEXT_TYPES.SMALL}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias laudantium error
              pariatur similique, iure voluptatum ea ipsam velit, accusamus quam consectetur dolores
              quaerat facere aliquam soluta? Dolorem iure hic corporis?
            </Text>
          </div>
        </Layout>
      </Main>
      <Footer madeWithFresh>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur porro aut ad praesentium
          placeat itaque reiciendis, perferendis molestiae alias, impedit sed amet blanditiis illum! Saepe
          vitae perferendis nulla quisquam quibusdam.
        </p>
        <p>
          Powered by&nbsp;
          <Link href="https://github.com/CarcajadaArtificial">myself</Link>. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit.
        </p>
      </Footer>
    </div>
  );
}

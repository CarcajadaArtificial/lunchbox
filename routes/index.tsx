import Button from '../components/Button.tsx';
import Card from '../components/Card.tsx';
import Code from '../components/Code.tsx';
import Footer from '../components/Footer.tsx';
import Header from '../components/Header.tsx';
// import Input from '../components/Input.tsx';
import Layout from '../components/Layout.tsx';
import Link from '../components/Link.tsx';
import Linkmap from '../components/Linkmap.tsx';
import Main from '../components/Main.tsx';
// import Menu from '../components/Menu.tsx';
import Navigation from '../components/Navigation.tsx';
// import Page from '../components/Page.tsx';
// import Panel from '../components/Panel.tsx';
// import Select from '../components/Select.tsx';
// import Separator from '../components/Separator.tsx';
import Text from '../components/Text.tsx';
// import TextArea from '../components/TextArea.tsx';
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
      <Header layout_type={LAYOUT_TYPES.CENTER}>
        <div>
          <Text type={TEXT_TYPES.DISPLAY}>Fresh Lunchbox</Text>
        </div>
      </Header>
      <Main>
        <Layout type={LAYOUT_TYPES.CENTER}>
          <div>
            <Linkmap
              links={[
                { name: 'asdfghjkl', url: './' },
                { name: 'asdfghjkl' },
                {
                  name: 'asdfghjkl',
                  url: './',
                  children: [
                    { name: 'asdfghjkl', url: './' },
                    { name: 'asdfghjkl', url: './', children: [{ name: 'asdfghjkl', url: './' }] },
                    { name: 'asdfghjkl' },
                  ],
                },
                { name: 'asdfghjkl', url: './' },
              ]}
            />
            <Text type={TEXT_TYPES.TITLE}>asdfghjkl</Text>
            <Text type={TEXT_TYPES.PARAGRAPH}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              <Code>Molestias laudantium error pariatur similique, iure voluptatum ea ipsam velit,</Code>
              accusamus quam consectetur dolores quaerat facere aliquam soluta? Dolorem iure hic corporis?
            </Text>
            <Text type={TEXT_TYPES.HEADING}>asdfghjkl</Text>
            <Text type={TEXT_TYPES.SMALL}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias laudantium error
              pariatur similique, iure voluptatum ea ipsam velit, accusamus quam consectetur dolores
              quaerat facere aliquam soluta? Dolorem iure hic corporis?
            </Text>
            <Card>
              <Text type={TEXT_TYPES.SUBHEADING}>Example Card</Text>
              <Text type={TEXT_TYPES.PARAGRAPH}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias laudantium error
                pariatur similique, iure voluptatum ea ipsam velit, accusamus quam consectetur dolores
                quaerat facere aliquam soluta? Dolorem iure hic corporis?
              </Text>
            </Card>
          </div>
        </Layout>
      </Main>
      <Footer layout_type={LAYOUT_TYPES.CENTER} madeWithFresh>
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

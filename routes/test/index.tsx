import {
  Button,
  Card,
  Chip,
  Chiplist,
  Code,
  Footer,
  Header,
  Kbd,
  Layout,
  Loader,
  Main,
  Menu,
  Navigation,
  Separator,
  Text,
  Time,
} from '../../mod.ts';
import XDialog from '../../islands/XDialog.tsx';

export default function TestHome() {
  return (
    <>
      <Navigation fixed>
        <Layout>
          <Text>Misc tests</Text>
        </Layout>
      </Navigation>
      <Header class='mt-6' layout_type='center'>
        <Text type='title'>Misc tests</Text>
      </Header>
      <Main>
        <Layout type='left'>
          <>
            <XDialog>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                excepturi provident ad, optio ratione libero nihil eum.
                Voluptates doloremque quo minus nisi culpa odit aliquid ducimus
                quasi dolores, tempore enim.
              </Text>
            </XDialog>
            <Menu
              menuOptions={{ test: 'abc', test2: 'abc' }}
              customOption={(option, key) => (
                <Text noMargins type='paragraph'>
                  <Code>x:</Code>
                  {key}
                </Text>
              )}
            >
              Test
            </Menu>
            <div>
              <Text class='mb-3'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita, fugit nisi eaque laborum minus sequi est iste nulla
                aliquid quaerat consequatur, reprehenderit accusamus, provident
                a aspernatur cumque ut atque. Consequuntur.
              </Text>
              <Text>
                Press <Kbd>x</Kbd> to continue.
              </Text>
              <Separator />
              <Time />
              <Separator />
            </div>
            <div class='grid gap-6'>
              <Card imageUrl='https://expertphotography.b-cdn.net/wp-content/uploads/2021/10/Puppy-Cover.png'>
                <Text noMargins type='subheading'>Card title</Text>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
                <div class='mt-3'>
                  <Button>Action</Button>
                </div>
              </Card>
              <Card>
                <Text noMargins type='subheading'>Card title</Text>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
                <div class='mt-3'>
                  <Button>Action</Button>
                </div>
              </Card>
            </div>
            <div class='mt-6'>
              <Chip>Chip</Chip>
              <Chip>Chip 2</Chip>
            </div>
            <div class='mt-6'>
              <Chiplist values={['chiplist 1', 'chiplist 2', 'chiplist 3']} />
            </div>
          </>
          <>
            <Loader />
            <Separator />
            <Card imageUrl='https://expertphotography.b-cdn.net/wp-content/uploads/2021/10/Puppy-Cover.png'>
              <Text noMargins type='subheading'>Card title</Text>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Text>
              <div class='mt-3'>
                <Button>Action</Button>
              </div>
            </Card>
          </>
        </Layout>
      </Main>
      <Footer layout_type='center' madeWithFresh>
      </Footer>
    </>
  );
}

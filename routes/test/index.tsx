import {
  Button,
  Card,
  Code,
  Footer,
  Header,
  Layout,
  Main,
  Separator,
  Text,
} from '../../mod.ts';

export default function TestHome() {
  return (
    <>
      <Header layout_type='center'>
        <Text type='title'>Misc tests</Text>
      </Header>
      <Main>
        <Layout type='center'>
          <div class='grid'>
            <Code>Test code</Code>
            <Separator />
          </div>
        </Layout>
        <Layout type='left'>
          <Card imageUrl='https://expertphotography.b-cdn.net/wp-content/uploads/2021/10/Puppy-Cover.png'>
            <Text noMargins type='subheading'>Card title</Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Text>
            <div class='mt-3'>
              <Button>Action</Button>
            </div>
          </Card>
          <Card imageUrl='https://expertphotography.b-cdn.net/wp-content/uploads/2021/10/Puppy-Cover.png'>
            <Text noMargins type='subheading'>Card title</Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Text>
            <div class='mt-3'>
              <Button>Action</Button>
            </div>
          </Card>
        </Layout>
      </Main>
      <Footer layout_type='center' madeWithFresh>
      </Footer>
    </>
  );
}

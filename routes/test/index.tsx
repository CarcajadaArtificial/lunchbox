import {
  Button,
  Card,
  Chip,
  Chiplist,
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
          <div>
            <Card imageUrl='https://expertphotography.b-cdn.net/wp-content/uploads/2021/10/Puppy-Cover.png'>
              <Text noMargins type='subheading'>Card title</Text>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Text>
              <div class='mt-3'>
                <Button>Action</Button>
              </div>
            </Card>
            <div class='mt-6'>
              <Chip>Chip</Chip>
              <Chip>Chip 2</Chip>
            </div>
            <div class='mt-6'>
              <Chiplist values={['chiplist 1', 'chiplist 2', 'chiplist 3']} />
            </div>
          </div>
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

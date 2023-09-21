import { Code, Footer, Header, Main, Separator, Text } from '../../mod.ts';

export default function TestHome() {
  return (
    <>
      <Header layout_type='center'>
        <Text type='title'>Misc tests</Text>
      </Header>
      <Main layout_type='center'>
        <div class='grid'>
          <Code>Test code</Code>
          <Separator />
        </div>
      </Main>
      <Footer layout_type='center' madeWithFresh>
      </Footer>
    </>
  );
}

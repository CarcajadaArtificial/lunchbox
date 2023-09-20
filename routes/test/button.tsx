import { Button, Header, Main, Text } from '../../mod.ts';

export default function TestButton() {
  return (
    <>
      <Header layout_type='left'>
        <Text type='title'>Button tests</Text>
      </Header>
      <Main layout_type='thirds'>
        <div class='grid'>
          <Text type='subheading'>Types</Text>
          <Button>default</Button>
          <Button type='contrast'>contrast</Button>
          <Button type='invisible'>invisible</Button>
          <Button type='panel'>panel</Button>
          <Button type='error'>error</Button>
          <Button type='disabled'>disabled</Button>
        </div>
        <div class='grid'>
          <Text type='subheading'>Types</Text>
          <Button>
            kbd <kbd>key</kbd>
          </Button>
          <Button>
            icon <i>i</i>
          </Button>
          <Button>
            <Text noMargins type='small'>small</Text>
          </Button>
          <Button>
            <Text noMargins type='subheading'>large</Text>
          </Button>
        </div>
      </Main>
    </>
  );
}

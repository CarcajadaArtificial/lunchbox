import {
  Button,
  Code,
  Header,
  Kbd,
  Link,
  Linkmap,
  Main,
  Panel,
  Separator,
  Text,
} from '../../mod.ts';
import IconEdit from 'icons/edit.tsx';

export default function TestButton() {
  return (
    <>
      <Header layout_type='left'>
        <Text type='title'>Button tests</Text>
      </Header>
      <Main layout_type='thirds'>
        <div>
          <Text type='subheading'>Types</Text>
          <div class='flex'>
            <div class='flex-1 grid gap-3 p-3'>
              <Button>default</Button>
              <Button type='contrast'>contrast</Button>
              <Button type='panel'>panel</Button>
              <Button type='invisible'>invisible</Button>
              <Button type='error'>error</Button>
              <Button type='disabled'>disabled</Button>
            </div>
            <Panel class='flex-1 grid gap-3 p-3'>
              <Button>default</Button>
              <Button type='contrast'>contrast</Button>
              <Button type='panel'>panel</Button>
              <Button type='invisible'>invisible</Button>
              <Button type='error'>error</Button>
              <Button type='disabled'>disabled</Button>
            </Panel>
          </div>
        </div>
        <div class='grid gap-3'>
          <Text type='subheading'>Content</Text>
          <Button>
            Press <Kbd>k</Kbd> to continue
          </Button>
          <Button>
            Continue and run <Code>npm init</Code>
          </Button>
          <Button>
            Edit <IconEdit />
          </Button>
          <Button>
            <Text noMargins type='small'>small</Text>
          </Button>
          <Button>
            <Text noMargins type='subheading'>large</Text>
          </Button>
        </div>
        <div class='grid'>
          <Text type='subheading'>Links</Text>
          <Link>test link</Link>
          <Separator />
          <Linkmap
            links={[{ name: 'empty link' }, {
              name: 'normal link',
              url: '/test/button',
            }, {
              name: 'group',
              children: [{ name: 'empty link' }, {
                name: 'normal link',
                url: '/test/button',
              }],
            }]}
          />
        </div>
      </Main>
    </>
  );
}

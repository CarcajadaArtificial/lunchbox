import { Card, Header, Linkmap, Main, Text } from '../../components.ts';

export default function Home() {
  return (
    <>
      <Header layout_type='full'>
        <span></span>
        <Text type='title'>Lunchbox 🍱 test site</Text>
      </Header>
      <Main layout_type='thirds'>
        <Card>
          <Text type='subheading' noMargins>Atoms</Text>
          <Linkmap
            links={[
              { name: 'Button', url: '/button' },
              { name: 'Code' },
              { name: 'Kbd', url: '/kbd' },
              { name: 'Layout', url: '/layout' },
              { name: 'Link' },
              { name: 'Markdown', url: '/markdown' },
              { name: 'Panel', url: '/panel' },
              { name: 'Separator' },
              { name: 'Text', url: '/text' },
            ]}
          />
        </Card>
        <Card>
          <Text type='subheading' noMargins>Molecules</Text>
          <Linkmap
            links={[
              { name: 'Card', url: '/card' },
              { name: 'Chip', url: '/chip' },
              { name: 'Fieldset', url: '/fieldset' },
              { name: 'Footer', url: '/footer' },
              { name: 'Header', url: '/header' },
              { name: 'Input', url: '/input' },
              { name: 'Linkmap', url: '/linkmap' },
              { name: 'Main', url: '/main' },
              { name: 'Navigation', url: '/navigation' },
              { name: 'Select', url: '/select' },
              { name: 'TextArea', url: '/textarea' },
            ]}
          />
        </Card>
        <Card>
          <Text type='subheading' noMargins>Organisms</Text>
          <Linkmap
            links={[]}
          />
        </Card>
      </Main>
    </>
  );
}

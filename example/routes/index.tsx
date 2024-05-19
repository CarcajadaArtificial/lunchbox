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
              { name: 'Button', url: '/Button' },
              { name: 'Code', url: '/Code' },
              { name: 'Kbd', url: '/Kbd' },
              { name: 'Layout', url: '/Layout' },
              { name: 'Link', url: '/Link' },
              { name: 'Markdown', url: '/Markdown' },
              { name: 'Panel', url: '/Panel' },
              { name: 'Separator', url: '/Separator' },
              { name: 'Text', url: '/Text' },
            ]}
          />
        </Card>
        <Card>
          <Text type='subheading' noMargins>Molecules</Text>
          <Linkmap
            links={[
              { name: 'Card', url: '/Card' },
              { name: 'Chip', url: '/Chip' },
              { name: 'Fieldset', url: '/Fieldset' },
              { name: 'Footer', url: '/Footer' },
              { name: 'Header', url: '/Header' },
              { name: 'Input', url: '/Input' },
              { name: 'Linkmap', url: '/Linkmap' },
              { name: 'Main', url: '/Main' },
              { name: 'Navigation', url: '/Navigation' },
              { name: 'Select', url: '/Select' },
              { name: 'TextArea', url: '/TextArea' },
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

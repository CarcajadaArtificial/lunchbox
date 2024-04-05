import { Chip, Header, Main, Text } from '../../mod.ts';
import XIcon from 'icons/x.tsx';

export default function TestText() {
  return (
    <>
      <Header layout_type='center'>
        <Text type='title'>Chip tests</Text>
      </Header>
      <Main layout_type='center'>
        <Chip icon={<XIcon size={12} />} />
        <Chip
          icon={<XIcon size={12} />}
          onRemove={() => console.log('x')}
        />
        <Chip
          icon={<XIcon size={12} />}
          onRemove={() => console.log('x')}
          content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum ut accusamus tempore, dignissimos quaerat voluptatem odio necessitatibus reiciendis deleniti corporis non numquam vero eum autem nam sapiente. Deserunt, eius molestias?'
        />
      </Main>
    </>
  );
}

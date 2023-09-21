import { Header, Main, Separator, Text } from '../../mod.ts';

export default function TestText() {
  return (
    <>
      <Header layout_type='center'>
        <Text type='title'>Text tests</Text>
      </Header>
      <Main layout_type='center'>
        <div>
          <Text type='title'>Title</Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In expedita
            autem optio quidem!
          </Text>
          <Text type='heading'>Heading</Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In expedita
            autem optio quidem!
          </Text>
          <Text type='subheading'>Subheading</Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In expedita
            autem optio quidem!
          </Text>
          <Text type='small'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In expedita
            autem optio quidem!
          </Text>
          <Separator />
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In expedita
            autem optio quidem!
          </Text>
        </div>
      </Main>
    </>
  );
}

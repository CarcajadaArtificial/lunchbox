import { Card, Header, Main, Text } from '../../mod.ts';
import { defineRoute } from '$fresh/server.ts';

export default defineRoute((_req, _ctx) => {
  return (
    <>
      <Header layout_type='left'>
        <Text type='title'>Card tests</Text>
      </Header>
      <Main layout_type='left'>
        <div class='grid gap-6'>
          <Card>
            <Text type='heading'>This is a card</Text>
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequatur aut numquam provident nam sequi laborum dignissimos
              quis aperiam voluptates delectus nesciunt neque totam, assumenda
              cupiditate consequuntur a suscipit et dolores?
            </Text>
          </Card>
          <Card imageUrl='https://upload.wikimedia.org/wikipedia/commons/6/62/Lotus_free.jpg'>
            <Text type='heading'>This is a card with an image</Text>
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequatur aut numquam provident nam sequi laborum dignissimos
              quis aperiam voluptates delectus nesciunt neque totam, assumenda
              cupiditate consequuntur a suscipit et dolores?
            </Text>
          </Card>
        </div>
        <div class='grid gap-6'>
          <Card imageUrl='https://upload.wikimedia.org/wikipedia/commons/6/62/Lotus_free.jpg'>
            <Text type='heading'>This is a card with an image</Text>
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequatur aut numquam provident nam sequi laborum dignissimos
              quis aperiam voluptates delectus nesciunt neque totam, assumenda
              cupiditate consequuntur a suscipit et dolores?
            </Text>
          </Card>
          <Card>
            <Text type='heading'>This is a card</Text>
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequatur aut numquam provident nam sequi laborum dignissimos
              quis aperiam voluptates delectus nesciunt neque totam, assumenda
              cupiditate consequuntur a suscipit et dolores?
            </Text>
          </Card>
        </div>
      </Main>
    </>
  );
});

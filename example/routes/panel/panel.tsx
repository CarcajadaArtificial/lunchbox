// import {
//   Button,
//   Card,
//   Code,
//   Header,
//   Layout,
//   Main,
//   Separator,
//   Text,
// } from '../../mod.ts';
// import { defineRoute } from '$fresh/server.ts';

// const SampleCard = (props: Partial<{ img: boolean }>) => (
//   <Card
//     imageUrl={props.img
//       ? 'https://upload.wikimedia.org/wikipedia/commons/6/62/Lotus_free.jpg'
//       : undefined}
//   >
//     <Text type='subheading' noMargins>This is a card</Text>
//     <Text>
//       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur aut
//       numquam provident nam sequi laborum dignissimos quis aperiam voluptates
//       delectus nesciunt neque totam, assumenda cupiditate consequuntur a
//       suscipit et dolores?
//     </Text>
//   </Card>
// );

export default function () {
  return (
    <>
      {
        /* <Header banner layout_type='halves'>
        <div>
          <Text type='title'>Panel tests</Text>
          <Text type='subheading'>
            This is a banner header, scroll down to see the rest of the page
          </Text>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequatur aut numquam provident nam sequi laborum dignissimos quis
            aperiam voluptates delectus nesciunt neque totam, assumenda
            cupiditate consequuntur a suscipit et dolores?
          </Text>
        </div>
      </Header>
      <Main class='grid gap-y-8'>
        <Layout type='left'>
          <div class='grid gap-6'>
            <Text type='heading'>Card Tests</Text>
            <SampleCard />
            <SampleCard img />
          </div>
          <div class='grid gap-6'>
            <SampleCard />
            <SampleCard img />
          </div>
        </Layout>
        <Separator />
        <Layout type='left'>
          <div class='grid gap-6'>
            <Text type='heading'>
              Button type <Code>panel</Code> and <Code>transparent</Code>
            </Text>
            <div class='pl-2'>
              <Button type='panel'>Panel Button</Button>
              <Button type='transparent'>Transparent Button</Button>
            </div>
            <Card>
              <Button type='panel'>Panel Button</Button>
              <Button type='transparent'>Transparent Button</Button>
            </Card>
          </div>
        </Layout>
      </Main> */
      }
    </>
  );
}

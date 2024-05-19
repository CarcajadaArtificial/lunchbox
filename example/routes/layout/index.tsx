// import {
//   Card,
//   Code,
//   Header,
//   Layout,
//   Main,
//   Separator,
//   Text,
// } from '../../mod.ts';
// import { iLayout } from '../../src/components/atoms/Layout/setup.ts';

// const sampleItems = () =>
//   ['Three', 'Sad', 'Tigers', 'Ate', 'Wheat'].map((content) => (
//     <Card>
//       <Text>{content}</Text>
//     </Card>
//   ));

// const SampleLayout = (props: Partial<iLayout>) => (
//   <div class='mb-12'>
//     <Layout type={props.type}>
//       <Text type='heading'>
//         Layout type<Code>'{props.type}'</Code>
//       </Text>
//     </Layout>
//     <Layout {...props} class='gap-y-4'>
//       {...sampleItems()}
//     </Layout>
//   </div>
// );

export default function TestText() {
  return (
    <>
      {
        /* <Header layout_type='center'>
        <Text type='title'>Layout tests</Text>
      </Header>
      <Main>
        <SampleLayout type='full' />
        <SampleLayout type='center' />
        <SampleLayout type='focus' />
        <SampleLayout type='halves' />
        <SampleLayout type='thirds' />
        <SampleLayout type='left' />
        <SampleLayout type='right' />
        <Header layout_type='center' class='mb-12'>
          <Text type='title'>
            Layout tests<Code>whitespaceMode</Code>
          </Text>
        </Header>
        <SampleLayout whitespaceMode type='full' />
        <SampleLayout whitespaceMode type='center' />
        <SampleLayout whitespaceMode type='focus' />
        <SampleLayout whitespaceMode type='halves' />
        <SampleLayout whitespaceMode type='thirds' />
        <SampleLayout whitespaceMode type='left' />
        <SampleLayout whitespaceMode type='right' />
      </Main> */
      }
    </>
  );
}

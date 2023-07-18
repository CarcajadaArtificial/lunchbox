import {
  Button,
  Card,
  Code,
  Footer,
  Header,
  Input,
  Link,
  Linkmap,
  Main,
  Navigation,
  Select,
  Separator,
  Text,
  TextArea,
  TEXT_TYPES,
} from '../mod.ts';

export default function Home() {
  const TestTinyText = (type: TEXT_TYPES) => (
    <Text type={type}>
      Lorem <Code>ipsum</Code> dolor
    </Text>
  );

  const TestSmallText = (type: TEXT_TYPES) => (
    <Text type={type}>
      Lorem ipsum <Code>dolor sit amet</Code> consectetur adipisicing elit.
    </Text>
  );

  const TestLargeText = (type: TEXT_TYPES) => (
    <Text type={type}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit saepe consectetur eaque
      ipsa laborum similique totam aspernatur cupiditate iusto nobis esse facere consequatur quia at
      quisquam, natus alias molestiae accusantium!
      <Code>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Code>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit saepe consectetur eaque
      ipsa laborum similique totam aspernatur cupiditate iusto nobis esse facere consequatur quia at
      quisquam, natus alias molestiae accusantium!
    </Text>
  );

  const TestLinkmap = () => (
    <Linkmap
      links={[
        { name: 'asdfghjkl', url: './' },
        { name: 'asdfghjkl' },
        {
          name: 'asdfghjkl',
          url: './',
          children: [
            { name: 'asdfghjkl', url: './' },
            { name: 'asdfghjkl', url: './', children: [{ name: 'asdfghjkl', url: './' }] },
            { name: 'asdfghjkl' },
          ],
        },
        { name: 'asdfghjkl', url: './' },
      ]}
    />
  );

  const TestInputs = () => (
    <>
      <Text>Input</Text>
      <Input
        type="text"
        placeholder="test"
        label="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        // error="Deserunt excepturi fugiat sapiente.
        //     Sed quod eos nihil, itaque aliquid numquam placeat quia laudantium recusandae."
        required
      />
      <Input type="text" value="disabled" disabled />
      <Separator />
      <Input type="datetime-local" label="Lorem ipsum" required />
      <Input type="date" label="Lorem ipsum" required />
      <Input type="month" label="Lorem ipsum" required />
      <Input type="week" label="Lorem ipsum" required />
      <Input type="time" label="Lorem ipsum" required />
      <Separator />
      <Text>Input Buttons</Text>
      <Input type="button" value="Lorem ipsum" label="Lorem ipsum" error="error" />
      <Input type="button" value="disabled" disabled />
      <Input type="image" value="Lorem ipsum" />
      <Separator />
      <Text>TextArea</Text>
      <TextArea label="Lorem ipsum" error="lorem ipsum"></TextArea>
      <Separator />
      <Text>Select</Text>
      <Select
        options={['Value 1', 'Value 2', 'Value 3']}
        placeholder="placeholder"
        label="Lorem ipsum"
      />
      <Separator />
      <Text>Buttons</Text>
      <Button>Contrast</Button>
      <Button type={'invisible'}>Invisible</Button>
      <Button type={'panel'}>Panel</Button>
      <Button type={'disabled'}>Disabled</Button>
      <Button type={'error'}>Error</Button>
    </>
  );

  return (
    <div>
      <Navigation>
        {TestTinyText('paragraph')}
        <div class="flex justify-end">
          <Button type={'panel'}>Button</Button>
        </div>
      </Navigation>
      <Header gradient_pattern="cloud" layout_type="left">
        {TestTinyText('title')}
        <div></div>
        {TestLargeText('paragraph')}
        <TestLinkmap />
      </Header>
      <Main layout_type="center">
        <>
          {TestTinyText('paragraph')}
          <Separator />
          {TestTinyText('subheading')}
          <Separator />
          {TestTinyText('heading')}
          <Separator />
          {TestTinyText('title')}
          <Separator />
          {TestTinyText('display')}
          <Card
            card_title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            bottom_gradient_pattern="cloud"
          >
            {TestLargeText('paragraph')}
          </Card>
          {TestInputs()}
        </>
      </Main>
      <Footer gradient_pattern="cloud" layout_type="left" madeWithFresh>
        {TestTinyText('subheading')}
        <Text>
          Powered by&nbsp;
          <Link href="https://github.com/CarcajadaArtificial">myself</Link>.
        </Text>
        {TestLargeText('paragraph')}
      </Footer>
    </div>
  );
}

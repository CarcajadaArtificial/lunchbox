import {
  Button,
  Card,
  Code,
  Footer,
  Header,
  Input,
  Layout,
  Link,
  Linkmap,
  Main,
  Navigation,
  Select,
  Separator,
  Text,
  TextArea,
  BUTTON_TYPES,
  LAYOUT_TYPES,
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
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit saepe consectetur eaque ipsa
      laborum similique totam aspernatur cupiditate iusto nobis esse facere consequatur quia at quisquam,
      natus alias molestiae accusantium!
      <Code>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Code>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit saepe consectetur eaque ipsa
      laborum similique totam aspernatur cupiditate iusto nobis esse facere consequatur quia at quisquam,
      natus alias molestiae accusantium!
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
      <Select options={['Value 1', 'Value 2', 'Value 3']} placeholder="placeholder" label="Lorem ipsum" />
      <Separator />
      <Text>Buttons</Text>
      <Button>Contrast</Button>
      <Button type={BUTTON_TYPES.INVISIBLE}>Invisible</Button>
      <Button type={BUTTON_TYPES.PANEL}>Panel</Button>
      <Button type={BUTTON_TYPES.DISABLED}>Disabled</Button>
      <Button type={BUTTON_TYPES.ERROR}>Error</Button>
    </>
  );

  return (
    <div>
      <Navigation>
        {TestTinyText(TEXT_TYPES.PARAGRAPH)}
        <div class="flex justify-end">
          <Button type={BUTTON_TYPES.PANEL}>Button</Button>
        </div>
      </Navigation>
      <Header layout_type={LAYOUT_TYPES.LEFT}>
        {TestTinyText(TEXT_TYPES.TITLE)}
        <div></div>
        {TestLargeText(TEXT_TYPES.PARAGRAPH)}
        <TestLinkmap />
      </Header>
      <Main layout_type={LAYOUT_TYPES.CENTER}>
        <>
          {TestTinyText(TEXT_TYPES.PARAGRAPH)}
          <Separator />
          {TestTinyText(TEXT_TYPES.SUBHEADING)}
          <Separator />
          {TestTinyText(TEXT_TYPES.HEADING)}
          <Separator />
          {TestTinyText(TEXT_TYPES.TITLE)}
          <Separator />
          {TestTinyText(TEXT_TYPES.DISPLAY)}
          <Card>
            {TestSmallText(TEXT_TYPES.SUBHEADING)}
            {TestLargeText(TEXT_TYPES.PARAGRAPH)}
          </Card>
          {TestInputs()}
        </>
      </Main>
      <Footer layout_type={LAYOUT_TYPES.LEFT} madeWithFresh>
        {TestTinyText(TEXT_TYPES.SUBHEADING)}
        <Text>
          Powered by&nbsp;
          <Link href="https://github.com/CarcajadaArtificial">myself</Link>.
        </Text>
        {TestLargeText(TEXT_TYPES.PARAGRAPH)}
      </Footer>
    </div>
  );
}

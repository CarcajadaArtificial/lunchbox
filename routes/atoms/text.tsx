import {
  Footer,
  Header,
  Layout,
  Link,
  Navigation,
  Page,
  Text,
} from "../../mod.ts";

export default function text() {
  return (
    <Page>
      <Navigation
        logo={<Text inheritColor>Ana Components</Text>}
        title="Text"
        links={[{
          label: "Input",
          href: "/atoms/input",
        }, {
          label: "Text",
          href: "/atoms/text",
        }]}
      />
      <Header>
        <Text type="title">Text</Text>
        <Text type="paragraph">
          Text description
        </Text>
      </Header>
      <Layout type="right">
        <Text>Small</Text>
        <Text type="small">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et enim
          quis dolor scelerisque convallis non vitae odio. Ut in fringilla
          neque, a euismod ante. Vivamus facilisis lacinia dolor, ut viverra
          eros lacinia eu. Maecenas at suscipit ipsum. Donec in sapien est.
          Donec mauris sapien, dignissim id ultricies et, viverra ut ligula.
        </Text>
        <Text>Label</Text>
        <Text type="label">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Text>Paragraph</Text>
        <Text type="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et enim
          quis dolor scelerisque convallis non vitae odio. Ut in fringilla
          neque, a euismod ante. Vivamus facilisis lacinia dolor, ut viverra
          eros lacinia eu. Maecenas at suscipit ipsum. Donec in sapien est.
          Donec mauris sapien, dignissim id ultricies et, viverra ut ligula.
        </Text>
        <Text>Subheading</Text>
        <Text type="subheading">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Text>Heading</Text>
        <Text type="heading">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Text>Subtitle</Text>
        <Text type="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Text>Title</Text>
        <Text type="title">
          Lorem ipsum dolor sit amet.
        </Text>
        <Text>Display</Text>
        <Text type="display">
          Lorem ipsum.
        </Text>
      </Layout>
      <Footer>
        <Text>
          Created by
        </Text>
        <Link href="https://github.com/CarcajadaArtificial">
          Oscar Alfonso Guerrero
        </Link>
      </Footer>
    </Page>
  );
}

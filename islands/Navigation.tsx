import { iNavigation } from "../src/types/props.ts";
import setup from "../src/setup/Navigation.ts";
import Layout from "../components/Layout.tsx";

export default function (props: Partial<iNavigation>) {
  const { c, logo, title } = setup(props);

  console.log(logo);

  return (
    <div class={c.wrapper}>
      <nav class={c.nav}>
        <Layout type="quarters">
          <a href="">{logo}</a>
          {title}
        </Layout>
      </nav>
    </div>
  );
}

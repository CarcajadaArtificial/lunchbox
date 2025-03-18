import { Footer, Header, Main } from "lunchbox/atoms/Page.tsx";
import { H0 } from "lunchbox/atoms/Heading.tsx";
import Link from "lunchbox/atoms/Link.tsx";
import pkgJson from "../../deno.json" with { type: "json" };
import { define } from "../utils.ts";

export default define.page(function Home() {
  return (
    <>
      <Header>
        <div class="col-span-full">
          <H0 class="text-center">🍱 Lunchbox</H0>
        </div>
      </Header>
      <Main>
      </Main>
      <Footer>
        <div class="col-span-4">
          @<Link href="https://github.com/CarcajadaArtificial/lunchbox">
            lunchbox
          </Link>/ui@<Link
            href={`https://jsr.io/@lunchbox/ui@${pkgJson.version}`}
          >
            {pkgJson.version}
          </Link>
        </div>
      </Footer>
    </>
  );
});

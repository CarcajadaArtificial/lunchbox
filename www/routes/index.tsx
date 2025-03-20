import { cn } from "@vyn/cn";
import { Footer, Header, Main } from "lunchbox/atoms/Page.tsx";
import { H0, H1, H2 } from "lunchbox/atoms/Heading.tsx";
import Link from "lunchbox/atoms/Link.tsx";
import Markdown from "lunchbox/molecules/Markdown.tsx";
import pkgJson from "../../deno.json" with { type: "json" };
import { define } from "../utils.ts";
import {
  atomDocs,
  atomGroupColors,
  moleculeDocs,
  particleDocs,
  particles,
  periodicTable,
} from "../data/atomic_system.ts";

const Particle = (props: { symbol: string; name: string; color: string }) => (
  <div class="particle-growth">
    <a
      class={cn(
        "particle",
        props.color,
        "pt-1/2 w-24 h-24 rounded-full",
        "flex flex-col items-center",
        "cursor-pointer",
      )}
      href={`https://jsr.io/@lunchbox/ui/doc/particles/~/${props.name}`}
    >
      <div class="text-4xl mt-1/8">{props.symbol}</div>
      <div>{props.name}</div>
    </a>
  </div>
);

function PeriodicTable() {
  return (
    <div class="grid grid-cols-12 gap-1/8 mt-2/1">
      {periodicTable.map((row) => (
        row.map((atom) =>
          // deno-lint-ignore jsx-key
          atom.group === "" ? <div class="aspect-square" /> : (
            <a
              href={`https://jsr.io/@lunchbox/ui/doc/atoms/~/${atom.name}`}
              class={cn(
                atomGroupColors[atom.group],
                "aspect-square rounded",
                "cursor-pointer",
                "flex flex-col justify-center items-center",
                "atom",
              )}
            >
              <span>{atom.symbol}</span>
              {atom.name.split(".").map((name) => (
                <code class="atom-name">{name}</code>
              ))}
            </a>
          )
        )
      ))}
    </div>
  );
}

export default define.page(function Home() {
  return (
    <>
      <Header>
        <div class="col-span-full">
          <H0 class="text-center">🍱 Lunchbox</H0>
        </div>
      </Header>
      <Main>
        <div class="col-span-2" />
        <div class="col-span-8">
          <H1>UI Kit</H1>
          <H2 class="mt-1/1">Particles</H2>
          <Markdown content={particleDocs} />
          <div class="flex justify-between mt-3/1 gap-1/4">
            {particles.slice(0, 4).map(Particle)}
          </div>
          <div class="flex justify-around mx-12 gap-1/4 -mt-1/2">
            {particles.slice(4).map(Particle)}
          </div>
          <H2 class="mt-1/1">Atoms</H2>
          <Markdown content={atomDocs} />
          <PeriodicTable />
          <H2 class="mt-1/1">Molecules</H2>
          <Markdown content={moleculeDocs} />
        </div>
        <div class="col-span-2" />
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

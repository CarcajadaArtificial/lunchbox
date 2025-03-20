import { cn } from "@vyn/cn";
import { periodt } from "@carcajada/periodt";
import { Footer, Header, Main } from "lunchbox/atoms/Page.tsx";
import { H0, H1, H2 } from "lunchbox/atoms/Heading.tsx";
import Link from "lunchbox/atoms/Link.tsx";
import clr from "lunchbox/particles/clr.ts";
import Markdown from "lunchbox/molecules/Markdown.tsx";
import pkgJson from "../../deno.json" with { type: "json" };
import docJson from "../data/doc.json" with { type: "json" };
import { define } from "../utils.ts";

const particles = [
  { symbol: "α", name: "area" },
  { symbol: "β", name: "btn" },
  { symbol: "γ", name: "clr" },
  { symbol: "δ", name: "focus" },
  { symbol: "ε", name: "input" },
  { symbol: "ζ", name: "layout" },
  { symbol: "ψ", name: "text" },
];

const atoms = [
  { symbol: "As", name: "Aside.Sticky", group: "A" },
  { symbol: "X", name: "KatexStyles", group: "X" },
  { symbol: "K", name: "Kbd", group: "K" },
  { symbol: "L", name: "Link", group: "L" },
  { symbol: "Ns", name: "Nav.Sticky", group: "N" },
  { symbol: "P", name: "Prose", group: "R" },
  { symbol: "S", name: "Separator", group: "S" },

  { symbol: "Cc", name: "Code.Content", group: "C" },
  { symbol: "Ci", name: "Code.Inline", group: "C" },

  { symbol: "Dt", name: "Details.Container", group: "D" },
  { symbol: "Ds", name: "Details.Sumary", group: "D" },

  { symbol: "Ul", name: "List.UL", group: "T" },
  { symbol: "Ol", name: "List.OL", group: "T" },

  { symbol: "B", name: "Body", group: "P" },
  { symbol: "M", name: "Main", group: "P" },
  { symbol: "H", name: "Header", group: "P" },
  { symbol: "F", name: "Footer", group: "P" },

  { symbol: "Bb", name: "Button.Brand", group: "B" },
  { symbol: "Bp", name: "Button.Panel", group: "B" },
  { symbol: "Bg", name: "Button.Page", group: "B" },
  { symbol: "Be", name: "Button.Error", group: "B" },

  { symbol: "H0", name: "H0", group: "H" },
  { symbol: "H1", name: "H1", group: "H" },
  { symbol: "H2", name: "H2", group: "H" },
  { symbol: "H3", name: "H3", group: "H" },

  { symbol: "Ib", name: "Input.Submit", group: "I" },
  { symbol: "Ic", name: "Input.Container", group: "I" },
  { symbol: "Ie", name: "Input.Error", group: "I" },
  { symbol: "If", name: "Input.Fieldset", group: "I" },
  { symbol: "Ig", name: "Input.Legend", group: "I" },
  { symbol: "Ii", name: "Input.Field", group: "I" },
  { symbol: "Ik", name: "Input.Check", group: "I" },
  { symbol: "Il", name: "Input.Label", group: "I" },
  { symbol: "Ir", name: "Input.Radio", group: "I" },
  { symbol: "Is", name: "Input.Select", group: "I" },
  { symbol: "It", name: "Input.Textarea", group: "I" },
  { symbol: "Ix", name: "Input.Text", group: "I" },
];

const atomGroupColors: Record<string, string> = {
  "A": clr.panel.bg,
  "X": clr.panel.bg,
  "K": clr.panel.bg,
  "L": clr.panel.bg,
  "N": clr.panel.bg,
  "R": clr.panel.bg,
  "S": clr.panel.bg,
  "C": clr.brand.bg_30,
  "D": clr.neutral.bg_10,
  "T": clr.panel.bg_35,
  "P": clr.error.bg_50,
  "B": clr.brand.bg_60,
  "H": clr.neutral.bg_25,
  "I": clr.panel.bg_50,
};

const periodicTable = periodt<{ symbol: string; name: string; group: string }>(
  atoms,
  (atom) => atom.group,
  () => ({ symbol: "", name: "", group: "" }),
);

const Particle = (props: { symbol: string; name: string }) => (
  <a
    class={cn(
      "particle",
      clr.panel.bg,
      "pt-1/2 w-24 h-24 rounded-full",
      "flex flex-col items-center",
      "cursor-pointer",
    )}
    href={`https://jsr.io/@lunchbox/ui/doc/particles/~/${props.name}`}
  >
    <div class="text-4xl mt-1/8">{props.symbol}</div>
    <div>{props.name}</div>
  </a>
);

function PeriodicTable() {
  return (
    <div class="grid grid-cols-12 gap-1/8">
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
  const moduleDocs = docJson.nodes.filter((node) => node.kind === "moduleDoc");
  const particleDocs = moduleDocs.find((doc) =>
    doc.location.filename.includes("particles.ts")
  )?.jsDoc?.doc;
  const atomDocs = moduleDocs.find((doc) =>
    doc.location.filename.includes("atoms.ts")
  )?.jsDoc?.doc;
  const moleculeDocs = moduleDocs.find((doc) =>
    doc.location.filename.includes("molecules.ts")
  )?.jsDoc?.doc;

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

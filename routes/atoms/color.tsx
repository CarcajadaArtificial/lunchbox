import { Footer, Header, Layout, Link, Page, Text } from "../../mod.ts";
import { graysDisplay, palette, paletteDisplay } from "../../src/const.ts";

export default function () {
  for (const color in palette) {
    // console.log(`${color}: ${JSON.stringify(palette[color])},`);
    const r = palette[color].r / 255,
      g = palette[color].r / 255,
      b = palette[color].r / 255;

    // console.log(color, r, g, b);

    const l = Math.max(r, g, b);
    const s = l - Math.min(r, g, b);
    const h = s
      ? l === r ? (g - b) / s : l === g ? 2 + (b - r) / s : 4 + (r - g) / s
      : 0;
    // console.log([
    //   60 * h < 0 ? 60 * h + 360 : 60 * h,
    //   100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0),
    //   (100 * (2 * l - s)) / 2,
    // ]);
  }
  return (
    <Page>
      <Header>
        <Text type="title">Color</Text>
        <Text type="paragraph">
          Color description
        </Text>
      </Header>
      <Layout type="right">
        <Text>Color palette</Text>
        <div class="grid grid-cols-7 grid-rows-8">
          {paletteDisplay.map((color) => (
            <div
              class={`aspect-square bg-${color}`}
              title={color === "blanco" ? "" : color}
            >
            </div>
          ))}
        </div>
        <Text>Grays</Text>
        <div class="grid grid-cols-7">
          {graysDisplay.map((color) => (
            <div
              class={`aspect-square bg-${color}`}
              title={color}
            >
            </div>
          ))}
        </div>
        <Text>Themes</Text>
        <div class="flex flex-col">
          <Text type="heading">theme-name</Text>
          <div className="grid grid-cols-5 mb-4">
            <Text type="label">arena</Text>
            <Text type="label">tortilla</Text>
            <Text type="label">magia</Text>
            <Text type="label">uva</Text>
            <Text type="label">marino</Text>
            <div class={"aspect-square bg-arena"}></div>
            <div class={"aspect-square bg-tortilla"}></div>
            <div class={"aspect-square bg-magia"}></div>
            <div class={"aspect-square bg-uva"}></div>
            <div class={"aspect-square bg-marino"}></div>
          </div>
          <Text type="subheading">Example</Text>
          <div class="bg-arena p-3 grid gap-2">
            <span class="py-2 px-4 text-marino">
              marino on arena, 17.34:1
            </span>
            <span class="py-2 px-4 text-uva">
              uva on arena, 11.68:1
            </span>
            <span class="bg-marino text-tortilla rounded py-2 px-4">
              tortilla on marino, 10.42:1
            </span>
            <span class="bg-marino text-magia rounded py-2 px-4">
              magia on marino, 5.94:1
            </span>
            <span class="bg-uva text-arena rounded py-2 px-4">
              arena on uva, 11.68:1
            </span>
          </div>
          <div class="bg-marino p-3 grid gap-2">
            <span class="py-2 px-4 text-arena">
              arena on marino, 17.34:1
            </span>
            <span class="py-2 px-4 text-tortilla">
              tortilla on marino, 10.42:1
            </span>
            <span class="bg-arena text-marino rounded py-2 px-4">
              marino on arena, 17.34:1
            </span>
            <span class="bg-arena text-uva rounded py-2 px-4">
              uva on arena, 11.68:1
            </span>
            <span class="bg-magia text-marino rounded py-2 px-4">
              marino on magia, 5.94:1
            </span>
          </div>
          <Text type="heading">theme-name</Text>
          <div className="grid grid-cols-5 mb-4">
            <Text type="label">papel</Text>
            <Text type="label">plata</Text>
            <Text type="label">cedro</Text>
            <Text type="label">jade</Text>
            <Text type="label">obsidiana</Text>
            <div class={"aspect-square bg-papel"}></div>
            <div class={"aspect-square bg-plata"}></div>
            <div class={"aspect-square bg-cedro"}></div>
            <div class={"aspect-square bg-jade"}></div>
            <div class={"aspect-square bg-obsidiana"}></div>
          </div>
          <Text type="subheading">Example</Text>
          <div class="bg-papel p-3 grid gap-2">
            <span class="py-2 px-4 text-obsidiana">
              obsidiana on papel, 17.34:1
            </span>
            <span class="py-2 px-4 text-jade">
              jade on papel, 11.68:1
            </span>
            <span class="bg-obsidiana text-plata rounded py-2 px-4">
              plata on obsidiana, 10.42:1
            </span>
            <span class="bg-obsidiana text-cedro rounded py-2 px-4">
              cedro on obsidiana, 5.94:1
            </span>
            <span class="bg-jade text-papel rounded py-2 px-4">
              papel on jade, 11.68:1
            </span>
          </div>
          <div class="bg-obsidiana p-3 grid gap-2">
            <span class="py-2 px-4 text-papel">
              papel on obsidiana, 17.34:1
            </span>
            <span class="py-2 px-4 text-plata">
              plata on obsidiana, 10.42:1
            </span>
            <span class="bg-papel text-obsidiana rounded py-2 px-4">
              obsidiana on papel, 17.34:1
            </span>
            <span class="bg-papel text-jade rounded py-2 px-4">
              jade on papel, 11.68:1
            </span>
            <span class="bg-cedro text-obsidiana rounded py-2 px-4">
              obsidiana on cedro, 5.94:1
            </span>
          </div>
        </div>
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

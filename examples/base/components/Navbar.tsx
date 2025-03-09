import { Link, Nav } from "lunchbox";

export default function () {
  return (
    <Nav.Sticky>
      <div class="col-h-full md:col-full flex justify-center gap-x-1/1 gap-y-1/4 gap flex-wrap">
        <Link href="/">Home</Link>
        <Link href="/markdown">Markdown</Link>
        <Link href="/particles">Particles</Link>
        <Link href="/atoms">Atoms</Link>
        <Link href="/molecules">Molecules</Link>
      </div>
    </Nav.Sticky>
  );
}

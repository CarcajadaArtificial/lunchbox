import Island from '../islands/Island.tsx';
import { Header, Main } from '../mod.ts';

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Main layout_type='center'>
        <Island />
      </Main>
    </div>
  );
}

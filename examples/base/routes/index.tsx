import { useSignal } from '@preact/signals';
import { Code, Page, Text } from 'lunchbox';
import Counter from '../islands/Counter.tsx';
import Footer from '../components/Footer.tsx';
import Logo from '../components/Logo.tsx';

export default function Home() {
  const count = useSignal(3);
  return (
    <>
      <Page.Header class='min-h-banner'>
        <div class='col-h-full md:col-full flex flex-col items-center text-center justify-center'>
          <Logo />
          <Text.Title>Welcome to a Fresh Lunchbox</Text.Title>
          <div>
            <span>The code for this page is located here</span>{' '}
            <Code.Inline>
              <Code.Content>./routes/index.tsx</Code.Content>
            </Code.Inline>{' '}
            <span>and it is server side rendered.</span>
          </div>
        </div>
      </Page.Header>
      <Page.Main>
        <div class='col-h-full md:col-full text-center'>
          <Text.Head>Counter</Text.Head>
          <div class='mt-1/2'>
            <span>The code for this island is located here</span>{' '}
            <Code.Inline>
              <Code.Content>./islands/Counter.tsx</Code.Content>
            </Code.Inline>{' '}
            <span>it is updated in the client.</span>
          </div>
          <Counter count={count} />
        </div>
      </Page.Main>
      <Footer />
    </>
  );
}

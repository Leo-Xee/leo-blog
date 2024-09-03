import Container from '@/components/common/Container/Container';
import test from './page.css';

export default function Index() {
  return (
    <main>
      <Container>
        <div className={test}>HELLO WORLD</div>
      </Container>
    </main>
  );
}

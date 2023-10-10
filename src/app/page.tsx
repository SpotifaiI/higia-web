import Link from "next/link";
import styled from 'styled-components';

const Container = styled.p`
  width: 100%;
  display: flex;
`;

function App() {
  return (
    <Container>
      <p>Tela inicial</p>
      <Link href="/login">Ir Pahgvtbjhra Login</Link>
    </Container>
  );
}

export default App;

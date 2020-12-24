import GlobalStyle from "./components/GlobalStyle";
import * as cognito from "./utils/cognito";

function App() {
  const email = "";
  const password = "";
  cognito.signIn({
    email,
    password,
  });
  return (
    <>
      <GlobalStyle />
      My app
    </>
  );
}

export default App;

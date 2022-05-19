import Header from "./components/Header";
import { AppContext } from "../app/context";
import useGlobalReducer from "../app/reducer";
import Global from "./components/Global";
import Local from "./components/Local";

const App = () => {
  const [appState, dispatch] = useGlobalReducer();
  function isNull(obj: { a: string; b: string; m: string }) {
    const { a, b, m } = obj;
    return a && b && m;
  }
  return (
    <AppContext.Provider value={{ appState, dispatch }}>
      <Header />
      <main>
        {appState.m.length > 0 && <Global />}
        {appState.m.length === 0 && isNull(appState.local) && <Local />}
      </main>
    </AppContext.Provider>
  );
};

export default App;

import Layout from "./components/Layout";
import Home from "./pages/home";
import ListClient from "./pages/ListClient";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <AppRouter>
        <Home />
        <ListClient />
    </AppRouter>
  );
}

export default App;

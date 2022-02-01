import './App.css';
import TokensPage from './pages/TokensPage';
import {ThemeProvider} from 'styled-components';
import theme from './styles/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <TokensPage/>
  </ThemeProvider>
);

export default App;

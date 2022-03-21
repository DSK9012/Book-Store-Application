import ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import theme from 'helpers/theme';
import 'index.css';
import App from './App';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
);

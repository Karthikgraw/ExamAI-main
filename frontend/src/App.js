import { CssBaseline, ThemeProvider } from '@mui/material';
import { baselightTheme } from './theme/DefaultColors';
import { RouterProvider } from 'react-router-dom';
import Router from './routes/Router';
import { Provider } from 'react-redux';
import store from './store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const theme = baselightTheme;
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <ToastContainer />
        <CssBaseline />
        <RouterProvider router={Router} />
      </Provider>
    </ThemeProvider>
  );
}

export default App;

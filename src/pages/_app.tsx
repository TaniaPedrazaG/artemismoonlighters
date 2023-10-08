import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { lightTheme } from '../themes'
import '../styles/globals.css'
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline>
        <Component {...pageProps} />
      </CssBaseline>
    </ThemeProvider>
  )
}

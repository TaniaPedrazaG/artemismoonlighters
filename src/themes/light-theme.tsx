import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
    typography: {
        fontFamily: [
            'Poppins',
            '-apple-system',
            'BlinkMacSystemFont',
            'Segoe UI',
            'Roboto',
            'Helvetica Neue',
            'Arial',
            'sans-serif',
        ].join(','),
    },
    palette: {
        mode: 'light',
        primary: {
            main: '#181A1B'
        },
        secondary: {
            main: '#E8E6E3'
        },
        info: {
            main: '#222222'
        }
    },
    components: {
        MuiLink: {
            defaultProps: {
                underline: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            },
        },
        MuiAppBar: {
            defaultProps: {
                elevation: 0,
                position: 'fixed',
            },
            styleOverrides: {
                root: {
                    backgroundColor: '#181A1B',
                },
            }
        },
        MuiTypography: {
            styleOverrides: {
                h1: {
                    fontSize: 60,
                    fontWeight: 400
                },
            }
        },
        MuiButton: {
            defaultProps: {
                variant: 'contained',
                size: 'small',
                disableElevation: true,
                color: 'primary'
            },
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    boxShadow: 'none',
                    borderRadius: 10,
                    fontSize: '14px',
                    ":hover": {
                        backgroundColor: 'rgba(42,46, 47, 0.5)',
                        transition: 'all 0.3s ease-in-out'
                    }
                }
            }
        },
        MuiCard: {
            defaultProps: {
                elevation: 0
            }
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    padding: 0
                }
            }
        }
    }
});
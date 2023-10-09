import { useContext } from 'react'
import { Box, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { ArrowForward, HistoryEdu, Home, LoginOutlined, People, RocketLaunch, Satellite, SatelliteAlt, School, Timeline, VpnKeyOutlined } from '@mui/icons-material';
import { UiContext } from '../../contexts';

export const SideMenu = () => {
    const { isMenuOpen, toogleSideMenu } = useContext(UiContext);
    const router = useRouter();
    const noLayout = ['/capsules', '/future']

    const navigateTo = ( url: string ) => {
        toogleSideMenu();
        router.push(url)
    }

    return (
        <Drawer
            open={isMenuOpen}
            anchor='right'
            sx={{
            backdropFilter: 'blur(4px)',
            transition: 'all 0.5s ease-out',
            }}
            onClose={toogleSideMenu}
        >
            <Box sx={{ width: 250, paddingTop: 5 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Typography variant='h6'>MENU</Typography>
                </div>
                <List>
                    {
                        !noLayout.includes(router.asPath)
                            ? <>
                                <ListItemButton
                                    onClick={() => navigateTo('#crew')}
                                >
                                    <ListItemIcon>
                                        <People/>
                                    </ListItemIcon>
                                    <ListItemText primary={'Tripulación'} />
                                </ListItemButton>
                                <ListItemButton
                                    onClick={() => navigateTo('#rocket')}
                                >
                                    <ListItemIcon>
                                        <RocketLaunch/>
                                    </ListItemIcon>
                                    <ListItemText primary={'Cohete'} />
                                </ListItemButton>
                                <ListItemButton
                                    onClick={() => navigateTo('#orion')}
                                >
                                    <ListItemIcon>
                                        <SatelliteAlt/>
                                    </ListItemIcon>
                                    <ListItemText primary={'Orión'} />
                                </ListItemButton>
                                <ListItemButton
                                    onClick={() => navigateTo('#history')}
                                >
                                    <ListItemIcon>
                                        <HistoryEdu/>
                                    </ListItemIcon>
                                    <ListItemText primary={'Historia'} />
                                </ListItemButton>
                                <ListItemButton
                                    onClick={() => navigateTo('/capsules')}
                                >
                                    <ListItemIcon>
                                        <School/>
                                    </ListItemIcon>
                                    <ListItemText primary={'Cápsulas'} />
                                </ListItemButton>
                                <ListItemButton
                                    onClick={() => navigateTo('/future')}
                                >
                                    <ListItemIcon>
                                        <ArrowForward/>
                                    </ListItemIcon>
                                    <ListItemText primary={'Futuro'} />
                                </ListItemButton>
                            </>
                            : <>
                                <ListItemButton
                                    onClick={() => navigateTo('/')}
                                >
                                    <ListItemIcon>
                                        <Home/>
                                    </ListItemIcon>
                                    <ListItemText primary={'Inicio'} />
                                </ListItemButton>
                            </>
                    }
                    
                </List>
            </Box>
        </Drawer>
    )
}

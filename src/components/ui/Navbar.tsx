import NextLink from 'next/link'
import { AppBar, Box, Button, IconButton, Link, Toolbar, Typography } from "@mui/material"
import { useRouter } from 'next/router';
import { Menu } from '@mui/icons-material';
import { useContext } from 'react';
import { UiContext } from '../../contexts';

export const Navbar = () => {
  const { toogleSideMenu } = useContext(UiContext);
  const route = useRouter()

  const noLayout = ['/capsules', '/future']

  return (
    <AppBar>
      <Toolbar>
        <NextLink href={'/'} passHref legacyBehavior>
          <Link display={'flex'} alignItems={'center'}>
            <Typography
              fontWeight={500}
              sx={{ ml: 1 }}
              color={'secondary'}
            >
              ARTEMIS MOONLIGHTERS
            </Typography>
          </Link>
        </NextLink>
        <Box flex={1}/>
        <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
          {
            !noLayout.includes(route.asPath)
              ? <>
                <NextLink href={'#crew'} passHref legacyBehavior scroll={false}>
                  <Link>
                    <Button sx={{ ml: 0.5 }}>Tripulación</Button>
                  </Link>
                </NextLink>
                <NextLink href={'#rocket'} passHref legacyBehavior scroll={false}>
                  <Link>
                    <Button sx={{ ml: 0.5 }}>Cohete</Button>
                  </Link>
                </NextLink>
                <NextLink href={'#orion'} passHref legacyBehavior scroll={false}>
                  <Link>
                    <Button sx={{ ml: 0.5 }}>Orión</Button>
                  </Link>
                </NextLink>
                <NextLink href={'#history'} passHref legacyBehavior scroll={false}>
                  <Link>
                    <Button sx={{ ml: 0.5 }}>Historia</Button>
                  </Link>
                </NextLink>
                <NextLink href={'/capsules'} passHref legacyBehavior scroll={false}>
                  <Link>
                    <Button sx={{ ml: 0.5 }}>Cápsulas</Button>
                  </Link>
                </NextLink>
                <NextLink href={'/future'} passHref legacyBehavior scroll={false}>
                  <Link>
                    <Button sx={{ ml: 0.5 }}>Futuro</Button>
                  </Link>
                </NextLink>
              </>
              : <>
                <NextLink href={'/'} passHref legacyBehavior scroll={false}>
                  <Link>
                    <Button sx={{ ml: 0.5 }}>Inicio</Button>
                  </Link>
                </NextLink>
              </>
          }
        </Box>
        <IconButton
          sx={{ display: { xs: 'flex', sm: 'none' } }}
          onClick={ toogleSideMenu }
        >
            <Menu color={'secondary'}/>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

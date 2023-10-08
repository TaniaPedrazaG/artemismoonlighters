import NextLink from 'next/link'
import { AppBar, Box, Button, Link, Toolbar, Typography } from "@mui/material"
import { useRouter } from 'next/router';

export const Navbar = () => {
  const route = useRouter()
  return (
    <AppBar>
      <Toolbar>
        <NextLink href={'/'} passHref legacyBehavior>
          <Link display={'flex'} alignItems={'center'}>
            <Typography
              variant='h5'
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
            route.asPath === '/'
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
                    <Button sx={{ ml: 0.5 }}>Orion</Button>
                  </Link>
                </NextLink>
                <NextLink href={'#history'} passHref legacyBehavior scroll={false}>
                  <Link>
                    <Button sx={{ ml: 0.5 }}>Historia</Button>
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
                    <Button sx={{ ml: 0.5 }}>Incio</Button>
                  </Link>
                </NextLink>
              </>
          }
        </Box>
      </Toolbar>
    </AppBar>
  )
}

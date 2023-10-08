import PropTypes from 'prop-types';
import Image from 'next/image';
import { Box, Grid, List, ListItem, Typography } from '@mui/material'

const MissionCard = ({ data }) => {
    const { mission, crew, country, launch, landing, payload, patch, state } = data
    return (
        <Box display={'flex'} flexDirection={'row'} justifyContent={'center'}>
            <Grid container maxWidth={700}>
                <Grid item xs={12} sm={8}>
                    <Box
                        display={'flex'}
                        flexDirection={'column'}
                        justifyContent={'center'}
                        alignItems={{xs: 'center', sm: 'flex-start'}}
                    >
                        <Typography mb={1} variant='subtitle1'>
                            <b>{mission}</b>, {country}
                        </Typography>
                        <Typography mb={1} variant='subtitle2'>
                            {`Misión ${state ? 'CUMPLIDA' : 'FALLIDA'}`}
                        </Typography>
                        <Box
                            mb={1}
                            display={'flex'}
                            flexDirection={{xs: 'column', sm: 'row'}}
                            alignItems={{xs: 'center', sm: 'flex-start'}}
                            maxWidth={110}
                        >
                            {
                                crew.map(({ name, image }) => (
                                    <Box
                                        key={name}
                                        display={'flex'}
                                        flexDirection={'column'}
                                        alignItems={'center'}
                                        mr={{sm: 2}}
                                    >
                                        <Image
                                            src={image}
                                            alt={name}
                                            width={110}
                                            height={110}
                                            style={{
                                                borderRadius: '50%'
                                            }}
                                        />
                                        <Typography variant='subtitle2'>
                                            {name}
                                        </Typography>
                                    </Box>
                                ))
                            }
                        </Box>
                        <Box
                            display={'flex'}
                            flexDirection={'row'}
                            alignItems={'center'}
                        >
                            <Typography mb={1} variant='subtitle1'>
                                Lanzamiento:
                            </Typography>
                            <Typography mb={1} variant='subtitle2' ml={1}>
                                {launch}
                            </Typography>
                        </Box>
                        <Box
                            display={'flex'}
                            flexDirection={'row'}
                            alignItems={'center'}
                        >
                            <Typography mb={1} variant='subtitle1'>
                                Retorno:
                            </Typography>
                            <Typography mb={1} variant='subtitle2' ml={1}>
                                {landing}
                            </Typography>
                        </Box>
                        <Box
                            display={'flex'}
                            flexDirection={'row'}
                            alignItems={'baseline'}
                        >
                            <Typography mb={1} variant='subtitle1'>
                                Carga:
                            </Typography>
                            <List sx={{ ml: 1 }}>
                                {
                                    payload.map((it) => (
                                        <ListItem key={it}>
                                            <Typography key={it} mb={1} variant='subtitle2'>
                                                {it}
                                            </Typography>
                                        </ListItem>
                                    ))
                                }
                            </List>
                            
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                        <Image
                            src={patch}
                            alt={mission}
                            width={280}
                            height={280}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

MissionCard.propTypes = {
    data: PropTypes.array
}

export default MissionCard
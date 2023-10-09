import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, Grid, ImageList, ImageListItem, Typography } from '@mui/material'
import { LandingLayout } from '../../components/layouts'
import Image from 'next/image'
import { useState } from 'react';
import { ExpandMore } from '@mui/icons-material';

const Capsules = () => {
    const [expanded, setExpanded] = useState<string | false>('panel1');
    const capsuleVideos = [
        {source: "/capsules/capsule_1.mp4", title: "¿Cómo ser un astronauta?"},
        {source: "/capsules/capsule_2.mp4", title: "¿Qué cambios tiene un astronauta en el espacio?"},
        {source: "/capsules/capsule_3.mp4", title: "¿El sol se puede apagar?"},
        {source: "/capsules/capsule_4.mp4", title: "¿Cuánto mide el espacio?"},
        {source: "/capsules/capsule_5.mp4", title: "¿Dónde esta el espacio?"},
        {source: "/capsules/capsule_6.mp4", title: "¿Cómo es un día en el espacio?"},
        {source: "/capsules/capsule_7.mp4", title: "¿En el espacio hay internet?"},
        {source: "/capsules/capsule_8.mp4", title: "¿Cómo se baña un astronauta en el espacio?"},
        {source: "/capsules/capsule_9.mp4", title: "¿Porqué cuando un astronauta sale de la tierra no se quema?"},
        {source: "/capsules/capsule_10.mp4", title: "¿Cómo duerme un astronauta en el espacio?"},
    ]

    const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <LandingLayout title='Cápsulas de Conocimiento' pageDescription='Cápsulas de Conocimiento'>
            <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
                sx={{
                    margin: { xs: 0, sm: '60px' }
                }}
            >
                <Typography variant="h4" textAlign={'center'} mt={5}>
                    Cápsulas de Conocimiento
                </Typography>
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    mt={5}
                    sx={{
                        width: { xs: 300, sm: 664,  md: 864 }
                    }}
                >
                    {
                        capsuleVideos.map((it, i) => (
                            <Accordion
                                key={it.title}
                                expanded={expanded === `panel${i + 1}`}
                                onChange={handleChange(`panel${i + 1}`)}
                                sx={{ width: '100%' }}
                            >
                                <AccordionSummary expandIcon={<ExpandMore/>}>
                                    <Typography>
                                        {it.title}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center'
                                    }}
                                >
                                    <video
                                        id="capsule_vid"
                                        controls
                                        preload="none"
                                        poster='/capsules/capsules_poster.jpeg'
                                        className='capsules-videos'
                                    >
                                        <source
                                            src={it.source}
                                            type="video/mp4"
                                        />
                                    </video>
                                </AccordionDetails>
                            </Accordion>
                            
                        ))
                    }
                </Box>
            </Box>
        </LandingLayout>
    )
}

export default Capsules
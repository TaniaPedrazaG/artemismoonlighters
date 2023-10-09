import { useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import { ExpandMore } from '@mui/icons-material';

const Junior = () => {
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
        {source: "/capsules/capsule_9.mp4", title: "¿Por qué cuando un astronauta sale de la tierra no se quema?"},
        {source: "/capsules/capsule_10.mp4", title: "¿Cómo duerme un astronauta en el espacio?"},
        {source: "/capsules/capsule_11.mp4", title: "¿Cómo van al baño los astronautas?"},
        {source: "/capsules/capsule_12.mp4", title: "¿Qué es un satélite?"},
        {source: "/capsules/capsule_13.mp4", title: "¿Han ido niños al espacio?"},
        {source: "/capsules/capsule_14.mp4", title: "¿Cómo es la comida de los astronautas?"},
        {source: "/capsules/capsule_15.mp4", title: "¿Cuánto tiempo durá un astronauta en el espacio?"},
        {source: "/capsules/capsule_16.mp4", title: "¿Cómo funciona un satélite?"},
        {source: "/capsules/capsule_17.mp4", title: "¿Por qué los satélites no se caen?"},
        {source: "/capsules/capsule_18.mp4", title: "¿A qué huele el espacio?"},
        {source: "/capsules/capsule_19.mp4", title: "¿Cuáles son las características de un traje espacial?"},
        {source: "/capsules/capsule_20.mp4", title: "¿Han chocado satélites?"},
        {source: "/capsules/capsule_21.mp4", title: "¿Qué debo estudiar para ser astronauta?"},
        {source: "/capsules/capsule_22.mp4", title: "¿Qué pasa si un astronauta se quita el casco en el espacio?"},
        {source: "/capsules/capsule_23.mp4", title: "¿Cómo se cepillan los dientes los astronautas?"},
    ]

    const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <Box
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
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
    )
}

export default Junior
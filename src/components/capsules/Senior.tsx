import { useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import { ExpandMore } from '@mui/icons-material';

const Senior = () => {
    const [expanded, setExpanded] = useState<string | false>('panel1');

    const capsuleVideos = [
        {source: "/capsules/capsule_34.mp4", title: "Introducción"},
        {source: "/capsules/capsule_24.mp4", title: "¿Qué cambios experimenta un astronauta al salir al espacio?"},
        {source: "/capsules/capsule_25.mp4", title: "¿El sol se va a apagar?"},
        {source: "/capsules/capsule_26.mp4", title: "¿Cuánto mide el espacio?"},
        {source: "/capsules/capsule_27.mp4", title: "¿Dónde esta el espacio?"},
        {source: "/capsules/capsule_28.mp4", title: "¿En el espacio hay internet?"},
        {source: "/capsules/capsule_29.mp4", title: "¿Por qué al salir de la tierra un astronauta no se quema?"},
        {source: "/capsules/capsule_30.mp4", title: "¿Por qué la luna no tiene campo mágnetico?"},
        {source: "/capsules/capsule_31.mp4", title: "¿Por qué al tomar una foto desde la luna no se ven las estrellas?"},
        {source: "/capsules/capsule_32.mp4", title: "¿Qué es un satélite?"},
        {source: "/capsules/capsule_37.mp4", title: "¿Qué es un satélite natural?"},
        {source: "/capsules/capsule_33.mp4", title: "¿Cómo son las características de un traje espacial?"},
        {source: "/capsules/capsule_35.mp4", title: "¿Han llegado a achocar satélites?"},
        {source: "/capsules/capsule_36.mp4", title: "¿Por qué los satélites no se caen?"},
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

export default Senior
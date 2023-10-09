import { useState } from 'react';
import { Box, Tab, Tabs, Typography } from '@mui/material'
import { LandingLayout } from '../../components/layouts'
import Junior from '../../components/capsules/Junior';
import Senior from '../../components/capsules/Senior';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const CustomTabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
            <Box sx={{ p: 3 }}>
                <Typography>{children}</Typography>
            </Box>
            )}
        </div>
    );
}

const Capsules = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
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
                <Typography className="animate__animated animate__bounce" variant="h4" textAlign={'center'} mt={5}>
                    Cápsulas de Conocimiento
                </Typography>
                <Box mt={5}>
                    <video
                        id="capsule_vid"
                        controls
                        preload="none"
                        poster='/capsules/capsules_poster.jpeg'
                        className='capsules-videos'
                    >
                        <source
                            src={'/misiones_artemis.mp4'}
                            type="video/mp4"
                        />
                    </video>
                </Box>
                <Box sx={{ marginTop: 5, orderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Junior" />
                        <Tab label="Senior" />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <Junior/>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <Senior/>
                </CustomTabPanel>
            </Box>
        </LandingLayout>
    )
}

export default Capsules
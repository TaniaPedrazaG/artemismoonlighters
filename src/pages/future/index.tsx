import { Box, Grid, Typography } from '@mui/material'
import { LandingLayout } from '../../components/layouts'
import Image from 'next/image'

const Future = () => {
    const futureList = [
        {img: "/future/future_1.jpeg", title: "future_1"},
        {img: "/future/future_2.jpeg", title: "future_2"},
        {img: "/future/future_3.jpeg", title: "future_3"},
        {img: "/future/future_4.jpeg", title: "future_4"},
        {img: "/future/future_5.jpeg", title: "future_5"},
        {img: "/future/future_6.jpeg", title: "future_6"},
    ]

    const futureVideos = [
        {source: "/future/video_1.mp4", title: "future_video_1"},
        {source: "/future/video_2.mp4", title: "future_video_2"},
        {source: "/future/video_3.mp4", title: "future_video_3"},
    ]

    return (
        <LandingLayout title='El futuro de Artemis' pageDescription='El futuro de Artemis'>
            <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
                sx={{
                    margin: { xs: 0, sm: '60px' }
                }}
            >
                <Typography variant="h4" textAlign={'center'} mt={5}>
                    El futuro de Artemis
                </Typography>
                <Box
                    display={'flex'}
                    flexDirection={{ xs: 'column', sm: 'row' }}
                    alignItems={'center'}
                    mt={5}
                    mb={5}
                >
                    <Grid container spacing={2}>
                        {
                            futureList.map((it) => (
                                <Grid
                                    item
                                    xs={12}
                                    sm={4}
                                    key={it.title}
                                    display={'flex'}
                                    flexDirection={'column'}
                                    alignItems={'center'}
                                >
                                    <Image
                                        src={it.img}
                                        alt={it.title}
                                        width={330}
                                        height={570}
                                    />
                                </Grid>
                            ))
                        }
                    </Grid>
                </Box>
                <Box
                    display={'flex'}
                    flexDirection={{ xs: 'column', sm: 'row' }}
                    alignItems={'center'}
                    mt={5}
                >
                    <Grid container spacing={2}>
                        {
                            futureVideos.map((it) => (
                                <Grid
                                    item
                                    xs={12}
                                    sm={4}
                                    key={it.title}
                                    display={'flex'}
                                    flexDirection={'column'}
                                    alignItems={'center'}
                                >
                                    <video
                                        id="future_vid"
                                        autoPlay
                                        muted
                                        loop
                                        preload="none"
                                        style={{
                                            maxHeight: '600px'
                                        }}
                                    >
                                        <source
                                            src={it.source}
                                            type="video/mp4"
                                        />
                                    </video>
                                </Grid>
                                
                            ))
                        }
                    </Grid>
                </Box>
            </Box>
        </LandingLayout>
    )
}

export default Future
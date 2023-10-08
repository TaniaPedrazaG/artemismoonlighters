import { Box, Grid, ImageList, ImageListItem, Typography } from '@mui/material'
import { LandingLayout } from '../../components/layouts'

const Future = () => {
    const futureList = [
        {img: "/future/future_1.jpeg", title: "future_1"},
        {img: "/future/future_2.jpeg", title: "future_2"},
        {img: "/future/future_3.jpeg", title: "future_3"},
        {img: "/future/future_4.jpeg", title: "future_4"},
        {img: "/future/future_5.jpeg", title: "future_5"},
        {img: "/future/future_6.jpeg", title: "future_6"},
        {img: "/future/future_7.jpeg", title: "future_7"},
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
                mt={'86px'}
            >
                <Typography variant="h1" textAlign={'center'}>
                    El futuro de Artemis
                </Typography>
                <Box
                    display={'flex'}
                    flexDirection={'row'}
                    alignItems={'center'}
                    sx={{ width: 500, mt: 2 }}
                >
                    <ImageList variant="masonry" cols={3} gap={5}>
                        {futureList.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    src={`${item.img}?w=248&fit=crop&auto=format`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>
                <Box
                    display={'flex'}
                    flexDirection={{ xs: 'column', sm: 'row' }}
                    alignItems={'center'}
                    sx={{ width: '100vw' }}
                >
                    <Grid container spacing={2}>
                        {
                            futureVideos.map((it) => (
                                <Grid item key={it.title} xs={12} sm={3}>
                                    <video
                                        id="future_vid"
                                        autoPlay
                                        muted
                                        preload="none"
                                        style={{
                                            maxHeight: '640px'
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
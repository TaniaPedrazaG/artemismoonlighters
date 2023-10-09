import { NextPage } from "next"
import Image from "next/image"
import { LandingLayout } from "../components/layouts"
import { Box, Divider, Typography } from "@mui/material"
import Slides from "../components/ui/Slides"
import ApolloMissions from '../data/apollo.json'
import ArtemisCrew from "../data/artemisCrew.json";
import SlidesV2 from "../components/ui/Slides_v2"

const HomePage: NextPage = () => {
  return (
    <LandingLayout title="Artemis Moonlighters" pageDescription="Wiki for Artemis missions">
      <section className="hero">
        <video
          id="vid"
          autoPlay
          muted
          preload="none"
          poster="/hero/hero.png"
          className="hero"
        >
          <source
            src='/hero/video.mp4'
            type="video/mp4"
          />
        </video>
      </section>
      <section id="crew">
        <Box
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          mt={4}
        >
          <Typography variant="h4" textAlign={'center'} mb={3}>
            Artemis II
          </Typography>
          <video
              id="capsule_vid"
              controls
              preload="none"
              poster='/capsules/capsules_poster.jpeg'
              className='capsules-videos'
          >
              <source
                  src={'/artemis_II.mp4'}
                  type="video/mp4"
              />
          </video>
        </Box>
      </section>
      <Divider
        sx={{
          margin: {xs: '10px', sm: '60px'}
        }}
      />
      <section id="crew">
        <Box
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
        >
          <Typography variant="h4" textAlign={'center'} mb={3}>
            Tripulación
          </Typography>
          <SlidesV2 data={ArtemisCrew}/>
        </Box>
      </section>
      <Divider
        sx={{
          margin: {xs: '10px', sm: '60px'}
        }}
      />
      <section id="rocket">
        <Box
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          sx={{
            m: {xs: '20px 0px', sm: '20px 60px'}
          }}
        >
          <Typography variant="h4" textAlign={'center'} mb={3}>
            Cohete
          </Typography>
          <Image
            src={'/cohete.png'}
            alt="Cohete"
            width={149}
            height={801}
          />
        </Box>
      </section>
      <Divider
        sx={{
          margin: {xs: '10px', sm: '60px'}
        }}
      />
      <section id="orion">
        <Box
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          sx={{
            m: {xs: '20px 0px', sm: '20px 60px'}
          }}
        >
          <Typography variant="h4" textAlign={'center'} mb={3}>
            Orión
          </Typography>
          <Image
            src={'/orion.png'}
            alt="Orión"
            width={307}
            height={224}
          />
        </Box>
      </section>
      <Divider
        sx={{
          margin: {xs: '10px', sm: '60px'}
        }}
      />
      <section id="history">
        <Box
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
        >
          <Typography variant="h4" textAlign={'center'} mb={1}>
            Algo de historia
          </Typography>
          <Slides data={ApolloMissions} />
        </Box>
      </section>
    </LandingLayout>
  )
}

export default HomePage

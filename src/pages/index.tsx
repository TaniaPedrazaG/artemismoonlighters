import { NextPage } from "next"
import { LandingLayout } from "../components/layouts"
import { Box, Divider, Typography } from "@mui/material"
import Slides from "../components/ui/Slides"
import ApolloMissions from '../data/apollo.json'
import ArtemisCrew from "../data/artemisCrew.json";
import SlidesV2 from "../components/ui/Slides_v2"
import Image from "next/image"

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
        >
          <Typography variant="h1" textAlign={'center'}>
          Tripulación
          </Typography>
          <SlidesV2 data={ArtemisCrew}/>
        </Box>
      </section>
      <section id="rocket">
        <Box
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          sx={{
            m: {xs: '20px 0px', sm: '20px 60px'}
          }}
        >
          <Typography variant="h1" textAlign={'center'}>
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
      <section id="orion">
        <Box
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          sx={{
            m: {xs: '20px 0px', sm: '20px 60px'}
          }}
        >
          <Typography variant="h1" textAlign={'center'}>
            Orion
          </Typography>
          <Image
            src={'/orion.png'}
            alt="Orion"
            width={337}
            height={254}
          />
        </Box>
      </section>
      <section id="history">
        <Box
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
        >
          <Typography variant="h1" textAlign={'center'}>
            Algo de historia ...
          </Typography>
          <Slides data={ApolloMissions} />
        </Box>
      </section>
    </LandingLayout>
  )
}

export default HomePage

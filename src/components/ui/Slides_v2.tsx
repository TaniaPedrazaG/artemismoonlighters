import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import CrewCard from '../missions/CrewCard';
import { Grid } from '@mui/material';

const SlidesV2 = ({ data }) => {
  const [slidesData, setSlidesData] = useState([])

  const options = {
    perPage: 1,
  }

  useEffect(() => {
    const newData = Object.values(data);
    setSlidesData(newData)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Grid
      container
      spacing={4}
      sx={{
        width: {xs: '100%', sm: 'calc(100% - 150px)'}
      }}
    >
      {
        slidesData.map((it) => (
          <CrewCard key={it} data={it}/>
        ))
      }
    </Grid>
  )
}

SlidesV2.propTypes = {
  data: PropTypes.array
}

export default SlidesV2
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import CrewCard from '../missions/CrewCard';

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
    <Splide options={options} style={{ maxWidth: '350px' }}>
      {
        slidesData.map((it) => (
          <SplideSlide key={it.mission}>
            <CrewCard data={it}/>
          </SplideSlide>
        ))
      }
    </Splide>
  )
}

SlidesV2.propTypes = {
  data: PropTypes.array
}

export default SlidesV2
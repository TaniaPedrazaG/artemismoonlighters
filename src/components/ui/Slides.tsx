import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import MissionCard from '../missions/MissionCard';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const Slides = ({ data }) => {
  const [slidesData, setSlidesData] = useState([])

  useEffect(() => {
    const newData = Object.values(data);
    setSlidesData(newData)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Splide style={{ maxWidth: '830px' }}>
      {
        slidesData.map((it) => (
          <SplideSlide key={it.mission}>
            <MissionCard data={it}/>
          </SplideSlide>
        ))
      }
    </Splide>
  )
}

Slides.propTypes = {
  data: PropTypes.array
}

export default Slides
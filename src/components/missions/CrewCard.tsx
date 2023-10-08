import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import PropTypes from 'prop-types';

const CrewCard = ({ data }) => {
    const {name, rol, image} =  data    
    return (
        <Box
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
        >
            <Image
                src={image}
                alt={name}
                width={180}
                height={180}
                style={{
                    borderRadius: '50%'
                }}
            />
            <Typography variant='subtitle1'>
                {name}
            </Typography>
            <Typography variant='subtitle2'>
                {rol}
            </Typography>
        </Box>
    )
}

CrewCard.propTypes = {
    data: PropTypes.array
}

export default CrewCard
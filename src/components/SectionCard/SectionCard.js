import * as React from 'react';
import SectionModal from '../SectionModal/SectionModal';

import Grid from '@mui/material/Grid';

const SectionCard = (props) => {
  return (
    <div
      style={{
        height: '80px',
        width: '280px',
        border: 'solid 1px blue',
        borderRadius: '10px',
        textAlign: 'center',
        lineHeight: '80px',
        margin: '40px auto',
      }}
    >
      <SectionModal title={props.title} />
    </div>
  );
};

export default SectionCard;

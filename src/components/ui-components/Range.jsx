import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { Box, Typography } from '@mui/material';
import "../../styles/range.css"
import viewsData from "../../mockData/summary.json"

const data = viewsData.summary.byView


const maxViews = Math.max(...data.map(item => item.views));

const Range = () => {
  return (
    <div className="card-longer">
      <span className="card-title">Blogs by View</span>

      {data.map((item, index) => (
        <Box key={index} sx={{ mb: 1 }}>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="body2" sx={{ fontWeight: 500, fontSize: 14 }}>
              {item.category}
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 900, fontSize: 16 }}>
              {item.views}
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={(item.views / maxViews) * 100}
            sx={{
              height: 6,
              borderRadius: 5,
              backgroundColor: '#E5E7EB',
              '& .MuiLinearProgress-bar': {
                backgroundImage: 'linear-gradient(90deg, #8B5CF6 0%, #6366F1 100%)',
              },
            }}
          />
        </Box>
      ))}
    </div>
  );
};

export default Range;

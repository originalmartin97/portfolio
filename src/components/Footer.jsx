import * as React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
    return (
        <Box 
            component="footer" 
            sx={{ 
                bgcolor: 'primary.main', 
                color: 'primary.contrastText', 
                textAlign: 'center', 
                padding: '10px',
                mt: 4
            }}
        >
            <Typography variant="body2">
                &copy; 2025 Takács Martin. All rights reserved.
            </Typography>
        </Box>
    );
}

export default Footer;
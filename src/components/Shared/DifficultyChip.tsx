import React from 'react';
import Dot from '@mui/icons-material/FiberManualRecord';
import { Box, Typography } from '@mui/material';

const DifficultyChip = ({ difficulty, variant, color }: { difficulty: 'beginner' | 'intermediate' | 'advanced'; variant?: 'bgless' | 'contained'; color?: string }) => {
	let bgColor = '#D5EADD';
	let dotColor = '#7AC997';

	switch (difficulty) {
		case 'intermediate':
			bgColor = '#FAF1D9';
			dotColor = '#E8BB40';
			break;
		case 'advanced':
			bgColor = '#F4D9DC';
			dotColor = '#C84051';
			break;
		default:
			break;
	}

	return (
		<Box
			// className="flex items-center gap-1 bg-[#D5EADD] px-3 py-1.5 rounded-md text-black w-fit"
			sx={{
				display: 'flex',
				alignItems: 'center',
				gap: '4px',
				padding: variant == 'bgless' ? '0' : '6px 12px',
				borderRadius: '6px',
				color: color ?? '#000',
				backgroundColor: variant == 'bgless' ? 'transparent' : bgColor,
				width: 'fit-content',
			}}>
			<Dot htmlColor={dotColor} sx={{ width: '14px', height: '14px', marginBottom: '2px', color: dotColor }} />
			<Typography variant="caption" textTransform="capitalize">
				{difficulty}
			</Typography>
		</Box>
	);
};

export default DifficultyChip;

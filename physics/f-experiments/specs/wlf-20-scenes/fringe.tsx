import React from 'react';

// 屏上的双缝干涉条纹（红光）：暗底上明暗相间、等间距的红色亮条纹。
// x0 为中央亮条纹中心，period 为条纹间距（像素）。
export const Fringes: React.FC<{x: number; y: number; w: number; h: number; x0: number; period: number}> = ({x, y, w, h, x0, period}) => {
	const bars: React.ReactNode[] = [];
	const step = 3;
	for (let i = 0; i < w; i += step) {
		const u = Math.cos((Math.PI * (x + i + step / 2 - x0)) / period);
		const I = u * u;
		bars.push(<rect key={i} x={x + i} y={y} width={step + 0.6} height={h} fill="#ff4630" opacity={Math.pow(I, 1.6)} />);
	}
	return (
		<g>
			<rect x={x} y={y} width={w} height={h} fill="#2a1a14" rx={10} />
			{bars}
		</g>
	);
};

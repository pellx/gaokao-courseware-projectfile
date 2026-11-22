import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Tip} from '../components/lib';
import {Defs} from '../components/ui';
import {Arrow, Box, G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.dogma;
const {dg1, dg2, dg3, dg4} = t.cue;
const D = {x: 300, y: 260};
const R = {x: 870, y: 260};
const P = {x: 1440, y: 260};

export const Dogma: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点八">中心法则及其发展</Header>
		<svg width={1740} height={480} viewBox="0 0 1740 480" style={{position: 'absolute', left: 90, top: 165}}>
			<Defs />
			<G at={dg1.from}>
				<Box x={D.x} y={D.y} w={220} h={100} label="DNA" color={C.brown} fontSize={44} />
				<Box x={R.x} y={R.y} w={220} h={100} label="RNA" color={C.red} fontSize={44} />
				<Box x={P.x} y={P.y} w={240} h={100} label="蛋白质" color={C.orange} fontSize={44} />
				<path d={`M${D.x - 60},${D.y - 50} C${D.x - 140},${D.y - 190} ${D.x + 140},${D.y - 190} ${D.x + 60},${D.y - 50}`} fill="none" stroke={C.muted} strokeWidth={6} markerEnd="url(#arrow)" />
				<text x={D.x} y={D.y - 170} fontSize={30} fontWeight={900} fill={C.muted} textAnchor="middle">复制</text>
				<Arrow x1={D.x + 110} y1={D.y - 20} x2={R.x - 110} y2={R.y - 20} />
				<text x={(D.x + R.x) / 2} y={D.y - 40} fontSize={30} fontWeight={900} fill={C.muted} textAnchor="middle">转录</text>
				<Arrow x1={R.x + 110} y1={R.y} x2={P.x - 120} y2={P.y} />
				<text x={(R.x + P.x) / 2} y={R.y - 20} fontSize={30} fontWeight={900} fill={C.muted} textAnchor="middle">翻译</text>
			</G>
			<G at={dg2.from}>
				<path d={`M${R.x - 60},${R.y - 50} C${R.x - 140},${R.y - 190} ${R.x + 140},${R.y - 190} ${R.x + 60},${R.y - 50}`} fill="none" stroke={C.red} strokeWidth={6} strokeDasharray="14 9" markerEnd="url(#arrow-red)" />
				<text x={R.x} y={R.y - 170} fontSize={30} fontWeight={900} fill={C.red} textAnchor="middle">RNA 复制</text>
			</G>
			<G at={dg3.from}>
				<Arrow x1={R.x - 110} y1={R.y + 25} x2={D.x + 110} y2={D.y + 25} color={C.red} marker="arrow-red" dash="14 9" />
				<text x={(D.x + R.x) / 2} y={D.y + 80} fontSize={30} fontWeight={900} fill={C.red} textAnchor="middle">逆转录（逆转录酶）</text>
			</G>
			<G at={dg2.from}>
				<text x={870} y={430} fontSize={26} fontWeight={800} fill={C.muted} textAnchor="middle">实线：克里克提出　虚线：后来的补充（RNA 病毒）</text>
			</G>
		</svg>
		<Tip at={dg4.from} top={690} label="易错" fontSize={32}>
			RNA 复制和逆转录发生在<Hl>被病毒侵染的宿主细胞</Hl>中；正常细胞中一般没有这两个过程
		</Tip>
		<Narration t={t} />
	</Scene>
);

import React from 'react';
import {Mol, MAtom} from '../components/sci';
import {C} from '../theme';

// 常见分子构型的平面示意图（用于 VSEPR、杂化两期）。
export type Kind = 'linear' | 'trigonal' | 'bent3' | 'bent4' | 'pyramid' | 'tetra' | 'p4';
const LIG: Record<Kind, number[]> = {
	linear: [0, 180],
	trigonal: [90, 210, 330],
	bent3: [210, 330],
	bent4: [215, 325],
	pyramid: [200, 270, 340],
	tetra: [90, 205, 335],
	p4: [],
};
const LP: Record<Kind, number[]> = {linear: [], trigonal: [], bent3: [90], bent4: [55, 125], pyramid: [90], tetra: [], p4: []};

export const Geo: React.FC<{
	kind: Kind;
	at: number;
	center: string;
	lig: string;
	n?: number[]; // 每根键的重数
	lp?: boolean; // 画孤电子对
	angle?: string;
	size?: number;
	cc?: string;
}> = ({kind, at, center, lig, n, lp = true, angle, size = 300, cc = C.red}) => {
	const cx = size / 2;
	const cy = size * 0.44;
	const L = size * 0.33;
	const rad = (d: number) => (d * Math.PI) / 180;
	if (kind === 'p4') {
		const pts: [number, number][] = [[cx, cy - L], [cx - L, cy + L * 0.55], [cx + L, cy + L * 0.55], [cx + L * 0.15, cy + L * 0.1]];
		const atoms: MAtom[] = pts.map(([x, y]) => ({x, y, label: 'P', c: C.orange, r: size * 0.08}));
		const bonds = [[0, 1], [0, 2], [1, 2], [0, 3], [1, 3], [2, 3]].map(([a, b], i) => ({a, b, dash: i >= 3 && b === 3 && a === 1}));
		return <Mol w={size} h={size} at={at} atoms={atoms} bonds={bonds} notes={angle ? [{x: cx, y: size - 4, text: angle, c: C.red}] : []} />;
	}
	const angs = LIG[kind];
	const atoms: MAtom[] = [{x: cx, y: cy, label: center, c: cc, r: size * 0.1}];
	angs.forEach((a) => atoms.push({x: cx + Math.cos(rad(a)) * L, y: cy - Math.sin(rad(a)) * L, label: lig, c: lig === 'H' ? '#bfb6aa' : C.text, r: size * (lig === 'H' ? 0.065 : 0.08)}));
	const bonds: {a: number; b: number; n?: number; dash?: boolean}[] = angs.map((_, i) => ({a: 0, b: i + 1, n: n?.[i] ?? 1}));
	if (kind === 'tetra' || kind === 'pyramid') {
		// 指向纸面后方的那根键画虚线
		if (kind === 'tetra') {
			atoms.push({x: cx, y: cy + L * 0.62, label: lig, c: lig === 'H' ? '#bfb6aa' : C.text, r: size * (lig === 'H' ? 0.055 : 0.07)});
			bonds.push({a: 0, b: atoms.length - 1, n: 1, dash: true});
		}
	}
	return (
		<Mol
			w={size}
			h={size}
			at={at}
			atoms={atoms}
			bonds={bonds}
			lp={lp ? LP[kind].map((a) => ({a: 0, ang: a})) : []}
			notes={angle ? [{x: cx, y: size - 4, text: angle, c: C.red}] : []}
		/>
	);
};

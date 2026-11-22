import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Tip} from '../components/lib';
import {G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.effect;
const {ef1, ef2, ef3, ef4} = t.cue;
const W = 46;

// mRNA as codon groups with a label of the encoded amino acids underneath.
const Codons: React.FC<{y: number; seq: string; aa: string[]; changed?: number[]; label: string; color: string}> = ({y, seq, aa, changed = [], label, color}) => (
	<g>
		<text x={0} y={y + 34} fontSize={28} fontWeight={900} fill={color}>{label}</text>
		{seq.split('').map((b, i) => {
			const k = Math.floor(i / 3);
			const hit = changed.includes(k);
			return (
				<g key={i}>
					<rect x={170 + i * W + (k * 10)} y={y} width={W - 4} height={48} rx={6} fill={hit ? C.redSoft : '#fff'} stroke={hit ? C.red : C.line} strokeWidth={3} />
					<text x={170 + i * W + k * 10 + (W - 4) / 2} y={y + 34} fontSize={28} fontWeight={900} fill={hit ? C.red : C.text} textAnchor="middle">{b}</text>
				</g>
			);
		})}
		{aa.map((a, k) => (
			<text key={k} x={170 + k * (3 * W + 10) + 1.5 * W - 2} y={y + 84} fontSize={24} fontWeight={800} fill={changed.includes(k) ? C.red : C.muted} textAnchor="middle">{a}</text>
		))}
	</g>
);

export const Effect: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">替换、增添、缺失对蛋白质的影响</Header>
		<svg width={1740} height={500} viewBox="0 0 1740 500" style={{position: 'absolute', left: 90, top: 165}}>
			<G at={ef1.from}>
				<Codons y={10} seq="AUGGAAUUCCAU" aa={['甲硫', '谷', '苯丙', '组']} label="原 mRNA" color={C.text} />
			</G>
			<G at={ef2.from}>
				<Codons y={130} seq="AUGGUAUUCCAU" aa={['甲硫', '缬', '苯丙', '组']} changed={[1]} label="替换" color={C.green} />
				<text x={1000} y={170} fontSize={28} fontWeight={900} fill={C.green}>只改变一个氨基酸（或不变、或提前终止）</text>
			</G>
			<G at={ef3.from}>
				<Codons y={250} seq="AUGGAGAUUCCA" aa={['甲硫', '谷', '异亮', '脯']} changed={[1, 2, 3]} label="增添 G" color={C.red} />
				<text x={1000} y={290} fontSize={28} fontWeight={900} fill={C.red}>插入点之后的密码子全部改变</text>
				<Codons y={370} seq="AUGAAUUCCAU" aa={['甲硫', '天冬酰', '丝', '…']} changed={[1, 2, 3]} label="缺失 G" color={C.red} />
				<text x={1000} y={410} fontSize={28} fontWeight={900} fill={C.red}>缺失点之后的密码子全部改变</text>
			</G>
		</svg>
		<Tip at={ef4.from} top={690} label="解题方法" fontSize={32}>
			只有<Hl>一个氨基酸改变</Hl> → 多为替换；<Hl>后面一串都变</Hl> → 增添或缺失；增添或缺失 3 个碱基对影响相对小
		</Tip>
		<Narration t={t} />
	</Scene>
);

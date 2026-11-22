import React from 'react';
import {AutoScene} from '../components/auto';

export const Convert: React.FC = () => <AutoScene k="convert" d={{"tag": "考点二", "title": "浓度的换算", "blocks": [{"t": "big", "at": "cv1", "text": "c = {1000ρw} / M　（ρ：g/mL）", "size": 46}, {"t": "text", "at": "cv2", "text": "98% 浓硫酸，ρ = 1.84 g/mL：c = 1000 × 1.84 × 98% ÷ 98 = {18.4 mol/L}", "size": 34, "center": true}, {"t": "big", "at": "cv3", "text": "稀释：c1V1 = c2V2（溶质的 n 不变）", "size": 40, "c": "orange", "soft": "orangeSoft"}], "callout": {"label": "解题方法", "at": "cv4", "text": "先用 c1V1 = c2V2 求浓溶液体积，再用{量筒}量取"}}} />;

import React from 'react';
import {AutoScene} from '../components/auto';

export const Color: React.FC = () => <AutoScene k="color" d={{"tag": "考点七", "title": "不同色光的折射率", "blocks": [{"t": "big", "at": "g2", "text": "红 → 紫：折射率{逐渐增大}", "size": 46}, {"t": "text", "at": "g2", "text": "紫光 n 最大、在介质中速度最小", "size": 34}, {"t": "rule", "tag": "色散", "at": "g3", "text": "白光经三棱镜分解为{彩色光带}", "c": "orange"}], "callout": {"label": "要点", "at": "g4", "text": "频率越高，n 越大，{偏折越厉害}"}, "beat": {"k": "colors", "at": "g3b", "text": "白光 = 多种色光\n棱镜把它们{分开|red}"}}} />;

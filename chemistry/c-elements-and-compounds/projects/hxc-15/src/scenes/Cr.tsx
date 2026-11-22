import React from 'react';
import {AutoScene} from '../components/auto';

export const Cr: React.FC = () => <AutoScene k="cr" d={{"tag": "考点三", "title": "铬：两种酸根的平衡", "blocks": [{"t": "big", "at": "cr2", "text": "Cr2O7^2-（{橙色|orange}）+ H2O ⇌ 2CrO4^2-（{黄色|gold}）+ 2H^+", "size": 38}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "加酸", "at": "cr2", "text": "左移 → {橙色|orange}", "c": "orange", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "加碱", "at": "cr2", "text": "右移 → {黄色|gold}", "c": "green", "size": 32}]}]}, {"t": "rule", "tag": "还原", "at": "cr4", "text": "Cr(Ⅵ) → {Cr^3+|green}（绿色）：酒精检测", "c": "red", "size": 31}], "callout": {"label": "易错", "at": "cr5", "text": "Cr2O7^2- ⇌ CrO4^2- 中 Cr 都是 +6，{不是氧化还原}"}, "beat": {"k": "sticker", "at": "cr2b", "text": "同一个铬\n{换个环境换个样|red}"}}} />;

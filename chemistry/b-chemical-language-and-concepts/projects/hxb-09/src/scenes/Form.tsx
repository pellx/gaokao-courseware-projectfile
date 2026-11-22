import React from 'react';
import {AutoScene} from '../components/auto';

export const Form: React.FC = () => <AutoScene k="form" d={{"tag": "考点三", "title": "用电子式表示形成过程", "blocks": [{"t": "big", "at": "fo1", "text": "原子的电子式　{→}　化合物的电子式（不用“=”）", "size": 40}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "离子化合物（如 NaCl）", "at": "fo2", "lines": ["画{弯箭头}：电子从 Na 转移到 Cl", "右边：Na^+ 和 [Cl]^- 的电子式"], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "共价化合物（如 HCl）", "at": "fo3", "lines": ["{不画弯箭头|orange}", "右边：共用电子对，无方括号、无电荷"], "c": "orange", "size": 32}]}]}], "callout": {"label": "易错", "at": "fo4", "text": "共价化合物的形成过程画了弯箭头、加了方括号 → {错}"}}} />;

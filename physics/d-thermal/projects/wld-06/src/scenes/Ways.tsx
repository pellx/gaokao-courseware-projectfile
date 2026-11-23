import React from 'react';
import {AutoScene} from '../components/auto';

export const Ways: React.FC = () => <AutoScene k="ways" d={{"tag": "考点四", "title": "做功和传热", "blocks": [{"t": "big", "at": "k1", "text": "改变内能：效果{等价}", "size": 48}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "做功", "at": "k2", "lines": ["其他形式的能 ⇄ 内能", "能量{转化}", "摩擦生热、压缩气体"], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "传热", "at": "k3", "lines": ["内能从一个物体到另一个", "能量{转移}", "热水袋取暖"], "c": "orange", "size": 32}]}]}], "callout": {"label": "易错", "at": "k4", "text": "只看内能变化，{无法判断}改变方式"}}} />;

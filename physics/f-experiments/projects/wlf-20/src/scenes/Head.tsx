import React from 'react';
import {AutoScene} from '../components/auto';

export const Head: React.FC = () => <AutoScene k="head" d={{"tag": "考点五", "title": "测量头", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "分划板", "at": "h1", "lines": ["有{中心刻线}", "随手轮左右移动"], "c": "red", "size": 30}]}, {"blocks": [{"t": "panel", "title": "目镜", "at": "h3", "lines": ["观察刻线和{条纹}"], "c": "orange", "size": 30}]}, {"blocks": [{"t": "panel", "title": "手轮", "at": "h2", "lines": ["转动、{读数}"], "c": "red", "size": 30}]}]}], "callout": {"label": "要点", "at": "h4", "text": "读数同{螺旋测微器}，估读一位"}}} />;

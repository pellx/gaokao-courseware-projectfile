import React from 'react';
import {AutoScene} from '../components/auto';

export const Hooke: React.FC = () => <AutoScene k="hooke" d={{"tag": "考点七", "title": "胡克定律", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "plot", "at": "h4", "x": "x", "y": "F", "curves": [{"at": "h4", "pts": [[0.0, 0.0], [0.85, 0.85]], "c": "red"}], "w": 560, "h": 400, "notes": [{"x": 0.66, "y": 0.42, "text": "斜率 = k", "at": "h4", "c": "red"}]}], "flex": null, "w": 580}, {"blocks": [{"t": "big", "at": "h1", "text": "F = {kx}", "size": 60}, {"t": "rule", "tag": "x", "at": "h2", "text": "{形变量}，不是长度", "c": "red", "size": 30}, {"t": "rule", "tag": "k", "at": "h3", "text": "劲度系数，{N/m}，由弹簧本身决定", "c": "orange", "size": 28}]}]}], "callout": {"label": "易错", "at": "h5", "text": "x 是{形变量}；只在弹性限度内成立"}}} />;

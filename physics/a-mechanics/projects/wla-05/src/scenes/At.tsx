import React from 'react';
import {AutoScene} from '../components/auto';

export const At: React.FC = () => <AutoScene k="at" d={{"tag": "考点六", "title": "a-t 图像", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "plot", "at": "b1", "x": "t", "y": "a", "curves": [{"at": "b2", "pts": [[0.0, 0.6], [0.8, 0.6], [0.8, 0.0]], "c": "red"}], "w": 680, "h": 420, "notes": [{"x": 0.4, "y": 0.3, "text": "面积 = Δv", "at": "b1", "c": "orange"}]}], "flex": null, "w": 700}, {"blocks": [{"t": "big", "at": "b1", "text": "面积 = {Δv}", "size": 48}, {"t": "rule", "tag": "匀变速", "at": "b2", "text": "{平行于 t 轴}", "c": "orange", "size": 30}, {"t": "rule", "tag": "匀速", "at": "b3", "text": "a = 0，与 t 轴{重合}", "c": "red", "size": 30}]}]}], "callout": {"label": "要点", "at": "b4", "text": "面积是 {Δv}，不是 v"}}} />;

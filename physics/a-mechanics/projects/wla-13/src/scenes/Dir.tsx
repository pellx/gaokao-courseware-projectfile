import React from 'react';
import {AutoScene} from '../components/auto';

export const Dir: React.FC = () => <AutoScene k="dir" d={{"tag": "考点八", "title": "只看加速度方向", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "mark", "ok": true, "at": "h1", "text": "看{加速度}方向"}]}, {"blocks": [{"t": "mark", "ok": false, "at": "h2", "text": "看速度方向"}]}]}, {"t": "row", "cols": [{"blocks": [{"t": "big", "at": "h3", "text": "a 向上：{超重}", "size": 42}]}, {"blocks": [{"t": "big", "at": "h3", "text": "a 向下：{失重|orange}", "size": 42, "c": "orange", "soft": "orangeSoft"}]}]}], "callout": {"label": "易错", "at": "h4", "text": "向上运动{不一定}超重"}}} />;

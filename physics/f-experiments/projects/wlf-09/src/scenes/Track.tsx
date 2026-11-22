import React from 'react';
import {AutoScene} from '../components/auto';

export const Track: React.FC = () => <AutoScene k="track" d={{"tag": "考点七", "title": "参考案例 2：倾斜的气垫导轨", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "气垫导轨", "at": "k1", "text": "倾斜放置，滑块下滑，摩擦{几乎为零}", "c": "red", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "光电门", "at": "k2", "text": "v = {d / Δt}，d 为遮光条宽度", "c": "orange", "size": 32}]}]}, {"t": "big", "at": "k3", "text": "mg·Δh　与　½mv_2^2 − ½mv_1^2　比较", "size": 40}], "callout": {"label": "要点", "at": "k4", "text": "遮光条{越窄}越接近瞬时速度；看{下降高度}，不是导轨长度"}}} />;

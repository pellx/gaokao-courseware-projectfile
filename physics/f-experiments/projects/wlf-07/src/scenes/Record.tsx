import React from 'react';
import {AutoScene} from '../components/auto';

export const Record: React.FC = () => <AutoScene k="record" d={{"tag": "考点二", "title": "记录运动的方法", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "频闪照相", "at": "r2", "lines": ["每隔相等时间闪光一次", "一张照片留下多个位置"], "c": "orange", "size": 32}]}, {"blocks": [{"t": "panel", "title": "录制视频", "at": "r3", "lines": ["逐帧回放", "相邻两帧时间间隔相等"], "c": "orange", "size": 32}]}]}, {"t": "big", "at": "r4", "text": "记录{每隔相等时间}小球所在的位置", "size": 40}], "callout": {"label": "要点", "at": "r4", "text": "记录{等时间间隔}的位置，分析两个方向的位移"}, "beat": {"k": "camera", "at": "r3b", "text": "按一次快门，定格一个位置\n{每隔相等时间|red}拍一次"}}} />;

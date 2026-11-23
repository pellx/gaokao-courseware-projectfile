import React from 'react';
import {AutoScene} from '../components/auto';

export const Ruler: React.FC = () => <AutoScene k="ruler" d={{"tag": "考点二", "title": "刻度尺", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "分度值", "at": "r1", "text": "一般为 {1 mm}", "c": "red", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "估读", "at": "r2", "text": "估读到{下一位}：读到 0.1 mm", "c": "orange", "size": 32}]}]}, {"t": "big", "at": "r2", "text": "例：{23.6 mm}　　对准整刻度：{23.0 mm}", "size": 40}, {"t": "text", "at": "r3", "text": "尺{紧贴}被测物体，视线与尺面{垂直}", "size": 32}], "callout": {"label": "易错", "at": "r4", "text": "对准整刻度也要估读：{23.0 mm}，末尾的 0 不能省"}}} />;

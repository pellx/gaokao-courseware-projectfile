import React from 'react';
import {AutoScene} from '../components/auto';

export const Sym: React.FC = () => <AutoScene k="sym" d={{"tag": "考点九", "title": "竖直上抛的对称性", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "时间", "at": "y1", "text": "t_(上) = {v_0/g}", "c": "red", "size": 34}]}, {"blocks": [{"t": "rule", "tag": "高度", "at": "y1", "text": "H = {v_0^2/2g}", "c": "orange", "size": 34}]}]}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "速度对称", "at": "y2", "lines": ["同一位置", "大小{相等}，方向相反"], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "时间对称", "at": "y3", "lines": ["t_(上) = t_(下)", "同一段高度用时{相等|orange}"], "c": "orange", "size": 32}]}]}], "callout": {"label": "要点", "at": "y4", "text": "下降段就是{自由落体}"}}} />;

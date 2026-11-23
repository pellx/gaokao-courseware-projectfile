import React from 'react';
import {AutoScene} from '../components/auto';

export const Vert: React.FC = () => <AutoScene k="vert" d={{"tag": "考点四", "title": "竖直弹簧振子", "blocks": [{"t": "rule", "tag": "平衡位置", "at": "v1", "text": "{弹力 = 重力}，弹簧已伸长", "c": "red"}, {"t": "rule", "tag": "回复力", "at": "v2", "text": "{弹力与重力的合力}", "c": "orange"}, {"t": "big", "at": "v3", "text": "以平衡位置为原点：{F = −kx}", "size": 42}], "callout": {"label": "易错", "at": "v4", "text": "平衡位置{不在}原长处"}, "beat": {"k": "box", "at": "v3b", "text": "竖直方向要算上{重力|red}\n平衡位置：弹力 = 重力"}}} />;

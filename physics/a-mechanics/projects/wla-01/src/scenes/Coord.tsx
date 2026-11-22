import React from 'react';
import {AutoScene} from '../components/auto';

export const Coord: React.FC = () => <AutoScene k="coord" d={{"tag": "考点四", "title": "坐标系", "blocks": [{"t": "rule", "tag": "作用", "at": "c1", "text": "在参考系上建立坐标系，{定量}描述位置", "c": "red", "size": 36}, {"t": "items", "items": [{"at": "c2", "text": "三要素：{原点}、{正方向}、{单位长度}"}, {"at": "c3", "text": "直线运动：{一维坐标轴}，位置用 x 表示"}, {"at": "c4", "text": "平面运动：二维坐标系；空间运动：三维坐标系"}], "size": 34}], "callout": {"label": "要点", "at": "c5", "text": "x 的{正负}表示在原点哪一侧，绝对值表示到原点的距离"}}} />;

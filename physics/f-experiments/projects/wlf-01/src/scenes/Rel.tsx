import React from 'react';
import {AutoScene} from '../components/auto';

export const Rel: React.FC = () => <AutoScene k="rel" d={{"tag": "考点五", "title": "绝对误差与相对误差", "blocks": [{"t": "rule", "tag": "绝对误差", "at": "e1", "text": "|测量值 − 真实值|", "c": "red"}, {"t": "big", "at": "e2", "text": "相对误差 = {绝对误差} ÷ 测量值", "size": 44}, {"t": "row", "cols": [{"blocks": [{"t": "big", "at": "e3", "text": "1 m 差 1 mm：{0.1%}", "size": 36, "c": "orange", "soft": "orangeSoft"}]}, {"blocks": [{"t": "big", "at": "e3", "text": "1 cm 差 1 mm：{10%}", "size": 36}]}]}, {"t": "text", "at": "e4", "text": "{累积法}：测多圈总长、多个周期总时间，再求平均", "size": 30}], "callout": {"label": "要点", "at": "e5", "text": "精确程度看{相对误差}"}}} />;

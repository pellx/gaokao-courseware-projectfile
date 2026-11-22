import React from 'react';
import {AutoScene} from '../components/auto';

export const Cell: React.FC = () => <AutoScene k="cell" d={{"tag": "考点六", "title": "用电化学装置验证猜想", "blocks": [{"t": "rule", "tag": "思路", "at": "ce1", "text": "氧化剂、还原剂{分开}，盐桥连接", "c": "red", "size": 32}, {"t": "rule", "tag": "作用", "at": "ce2", "text": "指针偏转 → 能发生氧化还原；{排除沉淀干扰}", "c": "orange", "size": 32}, {"t": "text", "at": "ce3", "text": "Ag^+ / I^-：直接混合只见 AgI；分开 → 指针偏转，{I2 生成}", "size": 31, "center": true}], "callout": {"label": "解题方法", "at": "ce4", "text": "看指针{偏转方向和幅度}"}}} />;

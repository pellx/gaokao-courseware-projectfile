import React from 'react';
import {AutoScene} from '../components/auto';

export const Diff: React.FC = () => <AutoScene k="diff" d={{"tag": "考点一", "title": "电势差", "blocks": [{"t": "big", "at": "u1", "text": "U_AB = {φ_A − φ_B}", "size": 56}, {"t": "items", "items": [{"at": "u2", "text": "U_AB = {−U_BA}"}, {"at": "u3", "text": "与{零电势点}的选取无关"}], "size": 34}], "callout": {"label": "易错", "at": "u4", "text": "下标顺序：{U_AB = −U_BA}"}, "beat": {"k": "a1", "at": "u3b", "text": "高度看零点\n{高度差|red}不变"}}} />;

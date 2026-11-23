import React from 'react';
import {AutoScene} from '../components/auto';

export const Bridge: React.FC = () => <AutoScene k="bridge" d={{"tag": "考点一", "title": "力和运动的联系", "blocks": [{"t": "chain", "steps": [{"at": "a1", "text": "受力情况"}, {"at": "a3", "text": "加速度 {a}"}, {"at": "a2", "text": "运动情况"}], "arrows": []}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "牛顿第二定律", "at": "a1", "text": "F合 = ma", "c": "red", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "运动学公式", "at": "a2", "text": "v、x、t 与 a", "c": "orange", "size": 32}]}]}], "callout": {"label": "要点", "at": "a4", "text": "{加速度}是联系力和运动的桥梁"}}} />;

import React from 'react';
import {AutoScene} from '../components/auto';

export const Use: React.FC = () => <AutoScene k="use" d={{"tag": "考点七", "title": "共振的应用", "blocks": [{"t": "rule", "tag": "方法", "at": "u1", "text": "f驱 {接近或等于} f固", "c": "red"}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "共振筛", "at": "u2", "lines": ["转速接近筛子的{固有频率}"], "c": "red", "size": 30}]}, {"blocks": [{"t": "panel", "title": "共鸣箱", "at": "u3", "lines": ["乐器、音叉", "声音{更响}"], "c": "orange", "size": 30}]}]}], "callout": {"label": "要点", "at": "u4", "text": "利用共振：f驱 {靠近} f固"}, "beat": {"k": "guitar", "at": "u3b", "text": "琴身是{共鸣箱|red}\n空气共振，声音更响"}}} />;

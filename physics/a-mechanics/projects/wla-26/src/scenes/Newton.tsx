import React from 'react';
import {AutoScene} from '../components/auto';

export const Newton: React.FC = () => <AutoScene k="newton" d={{"tag": "考点七", "title": "与牛顿运动定律的关系", "blocks": [{"t": "chain", "steps": [{"at": "n1", "text": "牛顿第三定律"}, {"at": "n1", "text": "动量定理"}, {"at": "n1", "text": "{动量守恒定律}"}], "arrows": []}, {"t": "rule", "tag": "优点", "at": "n2", "text": "只看{始末状态}，不管力的细节", "c": "orange"}], "callout": {"label": "要点", "at": "n4", "text": "只看始末，{更简便}"}}} />;

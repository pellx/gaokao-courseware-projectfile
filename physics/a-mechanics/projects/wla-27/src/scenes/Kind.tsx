import React from 'react';
import {AutoScene} from '../components/auto';

export const Kind: React.FC = () => <AutoScene k="kind" d={{"tag": "考点二", "title": "弹性碰撞与非弹性碰撞", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "弹性碰撞", "at": "k1", "lines": ["总动能{不变}", {"at": "k4", "text": "钢球、玻璃球：近似弹性"}], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "非弹性碰撞", "at": "k2", "lines": ["总动能{减少}", {"at": "k3", "text": "损失的动能 → {内能}等"}], "c": "orange", "size": 32}]}]}], "callout": {"label": "易错", "at": "k5", "text": "动量都守恒，区别在{动能}"}}} />;

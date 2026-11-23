import React from 'react';
import {AutoScene} from '../components/auto';

export const Ek: React.FC = () => <AutoScene k="ek" d={{"tag": "考点六", "title": "碰撞中的动能", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "动量", "at": "k6", "text": "{守恒}", "c": "red", "size": 34}]}, {"blocks": [{"t": "rule", "tag": "总动能", "at": "k7", "text": "{不会增加}", "c": "orange", "size": 34}]}]}, {"t": "chain", "steps": [{"at": "k8", "text": "弹性：不变"}, {"at": "k8", "text": "非弹性：减少"}, {"at": "k8", "text": "完全非弹性：{减少最多}"}], "arrows": []}], "callout": {"label": "易错", "at": "k9", "text": "碰后总动能{不会增加}"}}} />;

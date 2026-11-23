import React from 'react';
import {AutoScene} from '../components/auto';

export const Damp: React.FC = () => <AutoScene k="damp" d={{"tag": "考点四", "title": "电磁阻尼", "blocks": [{"t": "chain", "steps": [{"at": "d1", "text": "导体相对磁场运动", "c": "orange"}, {"at": "d1", "text": "产生感应电流", "c": "red"}, {"at": "d1", "text": "安培力阻碍运动", "c": "orange"}], "arrows": []}, {"t": "rule", "tag": "应用", "at": "d3", "text": "磁电式仪表：线圈绕在{铝框}上", "c": "red", "size": 32}], "callout": {"label": "要点", "at": "d4", "text": "阻碍相对运动：{来拒去留}"}}} />;

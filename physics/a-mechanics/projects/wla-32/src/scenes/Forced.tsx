import React from 'react';
import {AutoScene} from '../components/auto';

export const Forced: React.FC = () => <AutoScene k="forced" d={{"tag": "考点三", "title": "驱动力与受迫振动", "blocks": [{"t": "rule", "tag": "驱动力", "at": "f2", "text": "{周期性}的外力", "c": "red"}, {"t": "rule", "tag": "受迫振动", "at": "f3", "text": "在{驱动力}作用下的振动", "c": "orange"}, {"t": "chain", "steps": [{"at": "f1", "text": "驱动力"}, {"at": "f3", "text": "补充能量"}, {"at": "f3", "text": "{受迫振动}"}], "arrows": ["做功", "持续"]}], "callout": {"label": "要点", "at": "f4", "text": "驱动力是{周期性}外力"}}} />;

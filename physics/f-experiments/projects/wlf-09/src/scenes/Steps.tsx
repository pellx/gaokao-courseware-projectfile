import React from 'react';
import {AutoScene} from '../components/auto';

export const Steps: React.FC = () => <AutoScene k="steps" d={{"tag": "考点四", "title": "关键步骤与注意事项", "blocks": [{"t": "chain", "steps": [{"at": "s1", "text": "两限位孔在{同一竖直线}"}, {"at": "s2", "text": "重物{靠近}打点计时器"}, {"at": "s3", "text": "先{通电}，后{松纸带}"}, {"at": "s4", "text": "选点迹{清晰}的纸带"}], "arrows": []}], "callout": {"label": "易错", "at": "s5", "text": "{先接通电源，后松开纸带}，顺序不能颠倒"}}} />;

import React from 'react';
import {AutoScene} from '../components/auto';

export const Steps: React.FC = () => <AutoScene k="steps" d={{"tag": "考点六", "title": "关键步骤与注意事项", "blocks": [{"t": "chain", "steps": [{"at": "s1", "text": "先测{直径}"}, {"at": "s2", "text": "接入电路后测{有效长度}"}, {"at": "s3", "text": "电流{不宜过大}"}, {"at": "s3", "text": "通电时间{不宜过长}"}], "arrows": []}], "callout": {"label": "易错", "at": "s4", "text": "温度升高，电阻率{增大}"}, "beat": {"k": "ramen", "at": "s3b", "text": "电流太大、通电太久\n金属丝{发热|red}"}}} />;

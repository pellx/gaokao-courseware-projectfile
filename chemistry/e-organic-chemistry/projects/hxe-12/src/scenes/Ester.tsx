import React from 'react';
import {AutoScene} from '../components/auto';

export const Ester: React.FC = () => <AutoScene k="ester" d={{"tag": "考点二", "title": "酯化反应", "blocks": [{"t": "big", "at": "es1", "text": "CH3COOH + CH3CH2OH ⇌ CH3COOCH2CH3 + H2O", "size": 36}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "机理", "at": "es2", "text": "{酸脱羟基，醇脱氢}", "c": "red", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "浓硫酸", "at": "es3", "text": "{催化剂、吸水剂}", "c": "orange", "size": 32}]}]}], "callout": {"label": "易错", "at": "es4", "text": "写{可逆号}，别漏 H2O"}}} />;

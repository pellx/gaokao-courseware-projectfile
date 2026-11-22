import React from 'react';
import {AutoScene} from '../components/auto';

export const Complex: React.FC = () => <AutoScene k="complex" d={{"tag": "考点七", "title": "复杂结构中的官能团", "blocks": [{"t": "items", "items": [{"at": "cx2", "text": "① 双键、三键"}, {"at": "cx2", "text": "② 含 O：羟基、醛基、酮羰基、羧基、酯基、醚键"}, {"at": "cx2", "text": "③ 含 N：氨基、酰胺基、硝基"}, {"at": "cx2", "text": "④ 卤素：碳卤键"}], "size": 33}, {"t": "text", "at": "cx3", "text": "易混：{酯基 / 羧基}、{酰胺基 / 氨基}、{酚羟基 / 醇羟基}", "size": 32, "center": true}], "callout": {"label": "解题方法", "at": "cx4", "text": "{一个官能团对应一组性质}"}}} />;

import React from 'react';
import {AutoScene} from '../components/auto';

export const Apply: React.FC = () => <AutoScene k="apply" d={{"tag": "考点十", "title": "放射性同位素的应用与防护", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "射线源", "at": "j2", "lines": ["探伤、测厚度", "放射治疗、辐射育种"], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "示踪原子", "at": "j3", "lines": ["追踪物质的去向"], "c": "orange", "size": 32}]}]}, {"t": "text", "at": "j4", "text": "过量射线有害：{做好防护}，防止污染", "size": 34}], "callout": {"label": "要点", "at": "j5", "text": "射线源 + 示踪原子，注意{防护}"}, "beat": {"k": "umbrella", "at": "j4b", "text": "用射线\n要{做好防护|red}"}}} />;

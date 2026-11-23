import React from 'react';
import {AutoScene} from '../components/auto';

export const Grid: React.FC = () => <AutoScene k="grid" d={{"tag": "考点九", "title": "电网供电与直流输电", "blocks": [{"t": "rule", "tag": "电网", "at": "i1", "text": "合理{调度}电力，保证供电质量", "c": "red"}, {"t": "row", "cols": [{"blocks": [{"t": "big", "at": "i3", "text": "{特高压}输电", "size": 44}]}, {"blocks": [{"t": "big", "at": "i3", "text": "{直流|orange}输电", "size": 44, "c": "orange", "soft": "orangeSoft"}]}]}], "callout": {"label": "要点", "at": "i4", "text": "电网{合理调度}，交流直流都有"}}} />;

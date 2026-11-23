import React from 'react';
import {AutoScene} from '../components/auto';

export const Dynamo: React.FC = () => <AutoScene k="dynamo" d={{"tag": "考点五", "title": "交流发电机", "blocks": [{"t": "rule", "tag": "组成", "at": "e1", "text": "{电枢}（线圈）+ {磁体}", "c": "red", "size": 32}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "旋转电枢式", "at": "e2", "lines": ["电枢转，磁极不动"], "c": "orange", "size": 30}]}, {"blocks": [{"t": "panel", "title": "旋转磁极式", "at": "e2", "lines": ["磁极转，电枢不动", "{大型发电机}"], "c": "red", "size": 30}]}]}], "callout": {"label": "要点", "at": "e4", "text": "机械能 → {电能}"}}} />;

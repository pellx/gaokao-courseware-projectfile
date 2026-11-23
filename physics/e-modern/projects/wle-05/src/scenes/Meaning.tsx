import React from 'react';
import {AutoScene} from '../components/auto';

export const Meaning: React.FC = () => <AutoScene k="meaning" d={{"tag": "考点二", "title": "电子发现的意义", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "mark", "ok": false, "at": "b2", "text": "原子不可再分"}]}, {"blocks": [{"t": "mark", "ok": true, "at": "b3", "text": "原子{可以再分}"}]}]}, {"t": "big", "at": "b1", "text": "电子是{原子的组成部分}", "size": 46}], "callout": {"label": "要点", "at": "b4", "text": "原子内部有{复杂结构}"}}} />;

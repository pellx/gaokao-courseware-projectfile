import React from 'react';
import {AutoScene} from '../components/auto';

export const Bond: React.FC = () => <AutoScene k="bond" d={{"tag": "考点一", "title": "碳原子的成键特点", "blocks": [{"t": "big", "at": "bo1", "text": "碳：总是 {4 个共价键}", "size": 48}, {"t": "items", "items": [{"at": "bo2", "text": "单键、双键、三键都可以"}, {"at": "bo2", "text": "碳链、碳环都可以"}, {"at": "bo3", "text": "→ 种类繁多，存在{同分异构}"}], "size": 34}], "callout": {"label": "解题方法", "at": "bo4", "text": "数键：C {4}、N 3、O 2、H 和卤素 1"}}} />;

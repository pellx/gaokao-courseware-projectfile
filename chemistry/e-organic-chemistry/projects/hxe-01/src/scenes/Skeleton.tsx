import React from 'react';
import {AutoScene} from '../components/auto';

export const Skeleton: React.FC = () => <AutoScene k="skeleton" d={{"tag": "考点一", "title": "有机物的分类", "blocks": [{"t": "chain", "steps": [{"at": "sk1", "text": "有机物"}, {"at": "sk1", "text": "链状"}], "arrows": [], "center": true, "size": 36}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "环状", "at": "sk1", "lines": ["脂环化合物：环己烷", "{芳香族化合物}：含苯环"], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "按官能团", "at": "sk3", "lines": ["烃、卤代烃、醇、酚", "醛、酮、羧酸、酯"], "c": "orange", "size": 32}]}]}], "callout": {"label": "易错", "at": "sk4", "text": "环己烷{不是芳香烃}；含苯环不一定是芳香烃"}}} />;

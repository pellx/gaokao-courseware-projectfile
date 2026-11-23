import React from 'react';
import {AutoScene} from '../components/auto';

export const Material: React.FC = () => <AutoScene k="material" d={{"tag": "考点五", "title": "材料科学", "blocks": [{"t": "items", "items": [{"at": "n2", "text": "{半导体}、超导体"}, {"at": "n2", "text": "纳米材料、液晶"}, {"at": "n2", "text": "{石墨烯}等碳材料"}], "size": 38}, {"t": "text", "at": "n2b", "text": "石墨烯：只有{一层碳原子|orange}厚，强度高、导电导热好", "size": 32}], "callout": {"label": "要点", "at": "n3", "text": "基于对{微观结构}的认识"}}} />;

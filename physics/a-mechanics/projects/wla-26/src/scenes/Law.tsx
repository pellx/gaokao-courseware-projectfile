import React from 'react';
import {AutoScene} from '../components/auto';

export const Law: React.FC = () => <AutoScene k="law" d={{"tag": "考点三", "title": "动量守恒定律", "blocks": [{"t": "items", "items": [{"at": "l1", "text": "系统{不受外力}"}, {"at": "l2", "text": "或外力的{矢量和为 0}"}], "size": 36}, {"t": "big", "at": "l3", "text": "→ 系统{总动量保持不变}", "size": 48}], "callout": {"label": "易错", "at": "l4", "text": "守恒条件只看{外力}"}}} />;

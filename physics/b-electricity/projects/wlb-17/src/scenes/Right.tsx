import React from 'react';
import {AutoScene} from '../components/auto';

export const Right: React.FC = () => <AutoScene k="right" d={{"tag": "考点九", "title": "右手定则", "blocks": [{"t": "items", "items": [{"at": "i2", "text": "磁感线{穿入掌心}"}, {"at": "i2", "text": "拇指指{导体运动方向}"}, {"at": "i3", "text": "四指指{感应电流方向}"}], "size": 36}, {"t": "rule", "tag": "适用", "at": "i4", "text": "导体{切割磁感线}", "c": "orange", "size": 32}], "callout": {"label": "要点", "at": "i4", "text": "切割情形下的{楞次定律}"}}} />;

import React from 'react';
import {AutoScene} from '../components/auto';

export const Power: React.FC = () => <AutoScene k="power" d={{"tag": "考点五", "title": "功率", "blocks": [{"t": "big", "at": "e1", "text": "P = {W/t}", "size": 60}, {"t": "items", "items": [{"at": "e2", "text": "{额定功率}：长时间正常工作的最大功率"}, {"at": "e3", "text": "人体 ~100 W，汽车 ~几十 kW，高铁 ~{10^4 kW}"}], "size": 32}], "callout": {"label": "易错", "at": "e4", "text": "功率大 = 做功{快}，不是做功多"}}} />;

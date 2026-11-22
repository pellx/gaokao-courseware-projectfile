import React from 'react';
import {AutoScene} from '../components/auto';

export const Inert: React.FC = () => <AutoScene k="inert" d={{"tag": "考点四", "title": "充入惰性气体", "blocks": [{"t": "table", "at": "in31", "head": ["条件", "反应物浓度", "速率"], "cols": "1.3fr 1fr 1fr", "rows": [{"at": "in31", "cells": ["恒容充入惰性气体", "{不变}", "{不变}"]}, {"at": "in32", "cells": ["恒压充入惰性气体", "{减小|orange}", "{减慢|orange}"]}], "size": 34, "rowHeight": 76}], "callout": {"label": "解题方法", "at": "in33", "text": "先问：{参不参加反应}？{恒容还是恒压}？"}, "beat": {"k": "bass", "at": "in32b", "text": "惰性气体只是“路过”\n看反应物{浓度变没变|red}"}}} />;

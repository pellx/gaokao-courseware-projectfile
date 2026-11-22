import React from 'react';
import {AutoScene} from '../components/auto';

export const Ctrl: React.FC = () => <AutoScene k="ctrl" d={{"tag": "考点七", "title": "控制变量实验", "blocks": [{"t": "big", "at": "ct1", "text": "{只改变一个条件}，其他条件相同", "size": 44}, {"t": "table", "at": "ct2", "head": ["实验", "Na2S2O3 / mL", "稀硫酸 / mL", "水 / mL", "温度"], "cols": "0.7fr 1.2fr 1.1fr 0.8fr 0.8fr", "rows": [{"at": "ct2", "cells": ["1", "10", "10", "0", "20 ℃"]}, {"at": "ct2", "cells": ["2", "10", "10", "0", "{40 ℃}"]}, {"at": "ct3", "cells": ["3", "5", "10", "{5}", "20 ℃"]}], "size": 30, "rowHeight": 58}], "callout": {"label": "答题模板", "at": "ct4", "text": "“其他条件相同，{只有某条件不同}，……说明……”"}}} />;

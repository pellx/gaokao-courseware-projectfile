import React from 'react';
import {AutoScene} from '../components/auto';

export const Air: React.FC = () => <AutoScene k="air" d={{"tag": "考点三", "title": "大气污染", "blocks": [{"t": "table", "at": "ai1", "head": ["问题", "主要原因"], "cols": "1.2fr 2.6fr", "rows": [{"at": "ai1", "cells": ["{酸雨}（pH < 5.6）", "SO2、NO_x"]}, {"at": "ai2", "cells": ["光化学烟雾", "NO_x、碳氢化合物"]}, {"at": "ai2", "cells": ["臭氧层破坏", "氟氯代烷"]}, {"at": "ai3", "cells": ["雾霾", "PM2.5 等颗粒物"]}, {"at": "ai3", "cells": ["温室效应", "CO2、CH4（{CO2 不是污染物}）"]}], "size": 30, "rowHeight": 56}], "callout": {"label": "易错", "at": "ai4", "text": "酸雨是 pH < {5.6}，不是 < 7"}}} />;

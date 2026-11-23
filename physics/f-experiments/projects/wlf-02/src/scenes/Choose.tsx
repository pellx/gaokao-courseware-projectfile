import React from 'react';
import {AutoScene} from '../components/auto';

export const Choose: React.FC = () => <AutoScene k="choose" d={{"tag": "考点一", "title": "测量工具的选用", "blocks": [{"t": "table", "at": "a1", "head": ["被测长度", "选用工具", "精度"], "cols": "2fr 1.4fr 1.4fr", "rows": [{"at": "a2", "cells": ["较长的长度（桌长、点迹间距）", "{刻度尺}", "1 mm"]}, {"at": "a3", "cells": ["内径、外径、深度", "{游标卡尺}", "0.1～0.02 mm"]}, {"at": "a4", "cells": ["金属丝直径、薄板厚度", "{螺旋测微器}", "0.01 mm"]}], "size": 32, "rowHeight": 72}], "callout": {"label": "要点", "at": "a5", "text": "看{长度大小}和{所需精度}选工具"}, "beat": {"k": "sisters", "at": "a4b", "text": "长短不同\n{工具也不同|red}"}}} />;

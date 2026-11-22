import React from 'react';
import {AutoScene} from '../components/auto';

export const Sig: React.FC = () => <AutoScene k="sig" d={{"tag": "考点六", "title": "有效数字", "blocks": [{"t": "rule", "tag": "定义", "at": "f1", "text": "带有{一位不可靠数字}的近似数字", "c": "red"}, {"t": "table", "at": "f2", "head": ["数值", "有效数字位数", "说明"], "cols": "1.2fr 1fr 2fr", "rows": [{"at": "f2", "cells": ["0.0350 m", "{3} 位", "前面的 0 只定位"]}, {"at": "f3", "cells": ["19.0 mm", "{3} 位", "精确到 0.1 mm"]}, {"at": "f3", "cells": ["19 mm", "2 位", "精确到 1 mm"]}, {"at": "f4", "cells": ["3.60×10^3 m", "{3} 位", "科学记数法"]}], "size": 30, "rowHeight": 58}], "callout": {"label": "易错", "at": "f5", "text": "末尾的 0 {不能随意增减}；换单位位数不变"}}} />;

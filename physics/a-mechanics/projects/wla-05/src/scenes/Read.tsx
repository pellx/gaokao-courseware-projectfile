import React from 'react';
import {AutoScene} from '../components/auto';

export const Read: React.FC = () => <AutoScene k="read" d={{"tag": "考点一", "title": "图像中的物理量", "blocks": [{"t": "rule", "tag": "先看", "at": "r1", "text": "{坐标轴}：物理量和单位", "c": "red", "size": 36}, {"t": "table", "at": "r2", "head": ["要素", "含义"], "cols": "1fr 2.4fr", "rows": [{"at": "r2", "cells": ["{斜率}", "Δ纵 / Δ横"]}, {"at": "r2", "cells": ["{面积|orange}", "纵 × 横 的累积"]}, {"at": "r2", "cells": ["截距", "图线与坐标轴的交点"]}, {"at": "r2", "cells": ["交点", "两图线在同一横坐标处纵坐标相同"]}], "size": 30, "rowHeight": 56}], "callout": {"label": "要点", "at": "r4", "text": "坐标轴不同，同样的图线{意义不同}"}, "beat": {"k": "desk", "at": "r3b", "text": "读图第一步\n看清{坐标轴|red}"}}} />;

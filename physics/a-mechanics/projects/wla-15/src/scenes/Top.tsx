import React from 'react';
import {AutoScene} from '../components/auto';

export const Top: React.FC = () => <AutoScene k="top" d={{"tag": "考点九", "title": "斜抛运动的最高点", "blocks": [{"t": "table", "at": "i1", "head": ["物理量", "最高点"], "cols": "1fr 1.4fr", "rows": [{"at": "i1", "cells": ["竖直分速度", "0"]}, {"at": "i2", "cells": ["速度", "{v_0cosθ}，水平"]}, {"at": "i3", "cells": ["加速度", "{g}，竖直向下"]}], "size": 34, "rowHeight": 62}], "callout": {"label": "易错", "at": "i4", "text": "最高点 v ≠ 0、a = g，{不是平衡}"}, "beat": {"k": "bat", "at": "i2b", "text": "最高点\n竖直速度为 0\n{水平速度还在|red}"}}} />;

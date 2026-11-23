import React from 'react';
import {AutoScene} from '../components/auto';

export const Explain: React.FC = () => <AutoScene k="explain" d={{"tag": "考点八", "title": "方程对规律的解释", "blocks": [{"t": "table", "at": "h1", "head": ["实验规律", "方程的解释"], "cols": "1fr 1.4fr", "rows": [{"at": "h1", "cells": ["截止频率", "hν < W_0，电子{不能逸出}"]}, {"at": "h2", "cells": ["U_c 只与频率有关", "E_k 随 {ν 增大}而增大"]}, {"at": "h3", "cells": ["光强 → 饱和电流", "光越强，{光子数}越多"]}], "size": 30, "rowHeight": 66}], "callout": {"label": "要点", "at": "h4", "text": "频率管{能量}，光强管{数目}"}, "beat": {"k": "blob", "at": "h3b", "text": "能量不够\n{出不来|red}"}}} />;

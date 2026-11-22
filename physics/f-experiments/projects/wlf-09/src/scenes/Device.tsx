import React from 'react';
import {AutoScene} from '../components/auto';

export const Device: React.FC = () => <AutoScene k="device" d={{"tag": "考点三", "title": "案例 1 的器材及作用", "blocks": [{"t": "table", "at": "d1", "head": ["器材", "作用"], "cols": "1fr 2fr", "rows": [{"at": "d1", "cells": ["打点计时器（竖直固定）", "在纸带上打点，记录{时间}"]}, {"at": "d2", "cells": ["纸带、刻度尺", "记录位置，测{下落高度}"]}, {"at": "d3", "cells": ["重物", "{质量大、体积小}，减小空气阻力影响"]}, {"at": "d1", "cells": ["铁架台", "固定打点计时器"]}], "size": 32, "rowHeight": 64}], "callout": {"label": "易错", "at": "d4", "text": "重物要{密度大}；{不用秒表}，时间由打点计时器给出"}}} />;

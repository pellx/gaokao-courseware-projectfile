import React from 'react';
import {AutoScene} from '../components/auto';

export const Device: React.FC = () => <AutoScene k="device" d={{"tag": "考点四", "title": "描轨迹的器材及作用", "blocks": [{"t": "table", "at": "d1", "head": ["器材", "作用"], "cols": "1fr 2.4fr", "rows": [{"at": "d1", "cells": ["斜槽", "使小球获得{水平初速度}"]}, {"at": "d2", "cells": ["背板、白纸、复写纸", "{记录}小球的落点"]}, {"at": "d3", "cells": ["可调挡板", "确定小球{经过的位置}"]}, {"at": "d4", "cells": ["铅垂线", "确定{竖直方向}"]}], "size": 32, "rowHeight": 66}], "callout": {"label": "要点", "at": "d4", "text": "{铅垂线}确定竖直方向，画出 y 轴"}}} />;

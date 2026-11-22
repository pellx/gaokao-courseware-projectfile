import React from 'react';
import {AutoScene} from '../components/auto';

export const Points: React.FC = () => <AutoScene k="points" d={{"tag": "考点七", "title": "案例 2 的数据处理", "blocks": [{"t": "text", "at": "p2", "text": "用{尽量小的圆}圈住多次落点，{圆心}为平均落点", "size": 32}, {"t": "table", "at": "p3", "head": ["落点", "含义"], "cols": "1fr 3fr", "rows": [{"at": "p3", "cells": ["P", "入射小球{单独}滚下"]}, {"at": "p3", "cells": ["M", "碰后{入射小球}"]}, {"at": "p3", "cells": ["N", "碰后{被碰小球}"]}], "size": 30, "rowHeight": 56}, {"t": "big", "at": "p4", "text": "{m_1·OP} = {m_1·OM + m_2·ON|orange}", "size": 46}], "callout": {"label": "要点", "at": "p4", "text": "验证 {m_1·OP = m_1·OM + m_2·ON}"}, "beat": {"k": "crowd", "at": "p2b", "text": "挤成一团\n小圆的{圆心|red}是平均落点"}}} />;

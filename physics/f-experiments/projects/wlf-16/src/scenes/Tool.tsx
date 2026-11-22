import React from 'react';
import {AutoScene} from '../components/auto';

export const Tool: React.FC = () => <AutoScene k="tool" d={{"tag": "考点三", "title": "器材及作用", "blocks": [{"t": "table", "at": "t1", "head": ["器材", "作用"], "cols": "1fr 1.8fr", "rows": [{"at": "t1", "cells": ["条形磁体", "提供{原磁场}"]}, {"at": "t2", "cells": ["绕向已知的线圈", "闭合回路的一部分"]}, {"at": "t3", "cells": ["灵敏电流表（零刻度在中央）", "显示{感应电流的方向}"]}, {"at": "t4", "cells": ["导线", "连成{闭合回路}"]}], "size": 30, "rowHeight": 60}], "callout": {"label": "要点", "at": "t4", "text": "电流表：{零刻度在中央}，指针能向两侧偏"}, "beat": {"k": "a1", "at": "t3b", "text": "盯住指针\n{往哪边偏|red}"}}} />;

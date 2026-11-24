import React from 'react';
import {AutoScene} from '../components/auto';

export const Tool: React.FC = () => <AutoScene k="tool" d={{"tag": "考点三", "title": "器材及作用", "blocks": [{"t": "table", "at": "t1", "head": ["器材", "作用"], "cols": "1fr 1.8fr", "rows": [{"at": "t1", "cells": ["玻璃砖（两面平行）", "{待测介质}"]}, {"at": "t2", "cells": ["白纸、木板、图钉", "固定白纸，{画光路}"]}, {"at": "t3", "cells": ["大头针", "确定{光线的位置}"]}, {"at": "t4", "cells": ["刻度尺、铅笔、量角器", "画线、{测角度}"]}], "size": 30, "rowHeight": 64}], "callout": {"label": "要点", "at": "t5", "text": "用{大头针}标出光线的位置"}}} />;

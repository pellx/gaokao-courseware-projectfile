import React from 'react';
import {AutoScene} from '../components/auto';

export const Vs: React.FC = () => <AutoScene k="vs" d={{"tag": "考点五", "title": "干涉与衍射图样", "blocks": [{"t": "table", "at": "e1", "head": ["", "双缝干涉", "单缝衍射"], "cols": "1fr 1.4fr 1.4fr", "rows": [{"at": "e2", "cells": ["条纹宽度", "{等间距}", "中央{最宽}"]}, {"at": "e3", "cells": ["亮度", "基本相同", "中央最亮，两侧变暗"]}], "size": 34, "rowHeight": 78}], "callout": {"label": "易错", "at": "e4", "text": "中央{特别宽}的是衍射"}}} />;

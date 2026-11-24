import React from 'react';
import {AutoScene} from '../components/auto';

export const Observe: React.FC = () => <AutoScene k="observe" d={{"tag": "考点七", "title": "观察现象", "blocks": [{"t": "table", "at": "o1", "head": ["光", "条纹间距", "说明"], "cols": "1fr 1fr 2fr", "rows": [{"at": "o2", "cells": ["红光", "{大}", "波长最长"]}, {"at": "o2", "cells": ["绿光、紫光", "较小", "波长较短"]}, {"at": "o3", "cells": ["白光", "彩色条纹", "中央为{白色亮条纹}"]}], "size": 30, "rowHeight": 66}], "callout": {"label": "要点", "at": "o4", "text": "波长越长，条纹间距{越大}"}, "beat": {"k": "stage", "at": "o3b", "text": "颜色不同，波长不同\n{红光|red}条纹最宽"}}} />;

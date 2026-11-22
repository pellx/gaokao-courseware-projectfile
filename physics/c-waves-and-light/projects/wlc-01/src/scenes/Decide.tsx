import React from 'react';
import {AutoScene} from '../components/auto';

export const Decide: React.FC = () => <AutoScene k="decide" d={{"tag": "考点七", "title": "各量由什么决定", "blocks": [{"t": "table", "at": "d1", "head": ["物理量", "决定因素"], "cols": "1fr 1.6fr", "rows": [{"at": "d1", "cells": ["频率 f、周期 T", "{波源}"]}, {"at": "d2", "cells": ["波速 v", "{介质}"]}, {"at": "d3", "cells": ["波长 λ", "波源和介质{共同}"]}], "size": 36, "rowHeight": 72}], "callout": {"label": "要点", "at": "d4", "text": "进入另一种介质：{频率不变}，v、λ 改变"}, "beat": {"k": "guitar", "at": "d3b", "text": "频率看{波源|red}\n波速看{介质|red}"}}} />;

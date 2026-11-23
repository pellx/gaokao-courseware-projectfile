import React from 'react';
import {AutoScene} from '../components/auto';

export const Alpha: React.FC = () => <AutoScene k="alpha" d={{"tag": "考点五", "title": "α 粒子散射实验", "blocks": [{"t": "chain", "steps": [{"at": "e1", "text": "α 粒子"}, {"at": "e1", "text": "轰击{金箔}"}, {"at": "e1", "text": "荧光屏\n观察偏转", "c": "orange"}], "arrows": []}, {"t": "table", "at": "e2", "head": ["α 粒子", "偏转情况"], "cols": "1fr 2fr", "rows": [{"at": "e2", "cells": ["{绝大多数}", "基本沿原方向前进"]}, {"at": "e3", "cells": ["少数", "{大角度}偏转"]}, {"at": "e4", "cells": ["{极少数}", "偏转角{大于 90°}"]}], "size": 32, "rowHeight": 64}], "callout": {"label": "要点", "at": "e5", "text": "绝大多数不偏，{极少数}超过 90°"}}} />;

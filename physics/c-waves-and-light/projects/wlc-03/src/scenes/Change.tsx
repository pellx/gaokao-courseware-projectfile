import React from 'react';
import {AutoScene} from '../components/auto';

export const Change: React.FC = () => <AutoScene k="change" d={{"tag": "考点六", "title": "光进入介质后的变化", "blocks": [{"t": "table", "at": "f1", "head": ["物理量", "变化"], "cols": "1fr 1.6fr", "rows": [{"at": "f1", "cells": ["频率 f", "{不变}"]}, {"at": "f2", "cells": ["速度 v", "变小，v = c/n"]}, {"at": "f3", "cells": ["波长 λ", "变短，{λ = λ_0 / n}"]}], "size": 36, "rowHeight": 72}], "callout": {"label": "要点", "at": "f4", "text": "颜色由{频率}决定"}}} />;

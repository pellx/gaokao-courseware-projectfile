import React from 'react';
import {AutoScene} from '../components/auto';

export const End: React.FC = () => <AutoScene k="end" d={{"tag": "考点八", "title": "实验结论", "blocks": [{"t": "table", "at": "n1", "head": ["保持不变", "结论"], "cols": "1fr 1.6fr", "rows": [{"at": "n1", "cells": ["r、ω", "F ∝ {m}"]}, {"at": "n2", "cells": ["m、ω", "F ∝ {r}"]}, {"at": "n2", "cells": ["m、r", "F ∝ {ω^2}"]}], "size": 32, "rowHeight": 60}, {"t": "big", "at": "n3", "text": "{F_n = mω^2r}", "size": 56}], "callout": {"label": "易错", "at": "n4", "text": "F 与 ω 是{二次方}关系：ω 变 2 倍，F 变 4 倍"}}} />;

import React from 'react';
import {AutoScene} from '../components/auto';

export const Data: React.FC = () => <AutoScene k="data" d={{"tag": "考点六", "title": "数据处理", "blocks": [{"t": "table", "at": "d1", "head": ["n_1", "n_2", "U_1", "U_2", "U_1/U_2", "n_1/n_2"], "cols": "repeat(6, 1fr)", "rows": [{"at": "d1", "cells": ["…", "…", "…", "…", "{?}", "{?}"]}, {"at": "d2", "cells": ["…", "…", "…", "…", "{?}", "{?}"]}], "size": 30, "rowHeight": 60}, {"t": "big", "at": "d3", "text": "比较 {U_1/U_2} 与 {n_1/n_2|orange}", "size": 44}], "callout": {"label": "要点", "at": "d4", "text": "比较{两个比值}是否相等"}}} />;

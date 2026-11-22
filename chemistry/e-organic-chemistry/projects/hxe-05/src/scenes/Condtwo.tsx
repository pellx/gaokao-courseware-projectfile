import React from 'react';
import {AutoScene} from '../components/auto';

export const Condtwo: React.FC = () => <AutoScene k="cond2" d={{"tag": "考点三", "title": "条件翻译（二）", "blocks": [{"t": "table", "at": "c21", "head": ["题目条件", "对应结构"], "cols": "1.8fr 1.8fr", "rows": [{"at": "c21", "cells": ["能水解", "{酯基}、酰胺基、碳卤键"]}, {"at": "c22", "cells": ["与 Na 反应", "—OH、—COOH"]}, {"at": "c22", "cells": ["与 NaOH 反应", "酚羟基、—COOH、酯基、碳卤键"]}, {"at": "c23", "cells": ["1 个酯基消耗 2 mol NaOH", "{酚酯}"]}], "size": 31, "rowHeight": 64}], "callout": {"label": "易错", "at": "c24", "text": "醇羟基{不与 NaOH 反应}"}}} />;

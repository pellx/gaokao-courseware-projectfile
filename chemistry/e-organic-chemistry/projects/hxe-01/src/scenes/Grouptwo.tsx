import React from 'react';
import {AutoScene} from '../components/auto';

export const Grouptwo: React.FC = () => <AutoScene k="fg2" d={{"tag": "考点三", "title": "常见官能团（二）", "blocks": [{"t": "table", "at": "f21", "head": ["官能团", "结构", "类别", "例"], "cols": "1.1fr 1fr 0.8fr 1.4fr", "rows": [{"at": "f21", "cells": ["{醛基}", "—CHO", "醛", "CH3CHO"]}, {"at": "f21", "cells": ["{酮羰基|orange}", "C=O（两边连烃基）", "酮", "CH3COCH3"]}, {"at": "f22", "cells": ["{羧基}", "—COOH", "羧酸", "CH3COOH"]}, {"at": "f23", "cells": ["{酯基}", "—COO—", "酯", "CH3COOC2H5"]}], "size": 30, "rowHeight": 62}], "callout": {"label": "易错", "at": "f24", "text": "醛基写 {—CHO}；碳上有 H 的是醛基"}}} />;

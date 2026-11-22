import React from 'react';
import {AutoScene} from '../components/auto';

export const Hybrid: React.FC = () => <AutoScene k="hybrid" d={{"tag": "考点二", "title": "碳原子的杂化方式", "blocks": [{"t": "table", "at": "hy1", "head": ["碳的成键", "杂化", "构型", "例"], "cols": "1.4fr 0.8fr 1fr 1.6fr", "rows": [{"at": "hy1", "cells": ["4 个单键", "{sp³}", "四面体", "CH4、—CH3"]}, {"at": "hy2", "cells": ["1 个双键", "{sp²|orange}", "平面三角形", "C=C、苯环、C=O"]}, {"at": "hy3", "cells": ["1 个三键", "{sp}", "直线形", "C≡C、C≡N"]}], "size": 31, "rowHeight": 66}], "callout": {"label": "易错", "at": "hy4", "text": "同一分子中不同碳{杂化方式可以不同}"}}} />;

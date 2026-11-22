import React from 'react';
import {AutoScene} from '../components/auto';

export const Omega: React.FC = () => <AutoScene k="omega" d={{"tag": "考点一", "title": "不饱和度 Ω", "blocks": [{"t": "big", "at": "om1", "text": "Ω = {(2x + 2 − y) ÷ 2}　（C_xH_yO_z）", "size": 42}, {"t": "table", "at": "om2", "head": ["结构", "Ω"], "cols": "1.4fr 1fr", "rows": [{"at": "om2", "cells": ["双键（C=C、C=O）或一个环", "1"]}, {"at": "om2", "cells": ["三键", "2"]}, {"at": "om2", "cells": ["苯环", "{4}"]}], "size": 32, "rowHeight": 58}, {"t": "text", "at": "om3", "text": "C8H8O2：Ω = {5} = 苯环 4 + C=O 1", "size": 33, "center": true}], "callout": {"label": "解题方法", "at": "om4", "text": "Ω ≥ 4 先想{苯环}"}}} />;

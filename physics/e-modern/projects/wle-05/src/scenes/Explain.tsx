import React from 'react';
import {AutoScene} from '../components/auto';

export const Explain: React.FC = () => <AutoScene k="explain" d={{"tag": "考点七", "title": "对实验现象的解释", "blocks": [{"t": "table", "at": "g1", "head": ["现象", "解释"], "cols": "1fr 1.6fr", "rows": [{"at": "g2", "cells": ["绝大多数不偏", "原子内部{绝大部分是空的}"]}, {"at": "g3", "cells": ["极少数大角度偏转", "离核很近，受{很强的库仑斥力}"]}, {"at": "g4", "cells": ["电子影响可忽略", "电子质量{很小}"]}], "size": 32, "rowHeight": 66}], "callout": {"label": "易错", "at": "g5", "text": "大角度偏转来自原子核的{库仑斥力}"}}} />;

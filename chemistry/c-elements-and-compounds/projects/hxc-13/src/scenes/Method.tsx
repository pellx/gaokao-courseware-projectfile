import React from 'react';
import {AutoScene} from '../components/auto';

export const Method: React.FC = () => <AutoScene k="method" d={{"tag": "考点二", "title": "冶炼方法的选择", "blocks": [{"t": "table", "at": "me1", "head": ["金属", "方法"], "cols": "2fr 1.6fr", "rows": [{"at": "me1", "cells": ["K、Ca、Na、Mg、Al", "{电解法}"]}, {"at": "me2", "cells": ["Zn、Fe、Sn、Pb、Cu", "{热还原法|orange}"]}, {"at": "me3", "cells": ["Hg、Ag", "{热分解法|green}"]}, {"at": "me3", "cells": ["Pt、Au", "物理方法"]}], "size": 34, "rowHeight": 72}], "callout": {"label": "考法", "at": "me4", "text": "先找金属在{活动性顺序}中的位置"}}} />;

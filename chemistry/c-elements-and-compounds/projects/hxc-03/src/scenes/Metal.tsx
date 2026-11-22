import React from 'react';
import {AutoScene} from '../components/auto';

export const Metal: React.FC = () => <AutoScene k="metal" d={{"tag": "考点二", "title": "氯气与金属、氢气", "blocks": [{"t": "table", "at": "me1", "head": ["反应", "产物", "现象"], "cols": "1.4fr 1fr 2fr", "rows": [{"at": "me1", "cells": ["Fe + Cl2（点燃）", "{FeCl3}", "棕褐色的烟"]}, {"at": "me2", "cells": ["Cu + Cl2（点燃）", "CuCl2", "棕黄色的烟"]}, {"at": "me2", "cells": ["Na + Cl2（点燃）", "NaCl", "白烟"]}, {"at": "me3", "cells": ["H2 + Cl2（点燃）", "HCl", "{苍白色火焰}，瓶口白雾"]}], "size": 31, "rowHeight": 64}], "callout": {"label": "易错", "at": "me4", "text": "Fe + Cl2 {只生成 FeCl3}；燃烧不一定需要 O2"}}} />;

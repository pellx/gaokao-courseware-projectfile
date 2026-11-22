import React from 'react';
import {AutoScene} from '../components/auto';

export const Shape: React.FC = () => <AutoScene k="shape" d={{"tag": "考点四", "title": "四种基本构型", "blocks": [{"t": "table", "at": "sh1", "head": ["分子", "构型", "共面 / 共线"], "cols": "1fr 1.2fr 1.8fr", "rows": [{"at": "sh1", "cells": ["CH4", "正四面体", "最多 {3} 个原子共面"]}, {"at": "sh2", "cells": ["CH2=CH2", "平面", "{6} 个原子共面"]}, {"at": "sh2", "cells": ["CH≡CH", "直线", "{4} 个原子共线"]}, {"at": "sh3", "cells": ["C6H6", "平面正六边形", "{12} 个原子共面"]}], "size": 31, "rowHeight": 62}], "callout": {"label": "考法", "at": "sh4", "text": "有 {sp³ 碳}（如 —CH3）→ 所有原子不可能共面"}, "beat": {"k": "keyboard", "at": "sh3b", "text": "乙炔：{一条直线|red}\n乙烯、苯：{一个平面|red}"}}} />;

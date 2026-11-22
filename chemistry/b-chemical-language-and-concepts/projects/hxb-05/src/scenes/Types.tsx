import React from 'react';
import {AutoScene} from '../components/auto';

export const Types: React.FC = () => <AutoScene k="types" d={{"tag": "考点二", "title": "与四种基本反应类型的关系", "blocks": [{"t": "table", "at": "ty1", "head": ["反应类型", "是不是氧化还原", "例子"], "cols": "1fr 1.3fr 1.8fr", "rows": [{"at": "ty1", "cells": ["置换反应", "{一定是}", "Fe + CuSO4 = FeSO4 + Cu"]}, {"at": "ty1", "cells": ["复分解反应", "{一定不是|green}", "NaOH + HCl = NaCl + H2O"]}, {"at": "ty2", "cells": ["化合反应", "{有单质参加的是|orange}", "2H2 + O2 = 2H2O"]}, {"at": "ty2", "cells": ["分解反应", "{有单质生成的是|orange}", "2KClO3 = 2KCl + 3O2↑"]}], "size": 30, "rowHeight": 64}, {"t": "mark", "ok": false, "at": "ty3", "text": "有单质参加的反应一定是氧化还原（反例：3O2 = 2O3）", "size": 30}], "callout": {"label": "易错", "at": "ty4", "text": "同素异形体转化（O2 → O3）{不是}氧化还原反应"}}} />;

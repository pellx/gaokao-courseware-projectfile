import React from 'react';
import {AutoScene} from '../components/auto';

export const Ammonia: React.FC = () => <AutoScene k="nh3" d={{"tag": "考点四", "title": "合成氨的反应特点", "blocks": [{"t": "big", "at": "nh1", "text": "N2(g) + 3H2(g) ⇌ 2NH3(g)　ΔH < 0", "size": 40}, {"t": "table", "at": "nh2", "head": ["条件", "对速率", "对平衡"], "cols": "1fr 1.4fr 1.4fr", "rows": [{"at": "nh2", "cells": ["温度", "{高温}有利", "{低温|orange}有利"]}, {"at": "nh2", "cells": ["压强", "高压有利", "高压有利"]}, {"at": "nh3", "cells": ["催化剂", "有利", "无影响"]}, {"at": "nh3", "cells": ["分离 NH3", "—", "有利"]}], "size": 32, "rowHeight": 62}], "callout": {"label": "易错", "at": "nh4", "text": "矛盾在{温度}：速率要高温，平衡要低温"}}} />;

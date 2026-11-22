import React from 'react';
import {AutoScene} from '../components/auto';

export const Polymer: React.FC = () => <AutoScene k="polymer" d={{"tag": "考点五", "title": "有机高分子材料", "blocks": [{"t": "table", "at": "po1", "head": ["材料", "用途"], "cols": "1.4fr 2.2fr", "rows": [{"at": "po1", "cells": ["芳纶", "防弹衣、消防服"]}, {"at": "po1", "cells": ["{聚四氟乙烯}", "不粘锅涂层"]}, {"at": "po1", "cells": ["聚乳酸", "{可降解塑料}"]}, {"at": "po1", "cells": ["高吸水性树脂", "尿不湿"]}], "size": 32, "rowHeight": 60}], "callout": {"label": "易错", "at": "po4", "text": "“光导纤维”是{无机}的 SiO2"}, "beat": {"k": "peace", "at": "po3b", "text": "一件东西\n{几种材料|red}"}}} />;

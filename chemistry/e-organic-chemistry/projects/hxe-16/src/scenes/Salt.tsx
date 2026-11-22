import React from 'react';
import {AutoScene} from '../components/auto';

export const Salt: React.FC = () => <AutoScene k="salt" d={{"tag": "考点五", "title": "盐析与变性", "blocks": [{"t": "table", "at": "sa1", "head": ["比较项目", "盐析", "变性"], "cols": "1fr 1.8fr 1.8fr", "rows": [{"at": "sa1", "cells": ["条件", "浓的{轻金属盐、铵盐}", "加热、强酸碱、{重金属盐}、乙醇等"]}, {"at": "sa2", "cells": ["可逆性", "{可逆}", "{不可逆}"]}, {"at": "sa2", "cells": ["用途", "分离提纯蛋白质", "消毒杀菌"]}], "size": 30, "rowHeight": 70}], "callout": {"label": "易错", "at": "sa4", "text": "(NH4)2SO4：盐析；{CuSO4：变性}"}}} />;

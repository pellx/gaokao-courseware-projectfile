import React from 'react';
import {AutoScene} from '../components/auto';

export const Hydro: React.FC = () => <AutoScene k="hydro" d={{"tag": "考点四", "title": "酯的水解", "blocks": [{"t": "table", "at": "hy1", "head": ["条件", "产物", "程度"], "cols": "1fr 1.8fr 1fr", "rows": [{"at": "hy1", "cells": ["酸性", "羧酸 + 醇", "{可逆}"]}, {"at": "hy2", "cells": ["碱性", "{羧酸盐} + 醇", "{彻底}"]}], "size": 34, "rowHeight": 72}, {"t": "text", "at": "hy3", "text": "CH3COOC2H5 + NaOH → CH3COONa + C2H5OH", "size": 34, "center": true}], "callout": {"label": "易错", "at": "hy4", "text": "碱性水解生成{羧酸钠}，不是羧酸"}, "beat": {"k": "ribbon", "at": "hy3b", "text": "碱性水解\n{不可逆|red}"}}} />;

import React from 'react';
import {AutoScene} from '../components/auto';

export const Residue: React.FC = () => <AutoScene k="residue" d={{"tag": "考点七", "title": "浸出液与滤渣的成分", "blocks": [{"t": "table", "at": "rs1", "head": ["浸出", "进入滤渣"], "cols": "1fr 3fr", "rows": [{"at": "rs1", "cells": ["酸浸", "{SiO2}"]}, {"at": "rs1", "cells": ["硫酸浸", "{CaSO4、PbSO4、BaSO4}"]}, {"at": "rs2", "cells": ["碱浸", "Fe2O3、CuO、MgO 等{碱性氧化物}"]}], "size": 32, "rowHeight": 66}, {"t": "text", "at": "rs3", "text": "还要看{价态}：Fe^2+ 还是 Fe^3+", "size": 32, "center": true}], "callout": {"label": "易错", "at": "rs4", "text": "硫酸浸含钙矿物：滤渣还有 {CaSO4}"}}} />;

import React from 'react';
import {AutoScene} from '../components/auto';

export const Transfer: React.FC = () => <AutoScene k="transfer" d={{"tag": "考点七", "title": "转移电子数的易错计算", "blocks": [{"t": "table", "at": "tr1", "head": ["反应", "变价", "转移电子"], "cols": "2.2fr 1.6fr 1.2fr", "rows": [{"at": "tr1", "cells": ["2Na2O2 + 2H2O = 4NaOH + O2↑", "O：−1 → 0、−2", "1 mol Na2O2 → {1 mol}"]}, {"at": "tr2", "cells": ["Cl2 + 2NaOH = NaCl + NaClO + H2O", "Cl：0 → −1、+1", "1 mol Cl2 → {1 mol}"]}, {"at": "tr3", "cells": ["2Fe + 3Cl2 = 2FeCl3", "Fe：0 → +3", "1 mol Fe → {3 mol|orange}"]}, {"at": "tr3", "cells": ["Fe + S = FeS", "Fe：0 → +2", "1 mol Fe → {2 mol|orange}"]}], "size": 29, "rowHeight": 64}], "callout": {"label": "易错", "at": "tr4", "text": "歧化反应：转移电子只算{一边}，不能把得和失相加"}}} />;

import React from 'react';
import {AutoScene} from '../components/auto';

export const Acidic: React.FC = () => <AutoScene k="acidic" d={{"tag": "考点二", "title": "SO2 的酸性氧化物通性", "blocks": [{"t": "big", "at": "ac1", "text": "SO2 + H2O ⇌ H2SO3", "size": 44}, {"t": "table", "at": "ac2", "head": ["反应", "产物"], "cols": "1.6fr 1.6fr", "rows": [{"at": "ac2", "cells": ["少量 SO2 + NaOH", "Na2SO3 + H2O"]}, {"at": "ac2", "cells": ["过量 SO2 + NaOH", "{NaHSO3|orange}"]}, {"at": "ac2", "cells": ["SO2 + CaO", "CaSO3"]}, {"at": "ac3", "cells": ["SO2 通入澄清石灰水", "先浑浊，过量后{变澄清|orange}"]}, {"at": "ac4", "cells": ["SO2 通入 BaCl2 溶液", "{无沉淀}"]}], "size": 30, "rowHeight": 56}], "callout": {"label": "易错", "at": "ac4", "text": "SO2 + BaCl2 溶液：{不反应}，无沉淀"}}} />;

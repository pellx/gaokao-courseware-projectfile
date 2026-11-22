import React from 'react';
import {AutoScene} from '../components/auto';

export const Water: React.FC = () => <AutoScene k="water" d={{"tag": "考点三", "title": "水电离出的 c(H^+)", "blocks": [{"t": "table", "at": "wa1", "head": ["溶液（25 ℃）", "水电离出的 c(H^+)", "对水的电离"], "cols": "1.5fr 1.5fr 1fr", "rows": [{"at": "wa1", "cells": ["0.01 mol/L 盐酸", "{10^-12} mol/L（看 OH^-）", "抑制"]}, {"at": "wa2", "cells": ["0.01 mol/L NaOH", "{10^-12} mol/L（看 H^+）", "抑制"]}, {"at": "wa3", "cells": ["pH = 5 的 NH4Cl", "{10^-5|orange} mol/L", "促进"]}], "size": 30, "rowHeight": 66}], "callout": {"label": "解题方法", "at": "wa4", "text": "酸看 {OH^-}，碱看 {H^+}，水解盐看{较大的}"}, "beat": {"k": "shock", "at": "wa3b", "text": "水电离 c(H^+) = 10^-12\n可能是{酸|red}，也可能是{碱|red}"}}} />;

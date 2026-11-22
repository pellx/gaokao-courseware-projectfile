import React from 'react';
import {AutoScene} from '../components/auto';

export const Dryer: React.FC = () => <AutoScene k="dryer" d={{"tag": "考点五", "title": "干燥剂的选择", "blocks": [{"t": "table", "at": "dy1", "head": ["干燥剂", "性质", "不能干燥"], "cols": "1.1fr 0.8fr 2.2fr", "rows": [{"at": "dy1", "cells": ["浓硫酸", "酸性", "{NH3}；H2S、HI、HBr"]}, {"at": "dy2", "cells": ["碱石灰", "碱性", "Cl2、CO2、SO2、HCl"]}, {"at": "dy3", "cells": ["无水 CaCl2", "中性", "{NH3}"]}], "size": 31, "rowHeight": 68}], "callout": {"label": "易错", "at": "dy4", "text": "浓硫酸{能干燥 SO2}"}, "beat": {"k": "azusa", "at": "dy3b", "text": "{酸配酸、碱配碱|red}"}}} />;

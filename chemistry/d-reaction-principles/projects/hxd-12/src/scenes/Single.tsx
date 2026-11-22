import React from 'react';
import {AutoScene} from '../components/auto';

export const Single: React.FC = () => <AutoScene k="single" d={{"tag": "考点五", "title": "单一溶液的排序", "blocks": [{"t": "table", "at": "si1", "head": ["溶液", "粒子浓度大小"], "cols": "0.9fr 3fr", "rows": [{"at": "si1", "cells": ["NH4Cl", "c(Cl^-) > c(NH4^+) > {c(H^+)} > c(OH^-)"]}, {"at": "si2", "cells": ["Na2CO3", "c(Na^+) > c(CO3^2-) > c(OH^-) > {c(HCO3^-)|orange} > c(H^+)"]}, {"at": "si3", "cells": ["NaHCO3", "c(Na^+) > c(HCO3^-) > c(OH^-) > c(H^+)；c(H2CO3) {>} c(CO3^2-)"]}], "size": 30, "rowHeight": 66}], "callout": {"label": "易错", "at": "si4", "text": "NaHSO3：电离 > 水解，c(SO3^2-) {>} c(H2SO3)"}}} />;

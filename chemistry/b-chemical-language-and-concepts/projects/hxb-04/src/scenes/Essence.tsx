import React from 'react';
import {AutoScene} from '../components/auto';

export const Essence: React.FC = () => <AutoScene k="essence" d={{"tag": "考点一", "title": "离子反应的实质与条件", "blocks": [{"t": "big", "at": "es1", "text": "实质：溶液中某些离子的{浓度减小}", "size": 42}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "沉淀", "at": "es2", "text": "BaSO4、AgCl、CaCO3", "c": "red"}]}, {"blocks": [{"t": "rule", "tag": "气体", "at": "es2", "text": "CO2、NH3、SO2", "c": "red"}]}, {"blocks": [{"t": "rule", "tag": "难电离", "at": "es2", "text": "H2O、弱酸、弱碱", "c": "red"}]}]}, {"t": "rule", "tag": "氧化还原", "at": "es3", "text": "Fe^3+ 与 I^-；酸性条件下 NO3^- 与 Fe^2+", "c": "orange"}], "callout": {"label": "考法", "at": "es4", "text": "混合后有{沉淀、气体、难电离物质}或发生氧化还原 → 能反应"}}} />;

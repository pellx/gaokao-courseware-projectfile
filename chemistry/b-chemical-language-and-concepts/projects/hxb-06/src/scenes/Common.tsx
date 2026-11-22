import React from 'react';
import {AutoScene} from '../components/auto';

export const Common: React.FC = () => <AutoScene k="common" d={{"tag": "考点一", "title": "常见的氧化剂和还原剂", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "氧化剂 → 还原产物", "at": "cm2", "lines": ["Cl2 → Cl^-　　O2 → O^2-", "浓 H2SO4 → {SO2}", "浓 HNO3 → {NO2}　稀 HNO3 → {NO}", "Fe^3+ → Fe^2+　　H2O2 → H2O", {"at": "cm3", "text": "酸性 KMnO4 → {Mn^2+}　K2Cr2O7 → {Cr^3+}"}], "c": "orange", "size": 30}]}, {"blocks": [{"t": "panel", "title": "还原剂 → 氧化产物", "at": "cm4", "lines": ["活泼金属 → 金属阳离子", "Fe^2+ → Fe^3+", "SO2、SO3^2- → {SO4^2-}", "I^- → I2　　S^2- → S", "H2、C、CO"], "c": "red", "size": 30}]}]}], "callout": {"label": "考法", "at": "cm5", "text": "陌生方程式第一步{定产物}，靠的就是这张表"}}} />;

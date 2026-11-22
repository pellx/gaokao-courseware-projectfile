import React from 'react';
import {AutoScene} from '../components/auto';

export const Microbe: React.FC = () => <AutoScene k="microbe" d={{"tag": "考点六", "title": "微生物燃料电池", "blocks": [{"t": "big", "at": "mb2", "text": "负极：C6H12O6 + 6H2O − 24e^- = {6CO2↑ + 24H^+}", "size": 34}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "H^+", "at": "mb4", "text": "移向{正极}", "c": "red", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "温度", "at": "mb3", "text": "过高微生物{失活}", "c": "orange", "size": 32}]}]}], "callout": {"label": "易错", "at": "mb4", "text": "H^+ 移向{正极}"}}} />;

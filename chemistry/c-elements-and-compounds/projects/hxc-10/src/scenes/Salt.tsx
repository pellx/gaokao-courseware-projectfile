import React from 'react';
import {AutoScene} from '../components/auto';

export const Salt: React.FC = () => <AutoScene k="salt" d={{"tag": "考点六", "title": "铵盐的性质", "blocks": [{"t": "rule", "tag": "溶解", "at": "sa1", "text": "铵盐都{易溶于水}", "c": "red", "size": 32}, {"t": "rule", "tag": "受热分解", "at": "sa1", "text": "NH4Cl ═△═ NH3↑ + HCl↑（遇冷又化合）", "c": "orange", "size": 32}, {"t": "rule", "tag": "碳铵", "at": "sa2", "text": "NH4HCO3 ═△═ NH3↑ + CO2↑ + H2O：{低温密封保存|orange}", "c": "orange", "size": 32}, {"t": "rule", "tag": "与碱", "at": "sa3", "text": "NH4^+ + OH^- ═△═ NH3↑ + H2O：{不与碱性物质混用}", "c": "green", "size": 32}], "callout": {"label": "易错", "at": "sa4", "text": "NH4Cl 分解再化合是{化学变化}，不是升华"}}} />;

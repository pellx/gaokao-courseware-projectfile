import React from 'react';
import {AutoScene} from '../components/auto';

export const Melt: React.FC = () => <AutoScene k="melt" d={{"tag": "考点五", "title": "燃料电池：熔融电解质", "blocks": [{"t": "table", "at": "ml1", "head": ["电解质", "传导", "正极"], "cols": "1.2fr 0.8fr 2.2fr", "rows": [{"at": "ml1", "cells": ["熔融碳酸盐", "{CO3^2-}", "O2 + 2CO2 + 4e^- = 2CO3^2-"]}, {"at": "ml3", "cells": ["固体氧化物", "{O^2-}", "O2 + 4e^- = 2O^2-"]}], "size": 30, "rowHeight": 70}, {"t": "big", "at": "ml4", "text": "酸补 H^+　碱补 OH^-　熔融补 {CO3^2- / O^2-}", "size": 36}], "callout": {"label": "解题方法", "at": "ml4", "text": "看电解质中{能移动的离子}来配平"}, "beat": {"k": "amp", "at": "ml3b", "text": "电解质换了\n{补的离子跟着换|red}"}}} />;

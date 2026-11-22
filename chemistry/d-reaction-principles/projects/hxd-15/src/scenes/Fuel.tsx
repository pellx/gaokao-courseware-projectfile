import React from 'react';
import {AutoScene} from '../components/auto';

export const Fuel: React.FC = () => <AutoScene k="fuel" d={{"tag": "考点四", "title": "燃料电池：酸性与碱性", "blocks": [{"t": "table", "at": "fu2", "head": ["电解质", "负极", "正极"], "cols": "0.8fr 2fr 2fr", "rows": [{"at": "fu2", "cells": ["酸性", "H2 − 2e^- = 2H^+", "O2 + 4H^+ + 4e^- = {2H2O}"]}, {"at": "fu3", "cells": ["碱性", "H2 + 2OH^- − 2e^- = 2H2O", "O2 + 2H2O + 4e^- = {4OH^-}"]}], "size": 29, "rowHeight": 70}, {"t": "text", "at": "fu4", "text": "碱性甲烷：CH4 + 10OH^- − 8e^- = {CO3^2-} + 7H2O", "size": 32, "center": true}], "callout": {"label": "易错", "at": "fu5", "text": "碱性燃料电池工作后 pH {减小}"}}} />;

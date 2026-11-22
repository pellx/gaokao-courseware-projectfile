import React from 'react';
import {AutoScene} from '../components/auto';

export const Phenyl: React.FC = () => <AutoScene k="phenyl" d={{"tag": "考点五", "title": "酚酯的水解", "blocks": [{"t": "big", "at": "pe3", "text": "CH3COOC6H5 + {2NaOH} → CH3COONa + C6H5ONa + H2O", "size": 36}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "普通酯", "at": "pe4", "text": "1 mol ～ 1 mol NaOH", "c": "red", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "酚酯", "at": "pe2", "text": "1 mol ～ {2 mol NaOH}", "c": "red", "size": 32}]}]}], "callout": {"label": "易错", "at": "pe4", "text": "{酚酯消耗 2 mol NaOH}"}}} />;

import React from 'react';
import {AutoScene} from '../components/auto';

export const Bipolar: React.FC = () => <AutoScene k="bipolar" d={{"tag": "考点六", "title": "双极膜", "blocks": [{"t": "big", "at": "bp1", "text": "双极膜：H2O → {H^+} + {OH^-|orange}", "size": 46}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "H^+", "at": "bp2", "text": "移向{阴极}一侧", "c": "red", "size": 34}]}, {"blocks": [{"t": "rule", "tag": "OH^-", "at": "bp2", "text": "移向{阳极|orange}一侧", "c": "orange", "size": 34}]}]}], "callout": {"label": "解题方法", "at": "bp4", "text": "{H^+ 走向阴极}，OH^- 走向阳极"}}} />;

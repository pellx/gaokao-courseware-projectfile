import React from 'react';
import {AutoScene} from '../components/auto';

export const Synthesis: React.FC = () => <AutoScene k="synthesis" d={{"tag": "考点五", "title": "电化学合成", "blocks": [{"t": "items", "items": [{"at": "sy2", "text": "CO2 + 2H^+ + 2e^- = {HCOOH}"}, {"at": "sy3", "text": "N2 + 6H^+ + 6e^- = {2NH3}"}, {"at": "sy3", "text": "副反应：2H^+ + 2e^- = H2↑（降低选择性）"}], "size": 34}], "callout": {"label": "解题方法", "at": "sy4", "text": "由{化合价变化}算电子数"}, "beat": {"k": "guitar", "at": "sy3b", "text": "CO2、N2 被还原\n都在{阴极|red}"}}} />;

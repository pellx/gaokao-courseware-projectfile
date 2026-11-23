import React from 'react';
import {AutoScene} from '../components/auto';

export const Meaning: React.FC = () => <AutoScene k="meaning" d={{"tag": "考点七", "title": "E = U/d 的意义", "blocks": [{"t": "big", "at": "m1", "text": "E = {U/d}", "size": 60}, {"t": "items", "items": [{"at": "m1", "text": "沿电场方向{单位距离}降低的电势"}, {"at": "m2", "text": "E 的方向：电势{降低最快}的方向"}], "size": 32}], "callout": {"label": "要点", "at": "m3", "text": "1 V/m = {1 N/C}"}, "beat": {"k": "a3", "at": "m2b", "text": "沿电场方向\n电势{降得最快|red}"}}} />;

import React from 'react';
import {AutoScene} from '../components/auto';

export const Macro: React.FC = () => <AutoScene k="macro" d={{"tag": "考点七", "title": "宏观物体的波动性", "blocks": [{"t": "chain", "steps": [{"at": "g1", "text": "质量大\n{动量 p 很大}"}, {"at": "g2", "text": "λ = h/p\n{极小}"}, {"at": "g3", "text": "观察不到\n波动性", "c": "orange"}], "arrows": []}], "callout": {"label": "易错", "at": "g4", "text": "宏观物体{也有}波动性，只是观察不到"}, "beat": {"k": "tiny", "at": "g3b", "text": "波长\n{小得多|red}"}}} />;

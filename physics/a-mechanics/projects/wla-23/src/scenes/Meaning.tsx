import React from 'react';
import {AutoScene} from '../components/auto';

export const Meaning: React.FC = () => <AutoScene k="meaning" d={{"tag": "考点七", "title": "物理意义", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "big", "at": "g1", "text": "正功：动能{增加}", "size": 40}]}, {"blocks": [{"t": "big", "at": "g2", "text": "负功：动能{减少|orange}", "size": 40, "c": "orange", "soft": "orangeSoft"}]}]}, {"t": "text", "at": "g3", "text": "合力的功 = {动能变化的量度}", "size": 34}], "callout": {"label": "要点", "at": "g4", "text": "合力不做功，动能{不变}"}}} />;

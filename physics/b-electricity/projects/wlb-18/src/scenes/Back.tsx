import React from 'react';
import {AutoScene} from '../components/auto';

export const Back: React.FC = () => <AutoScene k="back" d={{"tag": "考点八", "title": "反电动势", "blocks": [{"t": "rule", "tag": "来源", "at": "h1", "text": "电动机线圈转动时{切割磁感线}", "c": "red", "size": 32}, {"t": "rule", "tag": "方向", "at": "h2", "text": "与电源电动势{相反}", "c": "orange", "size": 32}, {"t": "chain", "steps": [{"at": "h3", "text": "克服反电动势", "c": "orange"}, {"at": "h3", "text": "电能 → 机械能", "c": "red"}], "arrows": []}], "callout": {"label": "要点", "at": "h4", "text": "克服反电动势：电能 → {机械能}"}, "beat": {"k": "fan", "at": "h2b", "text": "风扇转动时\n线圈产生{反电动势|red}"}}} />;

import React from 'react';
import {AutoScene} from '../components/auto';

export const Distinguish: React.FC = () => <AutoScene k="distinguish" d={{"tag": "考点七", "title": "醛基与碳碳双键的区分", "blocks": [{"t": "rule", "tag": "干扰", "at": "di1", "text": "醛基也能使{溴水、酸性 KMnO4} 褪色", "c": "red", "size": 32}, {"t": "chain", "steps": [{"at": "di2", "text": "银氨溶液或\n新制 Cu(OH)2"}, {"at": "di2", "text": "{酸化}"}, {"at": "di2", "text": "加溴水"}], "arrows": [], "center": true, "size": 34}], "callout": {"label": "答题模板", "at": "di4", "text": "先氧化醛基，{再酸化}，最后加溴水"}}} />;

import React from 'react';
import {AutoScene} from '../components/auto';

export const Single: React.FC = () => <AutoScene k="single" d={{"tag": "考点六", "title": "单线桥法", "blocks": [{"t": "bridge", "at": "si2", "tokens": ["2Na", "+", "Cl2", "=", "2NaCl"], "arcs": [{"from": 0, "to": 2, "at": "si2", "text": "2e^-", "c": "red", "above": true}], "size": 56}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "双线桥", "at": "si3", "text": "两条线，标{得失}，看变价", "c": "orange"}]}, {"blocks": [{"t": "rule", "tag": "单线桥", "at": "si3", "text": "一条线，只标{总数}", "c": "red"}]}]}], "callout": {"label": "易错", "at": "si4", "text": "单线桥{不写得失}，从还原剂中的元素指向氧化剂中的元素"}, "beat": {"k": "gift2", "at": "si2b", "text": "一句话说清\n{谁把电子给了谁|red}"}}} />;

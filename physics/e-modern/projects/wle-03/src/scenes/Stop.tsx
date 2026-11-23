import React from 'react';
import {AutoScene} from '../components/auto';

export const Stop: React.FC = () => <AutoScene k="stop" d={{"tag": "考点五", "title": "遏止电压", "blocks": [{"t": "rule", "tag": "遏止电压 U_c", "at": "e1", "text": "使光电流减小到{零}的反向电压", "c": "red"}, {"t": "big", "at": "e2", "text": "eU_c = {E_k}（最大初动能）", "size": 52}, {"t": "row", "cols": [{"blocks": [{"t": "mark", "ok": true, "at": "e3", "text": "U_c 随{频率}增大而增大"}]}, {"blocks": [{"t": "mark", "ok": false, "at": "e4", "text": "U_c 与光强有关"}]}]}], "callout": {"label": "易错", "at": "e4", "text": "遏止电压只看{频率}，与光强无关"}}} />;

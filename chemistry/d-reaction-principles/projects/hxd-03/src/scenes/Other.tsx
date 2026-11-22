import React from 'react';
import {AutoScene} from '../components/auto';

export const Other: React.FC = () => <AutoScene k="other" d={{"tag": "考点六", "title": "其他因素", "blocks": [{"t": "items", "items": [{"at": "ot1", "text": "增大接触面积：粉碎、搅拌 → {加快}"}, {"at": "ot2", "text": "形成原电池：粗锌、加几滴 CuSO4 → {加快}"}, {"at": "ot3", "text": "光照、溶剂、超声波"}, {"at": "ot3", "text": "注意：浓硫酸与 Zn 不产生 H2；Fe 遇浓硫酸、浓硝酸{钝化|orange}"}], "size": 32}], "callout": {"label": "易错", "at": "ot4", "text": "加 CuSO4：速率加快，但 H2 {总量可能减少}"}}} />;

import React from 'react';
import {AutoScene} from '../components/auto';

export const Salt: React.FC = () => <AutoScene k="salt" d={{"tag": "考点六", "title": "粗盐提纯中的离子反应", "blocks": [{"t": "chain", "steps": [{"at": "sa1", "text": "BaCl2\n除 SO4^2-", "c": "orange"}, {"at": "sa2", "text": "Na2CO3\n除 Ca^2+、{Ba^2+}", "c": "red"}, {"at": "sa3", "text": "过滤", "c": "brown"}, {"at": "sa3", "text": "适量盐酸\n除 OH^-、CO3^2-", "c": "green"}], "arrows": [], "center": true, "size": 30}, {"t": "text", "at": "sa3", "text": "NaOH（除 Mg^2+）位置随意，只要在过滤之前", "size": 30, "center": true, "c": "muted"}, {"t": "big", "at": "sa2", "text": "{Na2CO3 在 BaCl2 之后}；{盐酸在过滤之后}", "size": 38}], "callout": {"label": "易错", "at": "sa4", "text": "先过滤再加盐酸，否则沉淀会{重新溶解}"}}} />;

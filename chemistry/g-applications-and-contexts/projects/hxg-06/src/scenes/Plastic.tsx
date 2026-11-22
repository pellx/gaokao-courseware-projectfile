import React from 'react';
import {AutoScene} from '../components/auto';

export const Plastic: React.FC = () => <AutoScene k="plastic" d={{"tag": "考点七", "title": "白色污染", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "mark", "ok": true, "at": "pl2", "text": "可降解塑料：聚乳酸（{含酯基}）", "size": 31}]}, {"blocks": [{"t": "mark", "ok": false, "at": "pl3", "text": "焚烧处理", "size": 31}]}]}, {"t": "text", "at": "pl4", "text": "难降解：聚乙烯、聚氯乙烯（{主链全是碳}）", "size": 33, "center": true}], "callout": {"label": "解题方法", "at": "pl4", "text": "能降解：主链有{酯基、酰胺基}"}}} />;

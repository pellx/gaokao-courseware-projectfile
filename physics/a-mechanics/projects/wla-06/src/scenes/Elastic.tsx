import React from 'react';
import {AutoScene} from '../components/auto';

export const Elastic: React.FC = () => <AutoScene k="elastic" d={{"tag": "考点四", "title": "弹性形变与弹力", "blocks": [{"t": "rule", "tag": "弹性形变", "at": "e1", "text": "撤去外力能{恢复原状}", "c": "red", "size": 34}, {"t": "rule", "tag": "弹力", "at": "e2", "text": "要{恢复原状}，对接触的物体产生的力", "c": "red", "size": 34}, {"t": "row", "cols": [{"blocks": [{"t": "mark", "ok": true, "at": "e3", "text": "直接接触"}]}, {"blocks": [{"t": "mark", "ok": true, "at": "e3", "text": "发生弹性形变"}]}]}, {"t": "text", "at": "e4", "text": "超过{弹性限度}，就不能完全恢复原状", "size": 30}], "callout": {"label": "易错", "at": "e5", "text": "接触{不一定}有弹力"}}} />;

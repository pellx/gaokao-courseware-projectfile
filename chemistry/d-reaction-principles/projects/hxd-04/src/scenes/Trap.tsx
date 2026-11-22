import React from 'react';
import {AutoScene} from '../components/auto';

export const Trap: React.FC = () => <AutoScene k="trap" d={{"tag": "考点七", "title": "催化剂易错辨析", "blocks": [{"t": "mark", "ok": true, "at": "tr1", "text": "改变历程、降低活化能、同等加快正逆反应", "size": 32}, {"t": "mark", "ok": false, "at": "tr2", "text": "改变 ΔH、改变平衡常数、提高平衡转化率", "size": 32}, {"t": "mark", "ok": true, "at": "tr3", "text": "有选择性：可以提高目标产物的选择性", "size": 32}], "callout": {"label": "易错", "at": "tr4", "text": "不能提高{平衡}转化率；能提高{单位时间内}的产率"}}} />;
